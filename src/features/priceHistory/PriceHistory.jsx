import React, { useState, useEffect, useMemo } from "react";
import * as XLSX from "xlsx";
import { Config } from "../../Config";

const API_URL =
  "https://krj307-2.pl/acp/api/content/items/apartments?sort={_o:1}";
const API_KEY = Config.auth.API_KEY;

const PriceHistory = () => {
  const [apartmentsData, setApartmentsData] = useState([]);

  const manualFormat = useMemo(() => {
    const now = new Date();
    return now.toISOString().split("T")[0]; // YYYY-MM-DD
  }, []);

  const normalizeNumber = (val) => (val != null ? val.toString().replace(/,/g, ".") : "X");

  const calcPriceM2 = (price, area) => {
    if (!price || !area) return "X";
    const numericPrice = Number(normalizeNumber(price).replace(/\s/g, ""));
    const numericArea = Number(normalizeNumber(area));
    if (!numericPrice || !numericArea) return "X";
    return (Math.floor((numericPrice / numericArea) * 100) / 100).toLocaleString("pl-PL", { maximumFractionDigits: 2 });
  };

  const getLatestPrice = (priceArray) => {
    if (!Array.isArray(priceArray) || priceArray.length === 0) return "X";
    return priceArray[priceArray.length - 1]?.A_TABLE_PRICE || "X";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: { "api-key": API_KEY },
        });
        const data = await response.json();

        const apartments = data.map((item) => {
          const gardenAreas = (item.A_GARDEN || []).map((g) => g.A_GARDEN_AREA || "X");
          const terraceAreas = (item.A_TERRACE || []).map((t) => t.A_TERRACE_AREA || "X");

          return {
            id: item.A_BUILDING_NUMBER || "X",
            rooms: item.A_NUMBER_OF_ROOMS || "X",
            area: item.A_AREA || "X",
            garage: item.A_GARAGE ? true : false,
            garden: gardenAreas,
            terrace: terraceAreas,
            priceM2: calcPriceM2(getLatestPrice(item.A_PRICE), item.A_AREA),
            history: item.A_PRICE || [],
            status: item.A_STATUS || "X",
            images: item.A_FLOOR_PLAN || [],
            developer: {
              name: item.A_DEWELOPER_NAME || "KRJ 3 DEVELOPMENT",
              legalForm: item.A_LEGAL_FORM_OF_DEVELOPER || "SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
              phone: item.A_PHONE_NUMBER || "518451555",
              regon: item.A_REGON_NUMBER || "528676390",
              nip: item.A_TAX_IDENTIFICATION_NUMBER || "6772510738",
              krs: item.A_COMPANY_REGISTRATION_NUMBER || "0001106614",
              email: item.A_EMAIL_ADDRESS || "kontakt@krj307-2.pl",
              website: item.A_WEBSITE_ADDRESS || "https://krj307-2.pl",
            }
          };
        });

        setApartmentsData(apartments);
      } catch (error) {
        console.error("Error fetching apartments:", error);
      }
    };

    fetchData();
  }, []);

  const exportToXLSX = () => {
    // Maksymalna liczba ogrodów i tarasów w całym zbiorze
    const maxGarden = Math.max(...apartmentsData.map((a) => a.garden.length || 0), 0);
    const maxTerrace = Math.max(...apartmentsData.map((a) => a.terrace.length || 0), 0);

    const headers = [
      "Nazwa Dewelopera",
      "Forma prawna dewelopera",
      "Numer telefonu",
      "Nr REGON",
      "Nr NIP",
      "Nr KRS",
      "Adres poczty elektronicznej",
      "Adres strony internetowej",
      "Nr Budynku",
      "Liczba pokoi",
      "Powierzchnia",
      ...Array.from({ length: maxGarden }, (_, i) => `Ogród ${i + 1}`),
      ...Array.from({ length: maxTerrace }, (_, i) => `Taras ${i + 1}`),
      "Cena za m2",
      "Cena (ostatnia)",
      "Status",
      "Data aktualizacji (ostatnia)",
      "Data wygenerowania raportu",
    ];

    const wsData = [
      headers,
      ...apartmentsData.map((apt) => {
        const lastPrice = apt.history[apt.history.length - 1] || {};
        const gardenCols = [...apt.garden, ...Array(maxGarden - apt.garden.length).fill("X")];
        const terraceCols = [...apt.terrace, ...Array(maxTerrace - apt.terrace.length).fill("X")];

        return [
          apt.developer.name,
          apt.developer.legalForm,
          apt.developer.phone,
          apt.developer.regon,
          apt.developer.nip,
          apt.developer.krs,
          apt.developer.email,
          apt.developer.website,
          apt.id,
          apt.garage ? "X" : apt.rooms,
          apt.area,
          ...gardenCols,
          ...terraceCols,
          apt.garage ? "X" : apt.priceM2,
          getLatestPrice(apt.history),
          apt.status,
          lastPrice.A_TABLE_DATE || "X",
          manualFormat,
        ];
      })
    ];

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Apartments");

    XLSX.writeFile(wb, `Apartments_Report_${manualFormat}.xlsx`);
  };

  // Generowanie nagłówków tabeli w React
  const maxGarden = Math.max(...apartmentsData.map((a) => a.garden.length || 0), 0);
  const maxTerrace = Math.max(...apartmentsData.map((a) => a.terrace.length || 0), 0);
  const headers = [
    "Nazwa Dewelopera",
    "Forma prawna dewelopera",
    "Numer telefonu",
    "Nr REGON",
    "Nr NIP",
    "Nr KRS",
    "Adres poczty elektronicznej",
    "Adres strony internetowej",
    "Nr Budynku",
    "Liczba pokoi",
    "Powierzchnia",
    ...Array.from({ length: maxGarden }, (_, i) => `Ogród ${i + 1}`),
    ...Array.from({ length: maxTerrace }, (_, i) => `Taras ${i + 1}`),
    "Cena za m2",
    "Cena (ostatnia)",
    "Status",
    "Data aktualizacji (ostatnia)",
    "Data wygenerowania raportu",
  ];

  return (
    <div>
      <table className="w-full mb-[100px] text-xs border-collapse border border-slate-300">
        <thead>
          <tr className="bg-slate-500 text-white">
            {headers.map((h, idx) => (
              <th key={idx} className="p-2 border">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {apartmentsData.map((apt, index) => {
            const lastPrice = apt.history[apt.history.length - 1] || {};
            const gardenCols = [...apt.garden, ...Array(maxGarden - apt.garden.length).fill("X")];
            const terraceCols = [...apt.terrace, ...Array(maxTerrace - apt.terrace.length).fill("X")];

            return (
              <tr key={index} className="border">
                <td className="p-2">{apt.developer.name}</td>
                <td>{apt.developer.legalForm}</td>
                <td>{apt.developer.phone}</td>
                <td>{apt.developer.regon}</td>
                <td>{apt.developer.nip}</td>
                <td>{apt.developer.krs}</td>
                <td>{apt.developer.email}</td>
                <td>{apt.developer.website}</td>
                <td>{apt.id}</td>
                <td>{apt.garage ? "X" : apt.rooms}</td>
                <td>{apt.area}</td>
                {gardenCols.map((g, i) => <td key={`g-${i}`}>{g}</td>)}
                {terraceCols.map((t, i) => <td key={`t-${i}`}>{t}</td>)}
                <td>{apt.garage ? "X" : apt.priceM2}</td>
                <td>{getLatestPrice(apt.history)}</td>
                <td>{apt.status}</td>
                <td>{lastPrice.A_TABLE_DATE || "X"}</td>
                <td>{manualFormat}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button
        className="w-full bg-slate-500 fixed z-10 bottom-0 right-0 left-0 p-4 text-white"
        onClick={exportToXLSX}
      >
        Export do XLSX
      </button>
    </div>
  );
};

export default PriceHistory;

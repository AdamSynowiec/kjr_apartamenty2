import React from 'react'
import { MapContainer, TileLayer, Marker, Circle, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import storePin from '../../assets/icon/icon-shop.svg'
import busPin from '../../assets/icon/icon-bus.svg'
import restaurantPin from '../../assets/icon/icon-restaurant.svg'
import trianglePin from '../../assets/icon/icon-triangle.svg'
import vetPin from '../../assets/icon/icon-vet.svg'
import villaPin from '../../assets/icon/icon-villa.svg'
import drinkPin from '../../assets/icon/icon-drink.svg'
import coffeePin from '../../assets/icon/icon-coffee.svg'
import hospitalPin from '../../assets/icon/icon-hospital.svg'
import funPin from '../../assets/icon/icon-fun.svg'
import gymPin from '../../assets/icon/icon-gym.svg'
import iconZoo from '../../assets/icon/icon-zoo.svg'
import icontrainstation from '../../assets/icon/icon-trainstation.svg'
import parkPin from '../../assets/icon/icon-park.svg'
import kindergartenPin from '../../assets/icon/icon-kindergarten.svg'
import icon1kmPin from '../../assets/icon/icon-1km.svg'
import icon2kmPin from '../../assets/icon/icon-2km.svg'
import iconBicycle from '../../assets/icon/icon-bicycle.svg'
import iconSchool from '../../assets/icon/icon-school.svg'

import rudavaParkMapPin from '../../assets/icon/krj307-pin.svg'

const Map = () => {

    const points = [
        {
            name: "Królowej Jadwigi residence II",
            position: [50.07208138080224, 19.860517144927893],
            type: "Lokalizacja inwestycji",
        },
        {
            name: "Sklep",
            position: [50.0681082462907, 19.847948872157193],
            type: "sklep",
        },
        {
            name: "Restauracja",
            position: [50.067827836018644, 19.8465495013924],
            type: "restauracja",
        },
        {
            name: "Przedszkole",//
            position: [50.066505585141485, 19.851398935239004],
            type: "przedszkole",
        },
        {
            name: "Przedszkole",//
            position: [50.07043091630235, 19.85680936815686],
            type: "przedszkole",
        },
        {
            name: "Przedszkole",//
            position: [50.06514416327507, 19.867646717790752],
            type: "przedszkole",
        },
        {
            name: "Przedszkole",//
            position: [50.06477464457212, 19.86733556094019],
            type: "przedszkole",
        },
        {
            name: "Piekarnia",
            position: [50.068415263477334, 19.852913211176812],
            type: "piekarnia",
        },
        {
            name: "Przystanek Autobusowy",
            position: [50.07569079985779, 19.848888164628903],
            type: "przystanekAutobusowy",
        },
        {
            name: "Przystanek Autobusowy",
            position: [50.06976261179213, 19.85902076512302],
            type: "przystanekAutobusowy",
        },
        {
            name: "Przystanek Autobusowy",
            position: [50.06801689013347, 19.847315605245267],
            type: "przystanekAutobusowy",
        },
        {
            name: "Przystanek Kolejowy",
            position: [50.079711762916794, 19.849328046915794],
            type: "przystanekKolejowy",
        },
        {
            name: "Restauracja",
            position: [50.081652587895974, 19.849649254741614],
            type: "restauracja",
        },
        {
            name: "Restauracja",
            position: [50.06651348173301, 19.87499593896189],
            type: "restauracja",
        },
        {
            name: "Kopiec Kościuszki",
            position: [50.06023168669693, 19.847389824894357],
            type: "kopiecKościuszki",
        },
        {
            name: "Weterynarz",
            position: [50.069740975363025, 19.856664276119176],
            type: "weterynarz",
        },
        {
            name: "Piekarnia",
            position: [50.065134663897744, 19.866016965527237],
            type: "piekarnia",
        },
        {
            name: "Park Decjusza",
            position: [50.06577348644107, 19.872102916970487],
            type: "parkDecjusza",
        },
        {
            name: "Willa Decjusza",
            position: [50.0637505191376, 19.871605323485014],
            type: "willaDecjusza",
        },
        {
            name: "Weterynarz",
            position: [50.06377509008878, 19.865340748754257],
            type: "weterynarz",
        },
        {
            name: "Padel Club",
            position: [50.070360767600654, 19.868423541923956],
            type: "padelClub",
        },
        {
            name: "Restauracja",
            position: [50.065691421777274, 19.875517863243978],
            type: "restauracja",
        },
        {
            name: "Kawiarnia",
            position: [50.06488564358292, 19.87851120850645],
            type: "kawiarnia",
        },
        {
            name: "Kawiarnia",
            position: [50.064765119103555, 19.87944537997618],
            type: "kawiarnia",
        },
        {
            name: "Szpital",
            position: [50.06369416898309, 19.880099076238057],
            type: "szpital",
        },
        {
            name: "Apteka",
            position: [50.06464093668177, 19.879828494786995],
            type: "szpital",
        },
        {
            name: "Centrum zabaw",
            position: [50.06304676575449, 19.880764264066574],
            type: "centrumZabaw",
        },
        {
            name: "Sklep",
            position: [50.06392144676778, 19.88243796247381],
            type: "sklep",
        },
        {
            name: "Siłownia",
            position: [50.062521087765425, 19.881214289095116],
            type: "silownia",
        },
        {
            name: "Zoo",
            position: [50.054446166607825, 19.85170215705568],
            type: "zoo",
        },
        {
            name: "Sklep",
            position: [50.0639103856432, 19.88240316814433],
            type: "sklep",
        },
        {
            name: "1km",
            position: [50.0747109623069, 19.87389884459736],
            type: "d1000",
        },
        {
            name: "2km",
            position: [50.0747109623069, 19.88819984459736],
            type: "d2000",
        },
        {
            name: "Szkoła podstawowa",
            position: [50.063922712283876, 19.864911570254066],
            type: "szkola",
        },
        {
            name: "Szkoła muzyczna",
            position: [0.06675695584273, 19.873785473834882],
            type: "szkola",
        },
        {
            name: "Ścieszka Rowerowa biegnąca do Błoń",
            position: [50.07516122990731, 19.860423907645863],
            type: "rower",
        },
    ];

    const icons = {
        inwestycja: L.icon({
            iconUrl: rudavaParkMapPin,
            iconSize: [120, 120],
            iconAnchor: [60, 120],
        }),
        d1000: L.icon({
            iconUrl: icon1kmPin,
            iconSize: [60, 60],
            iconAnchor: [30, 60],
        }),
        d2000: L.icon({
            iconUrl: icon2kmPin,
            iconSize: [60, 60],
            iconAnchor: [30, 60],
        }),
        sklep: L.icon({
            iconUrl: storePin,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        restauracja: L.icon({
            iconUrl: restaurantPin,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        przedszkole: L.icon({//
            iconUrl: kindergartenPin,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        piekarnia: L.icon({//
            iconUrl: storePin,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        przystanekAutobusowy: L.icon({
            iconUrl: busPin,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        przystanekKolejowy: L.icon({
            iconUrl: icontrainstation,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        kopiecKościuszki: L.icon({
            iconUrl: trianglePin,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        weterynarz: L.icon({
            iconUrl: vetPin,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        parkDecjusza: L.icon({
            iconUrl: parkPin,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        willaDecjusza: L.icon({//
            iconUrl: villaPin,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        padelClub: L.icon({
            iconUrl: drinkPin,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        kawiarnia: L.icon({
            iconUrl: coffeePin,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        szpital: L.icon({
            iconUrl: hospitalPin,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        centrumZabaw: L.icon({
            iconUrl: funPin,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        silownia: L.icon({
            iconUrl: gymPin,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        zoo: L.icon({
            iconUrl: iconZoo,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        szkola: L.icon({
            iconUrl: iconSchool,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
        rower: L.icon({
            iconUrl: iconBicycle,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        }),
    };

    const center = [50.07208138080224, 19.860517144927893];

    return (
        <section id="lokalizacja" className='bg-[#1D1D1D]'>
            <div className="w-full h-[810px]">
                <MapContainer
                    center={center}
                    zoom={15}
                    scrollWheelZoom={false} // desktop scroll myszką
                    dragging={window.innerWidth > 768} // desktop: przeciąganie
                    touchZoom={true} // mobile: zoom i przesuwanie dwoma palcami
                    doubleClickZoom={true}
                    className="w-full h-full grayscale-[60%] brightness-[90%]"
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://carto.com/">Carto</a>'
                    />

                    <Circle center={center} radius={1000} pathOptions={{ color: "#C2A992", fillColor: "#C2A992", fillOpacity: 0.2, weight: 1 }} />
                    <Circle center={center} radius={2000} pathOptions={{ color: "#C2A992", fillColor: "#C2A992", fillOpacity: 0.2, weight: 1 }} />

                    {points.map((p, i) => (
                        <Marker key={i} position={p.position} icon={icons[p.type] || icons.inwestycja}>
                            <Popup>
                                <strong>{p.name}</strong>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </section>
    )
}

export default Map
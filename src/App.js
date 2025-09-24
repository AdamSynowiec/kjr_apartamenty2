import React from "react";
import HomePage from "./features/homepage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./features/privacyPolicy/PrivacyPolicy";
import PriceHistory from "./features/priceHistory/PriceHistory";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
          <Route path="/historia-cen" element={<PriceHistory />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

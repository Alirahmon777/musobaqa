import React from "react";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
export default function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "2"
  );
  const [mode, setMode] = useState(localStorage.getItem("theme") || true);
  return (
    <context.Provider value={{ language, mode, LANG }}>
      <div className="wrapper">
        <Aside />
        <main className="main">
          <Header setLanguage={setLanguage} setMode={setMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </context.Provider>
  );
}

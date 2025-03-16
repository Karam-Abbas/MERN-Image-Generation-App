import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import GeneratePage from "./pages/GeneratePage.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import Layout from "./components/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} ></Route>
        <Route path="/generate" element={<GeneratePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wenerskin } from "../src/pages/wenerskin";
import { Zeropreenchedor } from "./pages/zeropreenchedor";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wenerskin" element={<Wenerskin />} />
        <Route path="/" element={<Zeropreenchedor />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

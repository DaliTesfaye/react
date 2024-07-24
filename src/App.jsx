import { Dictionaries } from "./Dictionaries";
import Navbar from "./Navbar";
import Customers from "./pages/Customers";
import Employees from "./pages/Employees";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Navbar>
      <Routes>
        <Route path="/employees" element={<Employees />} />
        <Route path="/Dictionaries" element={<Dictionaries />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </Navbar>
  </BrowserRouter>;
}

export default App;

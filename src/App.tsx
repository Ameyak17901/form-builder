import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { CreateForm } from "./pages/CreateForm";
import { Preview } from "./pages/Preview";
import { Forms } from "./pages/Forms";

function App() {
  return (
    <div className="flex justify-evenly mx-auto w-full h-full items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<CreateForm />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/myforms" element={<Forms />} />
          <Route path="/" element={<Forms />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}
export default App;

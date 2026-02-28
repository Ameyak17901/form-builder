import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { CreateForm } from "./pages/CreateForm";
import { Preview } from "./pages/Preview";
import { Forms } from "./pages/Forms";
import { DrawerLayout } from "./components/DrawerLayout";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="flex min-w-full min-h-full items-center">
      <BrowserRouter>
        <Grid spacing={2} className="flex w-full items-center gap-x-2">
          <DrawerLayout />
          <Routes>
            <Route path="/create" element={<CreateForm />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/myforms" element={<Forms />} />
            <Route path="/" element={<Forms />} />
          </Routes>
          <Outlet />
        </Grid>
      </BrowserRouter>
    </div>
  );
}
export default App;

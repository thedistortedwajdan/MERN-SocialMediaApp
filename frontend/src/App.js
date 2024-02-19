import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <HashRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Account />} />
          <Route exact path="/register" element={<Account />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

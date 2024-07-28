import CssBaseline from "@mui/material/CssBaseline";

import { GlobalContextProvider } from "context/global";
import Home from "./pages/Home";
import { ThemeProvider } from "./theme";
import NotistackProvider from "components/NotistackProvider";

import { loadIcons } from "@iconify/react";
import { useEffect } from "react";
import   { ICONS_LIST } from "utils/icons";

function App() {
  useEffect(() => {
    loadIcons(ICONS_LIST, (e) => {
      console.log("Loaded icons", e);
    });
  }, []);

  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <NotistackProvider>
        <GlobalContextProvider>
          <Home />
        </GlobalContextProvider>
      </NotistackProvider>
    </ThemeProvider>
  );
}

export default App;

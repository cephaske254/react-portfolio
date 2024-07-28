import { SnackbarProvider } from "notistack";
import CssBaseline from "@mui/material/CssBaseline";

import { GlobalContextProvider } from "context/global";
import Home from "./pages/Home";
import { ThemeProvider } from "./theme";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <SnackbarProvider
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
      >
        <GlobalContextProvider>
          <Home />
        </GlobalContextProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;

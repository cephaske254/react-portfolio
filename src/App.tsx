import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "./theme";
import checkProtocol from "./utils/checkProtocol";
import registerServiceWorker from "./worker/registerServiceWorker";

registerServiceWorker();

function App() {
  useEffect(() => {
    checkProtocol();
  }, []);

  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <Home />
    </ThemeProvider>
  );
}

export default App;

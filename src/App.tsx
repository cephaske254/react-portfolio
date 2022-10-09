import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "./theme";
import registerServiceWorker from "./worker/registerServiceWorker";

function App() {
  useEffect(() => {
    registerServiceWorker(console.log);
  }, []);

  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <Home />
    </ThemeProvider>
  );
}

export default App;

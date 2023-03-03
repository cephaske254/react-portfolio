import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import { ThemeProvider } from "./theme";
import registerServiceWorker from "./worker/registerServiceWorker";

function App() {
  registerServiceWorker();

  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <Home />
    </ThemeProvider>
  );
}

export default App;

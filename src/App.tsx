import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import { ThemeProvider } from "./theme";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <Home />
    </ThemeProvider>
  );
}

export default App;

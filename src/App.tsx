import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "./theme";
import checkProtocol from "./utils/checkProtocol";
import registerServiceWorker from "./worker/registerServiceWorker";

registerServiceWorker();

function App() {
  const [hasHandler, setHandler] = useState(false);

  const openApp = () => {
    return () => {
      window.location.href = "planrr://";
    };
  };

  useEffect(() => {
    checkProtocol().then((exists) => {
      setHandler(exists);
      alert(exists);
    });
  }, []);

  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <Home />

      <Box position="fixed" bottom={0}>
        {!!hasHandler ? (
          <Button variant="text" size="small" onClick={openApp()}>
            Open in app
          </Button>
        ) : (
          ".."
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;

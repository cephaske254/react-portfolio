import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./theme";
import router from "./utils/router";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

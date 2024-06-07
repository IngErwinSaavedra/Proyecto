import { ThemeProvider } from "./context";
import { Toaster } from "sonner";
import "./assets/scss/app.scss";
import "./assets/scss/icons.scss";
import "./App.css";
import AllRoutes from "./routes/Routes";

function App() {
  return (
    <>
      <ThemeProvider>
        <AllRoutes />
        <Toaster richColors />
      </ThemeProvider>
    </>
  );
}

export default App;

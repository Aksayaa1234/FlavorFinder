import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";

const theam=createTheme({
  palette:{
    primary:{
      main:"#93b81a"
    },
    secondary:{
      main:"#f05a3f",
      purple:"#FCDC2A"
    },
    white:{
      main:"#f5fef0",
      cream:"#e3e8d4"
    }
  }
})

function App() {
  return (
    <>
        <CssBaseline/>
        <ThemeProvider theme={theam}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Search/>}></Route>
          <Route path="/find" element={<Body/>}></Route>
        </Routes>   
        </ThemeProvider>
    </>
  );
}

export default App;

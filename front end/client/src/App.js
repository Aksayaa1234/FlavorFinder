import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./page/Login";
import Template from "./page/Template";
import Home from "./page/Home";
import Recipes from "./page/Recipe";
import { QueryProvider } from "./context/QueryContext";
import RecipeDetails from "./page/RecipeDetails";

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
          <QueryProvider>
            <Routes>
              <Route path="/" element={<Template/>}>
                  <Route index element={<Home/>}/>
                  <Route path="/find" element={<Body/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/recipesearch" element={<Recipes/>}/>
                  <Route path="/recipe" element={<RecipeDetails/>}/>
              </Route>
            </Routes>  
          </QueryProvider> 
        </ThemeProvider>
    </>
  );
}

export default App;

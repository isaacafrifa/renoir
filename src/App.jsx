import "./assets/css/App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import { ABOUT_URL, CONTACT_URL, HOME_URL, MENU_URL } from "./constants/urls";

function App() {
  return (
    <>
      <div>
        {/* <NavigationBar /> */}
        <div className="app">
        <BrowserRouter>
          <Routes>
            {/* <Route element={<Layout />}> */}
              <Route path={HOME_URL} element={<Home />} />
              <Route path={ABOUT_URL} element={<About />} />
              <Route path={CONTACT_URL} element={<Contact />} />
              <Route path={MENU_URL} element={<Menu />} />
              <Route path="/*" element={<Page404 />} />
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;

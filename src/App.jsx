import "./assets/css/App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ABOUT_URL, CONTACT_URL, HOME_URL, MENU_URL } from "./constants/urls";
import Layout from "./components/Layout";
import Loader from "./components/Loader"
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Menu = lazy(() => import('./pages/Menu'));
const Page404 = lazy(() => import('./pages/Page404'));


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path={HOME_URL} element={<Home />} />
              <Route path={ABOUT_URL} element={<About />} />
              <Route path={CONTACT_URL} element={<Contact />} />
              <Route path={MENU_URL} element={<Menu />} />
              <Route path="/*" element={<Page404 />} />
            </Route>
          </Routes>
          </Suspense>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App;

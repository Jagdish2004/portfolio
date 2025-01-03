import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar, DarkModeToggle, SoundButton, SocialBar } from "./components/";
import { About, Contact, Home, Projects } from "./pages";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <main className='bg-slate-300/20 dark:bg-gray-900 transition-colors duration-300'>
      <Navbar />
      {!isHome && <DarkModeToggle />}
      <SoundButton />
      <SocialBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/*'
          element={
            <>
              <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </main>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

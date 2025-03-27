import React ,{useEffect}from 'react';
import { Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import AboutUs from './pages/home/AboutUs.jsx';
import Events from './pages/events/events.jsx';
import Members from './pages/members/Members.jsx';
import Developers from './pages/developers/developers.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import ResourceHub from './pages/Resource Hub/ResourceHub.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import PhotoGallery from './pages/Gallerydedicated/Photogallery.jsx';
import Dehleez from './pages/Gallerydedicated/Dehleez.jsx';
import Orientation from './pages/Gallerydedicated/Orientation.jsx';
import Spectrum from './pages/Gallerydedicated/Spectrum.jsx';
import Utkrishta from './pages/Gallerydedicated/Utkrishta.jsx';
import More from './pages/Gallerydedicated/More.jsx';
import FAQ from './components/FAQs.jsx';
import QuizApp from './pages/COS/quiz.jsx';

// import PrivateRoute from './components/PrivateRoute.jsx';

function App() {
  const location = useLocation();

  useEffect(() => {
   
    localStorage.setItem("lastPage", location.pathname);
  }, [location]);

  useEffect(() => {
   
    const lastPage = localStorage.getItem("lastPage");
    if (lastPage) {
      window.history.replaceState({}, "", lastPage);
    }
  }, []);

  return (
   <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/annual-attraction" element={<Events />} />
        <Route path="/members" element={<Members />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/Resource+Hub" element={<ResourceHub />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/photogallery" element={<PhotoGallery />}/>
        <Route path='/dehleez' element={<Dehleez/>}/>
        <Route path='/orientation' element={<Orientation/>}/>
        <Route path='/spectrum' element={<Spectrum/>}/>
        <Route path='/utkrishtha' element={<Utkrishta/>}/>
        <Route path='/more' element={<More/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/chamber-of-secrets' element={<QuizApp/>}/>


       
      </Routes>
      <Footer />
      </>
  );
}

export default App;

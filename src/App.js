import logo from './logo.svg';
import './App.css';
import Header from './Pages/layouts/Header';
import Footer from './Pages/layouts/Footer';


// import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import './plugins/animate/animate.css';
import './plugins/aos/aos.css';
import './plugins/venobox/venobox.css';
// import 'bootstrap/bootstrap.min.js';
import './plugins/aos/aos.js';
// import './plugins/aos/aos.js';
import './plugins/venobox/venobox.min.js';
import './plugins/filterizr/jquery.filterizr.min.js';
import './plugins/google-map/gmap.js';
import './js/script.js';
// import './scss/_buttons.scss';
// import './scss/_common.scss';
// import './scss/_mixins.scss';
// import './scss/_typography.scss';
// import './scss/_variables.scss';
// import './scss/style.scss';

// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';

import { Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Courses from './Pages/Courses';

import './plugins/aos/aos.css';

function App() {
  return (
    <>

      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

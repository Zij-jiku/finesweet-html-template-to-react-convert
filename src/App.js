
import './index.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PolicyPage from './pages/PolicyPage';
import PriceingPage from './pages/PriceingPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import BlogDetails from './pages/BlogDetails';
import FeaturesPage from './pages/FeaturesPage';

// import your route components too

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog-page" element={<BlogPage />}></Route>
          <Route path="/blog-details" element={<BlogDetails />}></Route>
          <Route path="/about-us" element={<AboutPage />}></Route>
          <Route path="/contact-us" element={<ContactPage />}></Route>
          <Route path="/policy-us" element={<PolicyPage />}></Route>
          <Route path="/price-plan" element={<PriceingPage />}></Route>
          <Route path="/my-portfolio" element={<PortfolioPage />}></Route>
          <Route path="/features" element={<FeaturesPage />}></Route>
        </Routes>
      </BrowserRouter>,
    </>
  );
}

export default App;

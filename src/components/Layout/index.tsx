import Header from '../Header';
import Footer from '../Footer';
import Contato from '../../pages/contato';
import Home from '../../pages/home';
import About from '../../pages/about';
import OqueFaco from '../../pages/oquefaco';
import Doubts from '../../pages/doubts';
import Gallery from '../../pages/gallery';
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Home/>
      <About/>
      <OqueFaco/>
      <Doubts/>
      <Gallery/>
      <Contato/>
      <Footer />
     
    </>
  );
}

export default Layout;
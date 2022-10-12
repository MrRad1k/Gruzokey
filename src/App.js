import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './components/header/components';
import Carousel from './components/carousel/components';
import Informations from './components/infomations/jumbotron';
import Container from './components/container/components';
import Footer from './components/footer/components';


function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Container />
      <Informations />
      <Footer />
    </div>
  );
}

export default App;

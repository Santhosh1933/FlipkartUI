import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import { Products } from './components/TopSlider/products';
import { Slider } from './components/TopSlider/slider';
import { Electronic } from './components/product_slider/electronic';
import { Footer } from './components/footer/footer';
import { Content_area } from './components/footer/content_area';

function App() {
  return (
    <div className="App bg-gray h-[100vh]">
      <Header/>
      <Products/>
      <Slider/>
      <Electronic/>
      <Content_area/>
      <Footer/>
    </div>
  );
}

export default App;

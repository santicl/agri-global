import './App.css';
import './Category.css';
import './Slider.css';
import Body from './layouts/Body';
import Footer from './layouts/Footer';
import Nav from './layouts/Nav';
import { Loading } from './components/Loading';
import { useCarts } from './hooks/useCarts';

function App() {
  const { isLoading } = useCarts();


  return (
    <div className="App">
      {
        isLoading && <Loading />
      }
      <Nav />
      <img className='Img-header' src='https://testing-e-commerce.vercel.app/static/media/testshop.de15359a54a382350d98.png' />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

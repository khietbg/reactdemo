import logo from './logo.svg';
import './App.css';
import HeaderSection from './components/HeaderSection';
import SliderSection from './components/SliderSection';
import DelailSection from './components/DelailSection';
import ProductSection from './components/ProductSection';
import FindSection from './components/FindSection';
import ClientSection from './components/ClientSection';
import Sign from './components/Sign';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <>
  <div className="hero_area">
    {/* header section strats */}
   <HeaderSection></HeaderSection>

    {/* end header section */}
    {/* slider section */}
   <SliderSection></SliderSection>
    {/* end slider section */}
  </div>
  {/* detail section */}
  <DelailSection></DelailSection>
  {/* end detail section */}
  {/* products section */}
 <ProductSection></ProductSection>
  {/* end products section */}
  {/* find section */}
 <FindSection></FindSection>
  {/* end find section */}
  {/* client section */}
  <ClientSection></ClientSection>
  {/* end client section */}
  {/* sign section */}
 <Sign></Sign>
  {/* end sign section */}
  {/* info section */}
  <Info></Info>
  {/* end info section */}
  {/* footer section */}
<Footer></Footer>
</>

    </div>
  );
}

export default App;

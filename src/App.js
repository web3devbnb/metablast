import './App.css';
import Header from './header'
import {Vidwrapper,About,Features,Character,Basecamp,Roadmap,Tokenomics,Communities,Partners,Investors,TEAM,NFTsItem} from './Content'
import Footer from './footer'
import GlobalStyles from './GlobalStyles'
import logo from './media/logo-200x200.png'

function App() {
  return (
    <GlobalStyles>
          <Header/>
          <Vidwrapper/>
          <About/>
          <Features/>
          <NFTsItem/>
          <Character/>
          <Basecamp/>
          <Roadmap/>
          <Tokenomics/>
          {/* <Communities/> */}
          {/* <Partners/> */}
          {/* <Investors/>- */}
          <TEAM/>
          <Footer/>
    </GlobalStyles>
  );
}

export default App;

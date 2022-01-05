import './App.css';
import Header from './header'
import {Vidwrapper,About,Features,Character,CharacterMB,Basecamp,Roadmap,Tokenomics,Communities,Partners,Investors,TEAM,NFTsItem} from './Content'
import Footer from './footer'
import GlobalStyles from './GlobalStyles'
import { useEffect,useState} from 'react';

function App() {
  const [show,setShow] = useState(true)
  const [showMB,setShowMB] = useState(false)
  useEffect(()=>{
    const handleResize = ()=>{
        if(window.innerWidth>500){
            setShowMB(false)
            setShow(true)
        }else{
            setShowMB(true)
            setShow(false)
        }
    }
    window.addEventListener('scroll',handleResize)
    //cleanup func
    return()=>{
        window.removeEventListener('scroll',handleResize)
    }
  },[])
  return (
    <GlobalStyles>
          <Header/>
          <Vidwrapper/>
          <About/>
          <Features/>
          <NFTsItem/>
          {show &&<Character/>}
          {showMB &&<CharacterMB/>}
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

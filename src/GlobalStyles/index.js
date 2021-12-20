import { useEffect } from 'react';
import './GlobalStyles.scss'
import '../import/Css/AOS.css'
import AOS from "aos";

function GlobalStyles({children}){
        useEffect(() => {
                AOS.init();
                AOS.refresh();
              }, []);
        return children
}

export default GlobalStyles
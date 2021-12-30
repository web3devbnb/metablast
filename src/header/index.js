import { useEffect,useState } from 'react'
import clsx from 'clsx'
import urlBtn from '../media/orange_button.png'
import urlLogo from '../media/Logo.png'
import style from './header.module.scss'

function Header(){
    const [show,setShow] = useState(false)
    const [showMB,setShowMB] = useState(false)
    
    useEffect(()=>{
        const handleScroll = () =>{
            setShow(window.scrollY>=200)
        }
        window.addEventListener('scroll',handleScroll)
        //cleanup func
        return()=> window.removeEventListener('scroll',handleScroll)
    },[])

    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth>1000)
            setShowMB(false)
        }
        window.addEventListener('resize',handleResize)
        //cleanup func
        return()=>{
        window.removeEventListener('resize',handleResize)

        }

    })
    useEffect(()=>{
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
                document.getElementById("navbarContainer").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-250px";
                document.getElementById("navbarContainer").style.top = "-250px";
            }
        prevScrollpos = currentScrollPos;
        }
    })

    return(
    <>
        <header className={clsx(style.header,{[style.headerDown]:show})} id='navbar'>
        <div className={clsx(style.headerContainer,{[style.headerContainerDown]:show})} id='navbarContainer'>
            <div className={style.headerContainerLogo}>
                <img src={urlLogo} alt="logo"/>
            </div>
            <div className={clsx(style.headerContainerMenu,{[style.display_block]:showMB})}>
                <nav>
                    <ul className={clsx(style.mainMenu,{[style.responsive]:showMB})} id="myTopnav">
                        <li><a href="#features">FEATURES</a></li>
                        {/* <li><a href="#NFTsItem">NFTs Item</a></li> */}
                        <li><a href="#character">CHARACTER</a></li>
                        <li><a href="#roadmap">ROADMAP</a></li>
                        <li><a href="#tokenomics">TOKENOMICS</a></li>
                        <li><a href="#TEAM">TEAM</a></li>
                        <li><a href="https://whitepaper.metagunner.io/" target="_blank">WHITEPAPER</a></li>
                    </ul>
                </nav>
            </div>
            <button className={style.menu_mobile_icon} onClick={()=>setShowMB(!showMB)} >
                <img src={urlBtn} alt=""/>
            </button>
        </div>
    </header>
    </>
    )
}
export default Header
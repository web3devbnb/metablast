import { useEffect,useState } from 'react'
import clsx from 'clsx'
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

    

    return(
    <>
        <header className={clsx(style.header,{[style.headerDown]:show})}>
        <div className={clsx(style.headerContainer,{[style.headerContainerDown]:show})}>
            <div className={style.headerContainerLogo}>
                <img src={urlLogo} alt="logo"/>
            </div>
            <div className={clsx(style.headerContainerMenu,{[style.display_block]:showMB})}>
                <nav>
                    <ul className={clsx(style.mainMenu,{[style.responsive]:showMB})} id="myTopnav">
                        <li><a href="#" className={style.active}>META GUNNER</a></li>
                        <li><a href="#About">CONCEPT</a></li>
                        <li><a href="#Metaverse">GAMEPLAY</a></li>
                        <li><a href="#Roadmap">SYSTEM</a></li>
                        <li><a href="#Tokenomics">ECONOMY</a></li>
                        <li><a href="#Communities">TOKENOMICS</a></li>
                        <li><a href="#Roadmap">ROADMAP</a></li>
                        <li><a href="#Backers">THE TEAM</a></li>
                        
                    </ul>
                </nav>
            </div>
            <button className={style.menu_mobile_icon} onClick={()=>setShowMB(!showMB)} >
                        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48bGluZWFyR3JhZGllbnQgaWQ9IkVJUGMwcVROQ1gwRXVqWXd0eEthWGFfTW11cFp0UGJudzY2X2dyMSIgeDE9IjEyLjA2NiIgeDI9IjM0Ljg5MSIgeTE9Ii4wNjYiIHkyPSIyMi44OTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii4yMzciIHN0b3AtY29sb3I9IiMzYmM5ZjMiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii44NSIgc3RvcC1jb2xvcj0iIzE1OTFkOCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNFSVBjMHFUTkNYMEV1all3dHhLYVhhX01tdXBadFBibnc2Nl9ncjEpIiBkPSJNNDMsMTVINWMtMS4xLDAtMi0wLjktMi0ydi0yYzAtMS4xLDAuOS0yLDItMmgzOGMxLjEsMCwyLDAuOSwyLDJ2MkM0NSwxNC4xLDQ0LjEsMTUsNDMsMTV6Ij48L3BhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJFSVBjMHFUTkNYMEV1all3dHhLYVhiX01tdXBadFBibnc2Nl9ncjIiIHgxPSIxMi4wNjYiIHgyPSIzNC44OTEiIHkxPSIxMi4wNjYiIHkyPSIzNC44OTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii4yMzciIHN0b3AtY29sb3I9IiMzYmM5ZjMiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii44NSIgc3RvcC1jb2xvcj0iIzE1OTFkOCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNFSVBjMHFUTkNYMEV1all3dHhLYVhiX01tdXBadFBibnc2Nl9ncjIpIiBkPSJNNDMsMjdINWMtMS4xLDAtMi0wLjktMi0ydi0yYzAtMS4xLDAuOS0yLDItMmgzOGMxLjEsMCwyLDAuOSwyLDJ2MkM0NSwyNi4xLDQ0LjEsMjcsNDMsMjd6Ij48L3BhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJFSVBjMHFUTkNYMEV1all3dHhLYVhjX01tdXBadFBibnc2Nl9ncjMiIHgxPSIxMi4wNjYiIHgyPSIzNC44OTEiIHkxPSIyNC4wNjYiIHkyPSI0Ni44OTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii4yMzciIHN0b3AtY29sb3I9IiMzYmM5ZjMiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii44NSIgc3RvcC1jb2xvcj0iIzE1OTFkOCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNFSVBjMHFUTkNYMEV1all3dHhLYVhjX01tdXBadFBibnc2Nl9ncjMpIiBkPSJNNDMsMzlINWMtMS4xLDAtMi0wLjktMi0ydi0yYzAtMS4xLDAuOS0yLDItMmgzOGMxLjEsMCwyLDAuOSwyLDJ2MkM0NSwzOC4xLDQ0LjEsMzksNDMsMzl6Ij48L3BhdGg+PC9zdmc+"/>
                        </button>
        </div>
    </header>
    </>
    )
}
export default Header
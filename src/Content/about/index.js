import style from './about.module.scss'
import clsx from 'clsx'
import urlimg5 from '../../media/metagunner-namngang.png'
import urlImgBg from '../../media/banner-9.png'

function About(){
    return(
        <section className={style.about} id='about'>
            <div className= {clsx('container',style.container)}>
                <img src={urlImgBg} className={style.imgBg} alt=""/>
                <div className={style.aboutWrapper}>
                    <img src={urlimg5} alt=""/>
                    <p data-aos="zoom-in" data-aos-delay="200"> A world where you can immerse yourself in battles located in a barren wilderness inhabited by monsters. Grab your friends and get ready to earn valuable rewards and enjoy the moment after stressful hours of work.</p>
                    <a href="#" className={clsx('btn btnPrimary',style.btnMB)} target="_blank" data-aos="zoom-in" data-aos-delay="400">Pitch Deck</a>
                    <a href="#" className={clsx('btn btnSecondary',style.btnMB)} target="_blank" data-aos="zoom-in" data-aos-delay="400">Play Now</a>
                </div>
            </div>
        </section>
    )
}
export default About
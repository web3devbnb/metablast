import style from './about.module.scss'
import clsx from 'clsx'
import urlimg5 from '../../media/metagunner-namngang.png'

function About(){
    return(
        <section className={style.about}>
                    {/* <img src={urlimg5} className={style.aboutWrapperimg} data-value="5" alt=""/> */}
            <div className= {clsx('container',style.container)}>
                <div className={style.aboutWrapper}>
                    <img src={urlimg5} alt=""/>
                    {/* <h2 className={clsx('title',style.aboutWrapperTitle)} data-aos="zoom-in"><span>METAGUNNER</span></h2> */}
                    <p data-aos="zoom-in" data-aos-delay="200"> A world where you can immerse yourself in battles located in a barren wilderness inhabited by monsters. Grab your friends and get ready to earn valuable rewards and enjoy the moment after stressful hours of work.</p>
                    <a href="#" className={clsx('btn btnPrimary',style.btnMB)} target="_blank" data-aos="zoom-in" data-aos-delay="400">Play Now</a>
                    <a href="#" className={clsx('btn btnSecondary',style.btnMB)} target="_blank" data-aos="zoom-in" data-aos-delay="400">Pitch Deck</a>
                </div>
            </div>
        </section>
    )
}
export default About
import style from './about.module.scss'
import clsx from 'clsx'

function About(){
    return(
        <section className={style.about}>
            <div className='container'>
                <div className={style.aboutWrapper}>
                    <h2 className={clsx('title',style.aboutWrapperTitle)} data-aos="zoom-in"><span>METAGUNNER</span></h2>
                    <p data-aos="zoom-in" data-aos-delay="200"> A classic game built on the foundation of blockchain technology. At Meta Gunner, besides making a profit from playing games, we want to give users a relaxing time during the day.</p>
                    <a href="#" className={clsx('btn btnPrimary',style.btnMB)} target="_blank" data-aos="zoom-in" data-aos-delay="400">Play Now</a>
                    <a href="#" className={clsx('btn btnSecondary',style.btnMB)} target="_blank" data-aos="zoom-in" data-aos-delay="400">Pitch Deck</a>
                </div>
            </div>
        </section>
    )
}
export default About
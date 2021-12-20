import style from './about.module.scss'
import clsx from 'clsx'

function About(){
    return(
        <section className={style.about}>
            <div className='container'>
                <div className={style.aboutWrapper}>
                    <h2 className={clsx('title',style.aboutWrapperTitle)} data-aos="zoom-in">THE FIRST <span> METAVERSE</span> RACING GAME ON BSC</h2>
                    <p data-aos="zoom-in" data-aos-delay="200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam minima quisquam itaque placeat, odio sunt fugit doloribus soluta obcaecati consequuntur, autem alias. Iusto fugit et dolores quia, aperiam tempore corporis.</p>
                    <a href="#" className={clsx('btn btnPrimary',style.btnMB)} target="_blank" data-aos="zoom-in" data-aos-delay="400">Play Now</a>
                    <a href="#" className={clsx('btn btnSecondary',style.btnMB)} target="_blank" data-aos="zoom-in" data-aos-delay="400">Pitch Deck</a>
                </div>
            </div>
        </section>
    )
}
export default About
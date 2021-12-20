import Kieran from '../../media/Kieran.1d6b5da2.png'
import Santiago from '../../media/Santiago.e03921dd.png'
import Stani from '../../media/Stani.851904b5.png'

import style from './Advisors.module.scss'

function Advisors(){
    return(
        <section className={style.Advisors}>
            <div className="container">
                <h2 className="title" data-aos="fade-up">Our <span>Advisors</span></h2>
                <div className={style.AdvisorsWrapper}>
                    <div className={style.AdvisorsWrapperItem} data-aos="zoom-in-up" data-aos-delay="200">
                        <div className={style.AdvisorsWrapperItemTop}>
                            <img src={Kieran} alt=""/>
                        </div>
                        <div className={style.AdvisorsWrapperItemBottom}>
                            <a className={style.title} href="">
                                <h3>Kieran Warwick</h3>
                            </a>
                            <p>CEO ILLUVIUM</p>
                        </div>
                    </div>
                    <div className={style.AdvisorsWrapperItem} data-aos="zoom-in-up" data-aos-delay="400">
                        <div className={style.AdvisorsWrapperItemTop}>
                            <img src={Santiago} alt=""/>
                        </div>
                        <div className={style.AdvisorsWrapperItemBottom}>
                            <a className={style.title} href="">
                                <h3>Santiago R Santos</h3>
                            </a>
                            <p>WEB3 INVESTOR (EX PARAFI)</p>
                        </div>
                    </div>
                    <div className={style.AdvisorsWrapperItem} data-aos="zoom-in-up" data-aos-delay="600">
                        <div className={style.AdvisorsWrapperItemTop}>
                            <img src={Stani} alt=""/>
                        </div>
                        <div className={style.AdvisorsWrapperItemBottom}>
                            <a className={style.title} href="">
                                <h3>Stani Kulechov</h3>
                            </a>
                            <p>FOUNDER OF AAVE</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Advisors
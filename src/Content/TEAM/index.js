import urlImgPHU from '../../media/PHU.png'
import urlImgHO from '../../media/HO-ANH.png'
import urlImgCUONG from '../../media/CUONG.png'
import urlImgTAN from '../../media/TAN.png'
import urlImgAN from '../../media/AN.png'
import urlImgTHIEN from '../../media/THIEN.png'
import urlImgPHUOC from '../../media/PHUOC.png'
import urlImgMINH from '../../media/MINH.png'
import urlImgMEO from '../../media/MEO.png'
import urlTitle from '../../media/Team.png'
import style from './TEAM.module.scss'

function Advisors(){
    return(
        <section className={style.Advisors} id='TEAM'>
            <div className="container">
                <div className={style.AdvisorsTitle}>
                    <img src={urlTitle} alt=""/>
                </div>
                {/* <h2 className="title" data-aos="fade-up">Our <span>TEAM</span></h2> */} 
            </div>
                <div className={style.AdvisorsWrapperTop}>
                    <div className={style.AdvisorsWrapperTopItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="200">
                        <div className={style.AdvisorsWrapperTopItemTop}>
                            <img src={urlImgPHU} alt=""/>
                        </div>
                        <div className={style.AdvisorsWrapperTopItemBottom}>
                            <div className={style.name}>
                                <h5>Andy Ly</h5>
                            </div>
                            <div className={style.position}>Founder/Chief Executive Officer</div>
                            <div class={style.background}>
                            Founder of KOG Studio <br></br><br></br>
                            Chief Operating Officer of BEUS <br></br><br></br>
                            4+ years of experience in E-commerce in the global retail market<br></br><br></br>
                            7+ years of experience in E-business and Digital Media</div>
                        </div>
                    </div>
                    <div className={style.AdvisorsWrapperTopItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="200">
                        <div className={style.AdvisorsWrapperTopItemTop}>
                            <img src={urlImgHO} alt=""/>
                        </div>
                        <div className={style.AdvisorsWrapperTopItemBottom}>
                            <div className={style.name}>
                                <h5>Ho Le</h5>
                            </div>
                            <div className={style.position}>Chief Operating Officer</div>
                            <div class={style.background}>
                            Founder of Nuca Streaming Entertainment<br></br><br></br>
                            Founder of Nuca<br></br><br></br>
                            4+ years of experience in software engineering at top software companies in Vietnam: Sunshine Tech, Plustus Fintech, Transaction Technologies, Shopiness, SPLUS-SOFTWARE</div>
                        </div>
                    </div>
                    <div className={style.AdvisorsWrapperTopItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="200">
                        <div className={style.AdvisorsWrapperTopItemTop}>
                            <img src={urlImgTAN} alt=""/>
                        </div>
                        <div className={style.AdvisorsWrapperTopItemBottom}>
                            <div className={style.name}>
                                <h5>Tony Pham</h5>
                            </div>
                            <div className={style.position}>Chief Technology Officer</div>
                            <div class={style.background}>
                            Chief Technology Officer of Nuca<br></br><br></br>
                            Chief Technology Officer of Nuca Streaming Entertainment<br></br><br></br>
                            3+ years experience as Full-stack Developer in Transaction Technologies for stock market<br></br><br></br>
                            2+ years experience as Blockchain Developer</div>
                        </div>
                    </div>
                    <div className={style.AdvisorsWrapperTopItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="200">
                        <div className={style.AdvisorsWrapperTopItemTop}>
                            <img src={urlImgCUONG} alt=""/>
                        </div>
                        <div className={style.AdvisorsWrapperTopItemBottom}>
                            <div className={style.name}>
                                <h5>Cuong Nguyen</h5>
                            </div>
                            <div className={style.position}>Product Lead/Game Designer</div>
                            <div class={style.background}>
                            10+ years of experience in operating game products<br></br><br></br>
                            4+ years of experience in designing game products at top Vietnam Game Publishers: VNG Corporation, Mobile Entertainment Corporation, Amanotes, Wolffun etc.</div>
                        </div>
                    </div>
                </div>
                <div className={style.AdvisorsWrapperBottom}>
                    <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="400">
                        <div className={style.AdvisorsWrapperBottomItemTop}>
                            <img src={urlImgPHUOC} alt=""/>
                        </div>
                        <div className={style.AdvisorsWrapperBottomItemBottom}>
                            <div className={style.name} href="">
                                <h3>Steven Lee</h3>
                            </div>
                            <p>Full-stack Developer</p>
                        </div>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="600">
                        <div className={style.AdvisorsWrapperBottomItemTop}>
                            <img src={urlImgTHIEN} alt=""/>
                        </div>
                        <div className={style.AdvisorsWrapperBottomItemBottom}>
                        <div className={style.name} href="">
                                <h3>Thien Nguyen</h3>
                            </div>
                            <p>Marketing Manager</p>
                        </div>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="600">
                        <div className={style.AdvisorsWrapperBottomItemTop}>
                            <img src={urlImgAN} alt=""/>
                        </div>
                        <div className={style.AdvisorsWrapperBottomItemBottom}>
                        <div className={style.name}>
                                <h3>An Ngo</h3>
                            </div>
                            <p>Project Leader</p>
                        </div>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="600">
                        <div className={style.AdvisorsWrapperBottomItemTop}>
                            <img src={urlImgMEO} alt=""/>
                        </div>
                        <div className={style.AdvisorsWrapperBottomItemBottom}>
                            <div className={style.name}>
                                <h3>Mee-Ahn Nguyen</h3>
                            </div>
                            <p>Lead Designer</p>
                        </div>
                    </div>
                    <div className={style.AdvisorsWrapperBottomItem} data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="600">
                        <div className={style.AdvisorsWrapperBottomItemTop}>
                            <img src={urlImgMINH} alt=""/>
                        </div>
                        <div className={style.AdvisorsWrapperBottomItemBottom}>
                            <div className={style.name}>
                                <h3>Minh Le</h3>
                            </div>
                            <p>Communications Leader</p>
                        </div>
                    </div>
                   
                    
                </div>
        </section>
    )
}
export default Advisors
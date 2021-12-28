import urlImg1 from '../../media/game_gallery_02.94e6dc69.png'
import urlTitle from '../../media/Roadmap.png'
// import urlRM2 from '../../media/phase_2.043b55ac.png'
// import urlRM3 from '../../media/phase_3.153fe3fd.png'
import style from './roadmap.module.scss'
import clsx from 'clsx'

function Roadmap(){
    return(
        <section className={style.roadmap} id='roadmap'>
            <div className={clsx('container',style.roadmapContainer)}>
                <div className={style.roadmapTitle}>
                <img src={urlTitle} alt=""/>
                </div>
            </div>
        <img src={urlImg1} alt=""/>
        {/* <div className="container">
            <h2 className={style.title} data-aos="fade-up">Road<span>Map</span></h2>
            <div className={style.roadmapWrapper}>
                <div className={style.roadmapItem} data-aos="fade-up">
                    <div className={style.roadmapItemTop}>
                        <img src={urlRM1} alt="roadmap1"/>
                    </div>
                    <div className={style.roadmapItemBottom}>
                        <div className={style.roadmapItemDot}></div>
                        <div className={style.roadmapItemTitle}>Q2-Q3 | 2021</div>
                        <div className={style.roadmapItemContent}>
                            <li>Graphic designs for deathroad.</li>
                            <li>Website and intial game proof-of-concept.</li>
                            <li>Smart contract development.</li>
                            <li>Private sale, IDO and listing $DRACE Token.</li>
                        </div>
                    </div>
                </div>
                <div className={style.roadmapItem} data-aos="fade-up" data-aos-delay="300">
                    <div className={style.roadmapItemTop}>
                        <img src={urlRM2} alt="roadmap2"/>
                    </div>
                    <div className={style.roadmapItemBottom}>
                        <div className={style.roadmapItemDot}></div>
                        <div className={style.roadmapItemTitle}>Q2-Q3 | 2021</div>
                        <div className={style.roadmapItemContent}>
                            <li>Graphic designs for deathroad.</li>
                            <li>Website and intial game proof-of-concept.</li>
                            <li>Smart contract development.</li>
                            <li>Private sale, IDO and listing $DRACE Token.</li>
                            <li>Private sale, IDO and listing $DRACE Token.</li>
                            <li>Private sale, IDO and listing $DRACE Token.</li>
                        </div>
                    </div>
                </div>
                <div className={style.roadmapItem} data-aos="fade-up" data-aos-delay="600">
                    <div className={style.roadmapItemTop}>
                        <img src={urlRM3} alt="roadmap3"/>
                    </div>
                    <div className={style.roadmapItemBottom}>
                        <div className={style.roadmapItemDot}></div>
                        <div className={style.roadmapItemTitle}>Q2-Q3 | 2021</div>
                        <div className={style.roadmapItemContent}>
                            <li>Graphic designs for deathroad.</li>
                            <li>Website and intial game proof-of-concept.</li>
                            <li>Smart contract development.</li>
                            <li>Private sale, IDO and listing $DRACE Token.</li>
                            <li>Private sale, IDO and listing $DRACE Token.</li>
                            <li>Private sale, IDO and listing $DRACE Token.Private sale, IDO and listing $DRACE Token.Private sale, IDO and listing $DRACE Token.</li>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </section>
    )
}
export default Roadmap
// import urlImg1 from '../../media/game_gallery_02.94e6dc69.png'
import urlTitle from '../../media/Roadmap.png'
import urlItem1 from '../../media/Q4_2021.png'
import urlItem2 from '../../media/Q1_2022.png'
import urlItem3 from '../../media/Q2_2022.png'
import urlItem4 from '../../media/Q3_2022.png'
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
        {/* <img src={urlImg1} className={style.imgRoadmap} alt=""/> */}
        <div className={style.roadmapWrapper}>
            <div className={style.roadmapWrapperItem}>
                <img src={urlItem1} alt=""/>
            </div>
            <div className={style.roadmapWrapperItem}>
                <img src={urlItem2} alt=""/>
            </div>
            <div className={style.roadmapWrapperItem}>
                <img src={urlItem3} alt=""/>
            </div>
            <div className={style.roadmapWrapperItem}>
                <img src={urlItem4} alt=""/>
            </div>
        </div>
    </section>
    )
}
export default Roadmap
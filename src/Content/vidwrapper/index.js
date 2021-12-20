// import urlvideo from '../../media/video-bg-new.60b385ae.mp4'
import urlimg from '../../media/Banner.jpg'
import style from './vidwrapper.module.scss'

function Vidwrapper(){
    return(
        <section className={style.Vidwrapper}>
            {/* <video src={urlvideo} autoplay='autoplay' muted='muted' loop='loop'></video> */}
            <img src={urlimg} alt=""/>
        </section>
    )
}
export default Vidwrapper
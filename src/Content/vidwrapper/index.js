import urlvideo from '../../media/metagunner_clip_banner.mp4'
import urlimg from '../../media/metagunner_banner.png'
import style from './vidwrapper.module.scss'

function Vidwrapper(){
    return(
        <section className={style.Vidwrapper}>
            <video src={urlvideo} autoplay='autoplay' muted='muted' loop='loop'></video>
            <img src={urlimg} alt=""/>
        </section>
    )
}
export default Vidwrapper
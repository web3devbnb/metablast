import urlVideo from '../../media/basecamp_vid.mp4'
import urlimg from '../../media/Basecamp.png'
import style from './basecamp.module.scss'

import React from "react";

function Basecamp(){
    return(
        <section className={style.basecamp} id='basecamp'>
            <div className={style.basecampTitle}>
                <img src={urlimg} alt=""/>
            </div>
            <div className={style.basecampTitleP}>
                <p>Basecamp is the place for soldiers to rest and heal after fighting in fierce battles. Basecamp owners can get more $MGG without going into monster fights, reduce ammo recovery time for weapons, and have more chance to receive items such as Weapon Cards, Character Cards... </p>
            </div>
            <video src={urlVideo} autoplay='autoplay' muted='muted' loop='loop'></video>
        </section>
    )
}
export default Basecamp
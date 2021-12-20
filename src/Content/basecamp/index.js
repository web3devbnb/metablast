import urlimg from '../../media/game_gallery_01.54e9d85b.png'
import style from './basecamp.module.scss'

import React from "react";
import Slider from "react-slick";

function Basecamp(){
    return(
        <section className={style.basecamp}>
            <img src={urlimg} alt=""/>
        </section>
    )
}
export default Basecamp

// Character Card
import urlKrato from "../../media/Krato.png"
import urlZero from "../../media/Zero.png"
import urlLutz from "../../media/Lutz.png"
import urlJames from "../../media/James.png"
import urlDante from "../../media/Dante.png"
import urlHawk_Eyes from "../../media/Hawk_Eyes.png"
import urlMad_Dog from "../../media/Mad_Dog.png"
import urlFenix from "../../media/Fenix.png"
import urlReaper from "../../media/Reaper.png"
import urlJack from "../../media/Jack.png"
import urlSurg from "../../media/Surg.png"
import urlAdolfer from "../../media/Adolfer.png"
import urlLeon_K from "../../media/Leon_K.png"
import urlLorda_Ark from "../../media/Lorda_Ark.png"
import urlEnzo from "../../media/Enzo.png"
// Weapon Card
import urlhandgun from "../../media/handgun_1.png"
import urlrevolver from "../../media/revolver_2.png"
import urlassault_rifle from "../../media/assault_rifle_3.png"
import urlFlamethrower from "../../media/flamethrower_4.png"
import urlHeavy_machine from "../../media/heavy_machine_5.png"
import urlGrenade_launcher from "../../media/grenade_launcher_1.png"
import urlShotgun from "../../media/shotgun_2.png"
import urlRocket_launcher from "../../media/rocket_launcher_3.png"
import urlSubmachine from "../../media/submachine_4.png"
import urlSniper_rifle from "../../media/sniper_rifle_5.png"

import urlCHARACTER from "../../media/Character-Card.png"
import urlWeapon from "../../media/Weapon-Card.png"

import clsx from "clsx"
import React, { Component } from "react";
import Slider from "react-slick";
import style from "./NFTsItem.module.scss"
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style,position: 'absolute',top: '50%',right: '-10%',width: '11%',height: '100%'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style,position: 'absolute',top: '50%',left: '-10%',zIndex:1,width: '11%',height: '100%'}}
      onClick={onClick}
    />
  );
}
export default class AsNavFor extends Component {
   render() {
    const settings = {
      slidesToShow: 6,
      infinite:true,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
      <section className={style.NFTsItem} id="NFTsItem">
        <div className={clsx('container',style.NFTsItemContainer)}>
          <div className={style.NFTsItemTitle}>
            <img src={urlCHARACTER} alt=""/>
          </div>
        </div>
        <Slider
          {...settings}
          className={style.NFTsItemSlider}
        >
          <div>
                <img src={urlKrato} alt=""/>
          </div>
          <div>
                <img src={urlAdolfer} alt=""/>
          </div>
          <div>
                <img src={urlJames} alt=""/>
          </div>
          <div>
                <img src={urlSurg} alt=""/>
          </div>
          <div>
                <img src={urlDante} alt=""/>
          </div>
          <div>
                <img src={urlReaper} alt=""/>
          </div>
          <div>
                <img src={urlZero} alt=""/>
          </div>
          <div>
                <img src={urlLutz} alt=""/>
          </div>
          <div>
                <img src={urlFenix} alt=""/>
          </div>
          <div>
                <img src={urlMad_Dog} alt=""/>
          </div>
          <div>
                <img src={urlJack} alt=""/>
          </div>
          <div>
                <img src={urlEnzo} alt=""/>
          </div>
          <div>
                <img src={urlHawk_Eyes} alt=""/>
          </div>
          <div>
                <img src={urlLeon_K} alt=""/>
          </div>
          <div>
                <img src={urlLorda_Ark} alt=""/>
          </div>
        </Slider>
        <div className={clsx('container',style.NFTsItemContainer)}>
          <div className={style.NFTsItemTitle}>
            <img src={urlWeapon} alt=""/>
          </div>
        </div>
        <Slider
          {...settings}
          className={clsx(style.NFTsItemSlider,style.NFTsItemSliderWeapon)}
        >
          <div>
                <img src={urlhandgun} alt=""/>
          </div>
          <div>
                <img src={urlrevolver} alt=""/>
          </div>
          <div>
                <img src={urlassault_rifle} alt=""/>
          </div>
          <div>
                <img src={urlFlamethrower} alt=""/>
          </div>
          <div>
                <img src={urlHeavy_machine} alt=""/>
          </div>
          <div>
                <img src={urlGrenade_launcher} alt=""/>
          </div>
          <div>
                <img src={urlShotgun} alt=""/>
          </div>
          <div>
                <img src={urlRocket_launcher} alt=""/>
          </div>
          <div>
                <img src={urlSubmachine} alt=""/>
          </div>
          <div>
                <img src={urlSniper_rifle} alt=""/>
          </div>
        </Slider>
      </section>
    );
  }
}
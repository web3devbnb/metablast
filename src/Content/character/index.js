import url1 from "../../media/1.png"
import url2 from "../../media/2.png"
import url3 from "../../media/3.png"
import url4 from "../../media/4.png"
import url5 from "../../media/5.png"
import React, { Component } from "react";
import Slider from "react-slick";
import style from "./character.module.scss"
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <section className={style.character}>
        <h2>Slider Syncing (AsNavFor)</h2>
      
        <h4>First Slider</h4>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          {...settings}
        >
            <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Gunner</h2>
                    <span>A well-trained Navy SEAL that can improvise, adapt, and overcome any situations.</span>
                </div>
                <img src={url1} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Destroyer</h2>
                    <span>The Destroyer is a heavy-built six-foot tall man who loves big guns and explosives. His enemies may outrun him, but they cannot outrun his grenades.</span>
                </div>
                <img src={url2} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Officer</h2>
                    <span>A respectful but ruthless soldier that hold a record of bring 21 terrorists to justice by himself.</span>
                </div>
                <img src={url3} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Sniper</h2>
                    <span>He is rumored to be a ghost. No one has ever seen him, and no one wants to be his enemy because you will never know when he's gonna get you.</span>
                </div>
                <img src={url4} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Special Force</h2>
                    <span>An elite trooper specializes in large-scale tasks and always complete them thoroughly. He can deliver every methods that you can possibly think of to kill a man.</span>
                </div>
                <img src={url5} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Medic</h2>
                    <span>He is an extremely experienced battlefield doctor, but do not make the mistake of underestimate his skills.</span>
                </div>
                <img src={url5} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>Scout</h2>
                    <span>The scout is an expert on gathering information on the enemy lands. He is a master of army-styled ninjutsu who always come with a plan and always leave a place with many dead bodies.</span>
                </div>
                <img src={url5} alt=""/>
          </div>
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          variableWidth= {true}
          className={style.characterFirstSlider}
          {...settings}
        >
          <div style={{width:'2.75%'}}>
                <img src={url1} alt=""/>
          </div>
          <div style={{width:'2.75%'}}>
                <img src={url2} alt=""/>
          </div>
          <div style={{width:'2.75%'}}>
                <img src={url3} alt=""/>
          </div>
          <div style={{width:'2.75%'}}>
                <img src={url4} alt=""/>
          </div>
          <div style={{width:'2.75%'}}>
                <img src={url5} alt=""/>
          </div>
          <div style={{width:'2.75%'}}>
                <img src={url5} alt=""/>
          </div>
          <div style={{width:'2.75%'}}>
                <img src={url5} alt=""/>
          </div>
        </Slider>
      </section>
    );
  }
}
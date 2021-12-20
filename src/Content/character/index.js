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
    return (
      <section className={style.character}>
        <h2>Slider Syncing (AsNavFor)</h2>
      
        <h4>First Slider</h4>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
            <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>11111111 1111111 111111 111111 11111 11111</h2>
                    <h2>11111111 1111111 111111 111111 11111 11111</h2>
                    <h2>11111111 1111111 111111 111111 11111 11111</h2>
                    <h2>11111111 1111111 111111 111111 11111 11111</h2>
                    <h2>11111111 1111111 111111 111111 11111 11111</h2>
                    <h2>11111111 1111111 111111 111111 11111 11111</h2>
                    <h2>11111111 1111111 111111 111111 11111 11111</h2>
                </div>
                <img src={url1} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                     <h2>222222 222222 222222 2222222 222222 222222</h2>
                     <h2>222222 222222 222222 2222222 222222 222222</h2>
                     <h2>222222 222222 222222 2222222 222222 222222</h2>
                     <h2>222222 222222 222222 2222222 222222 222222</h2>
                     <h2>222222 222222 222222 2222222 222222 222222</h2>
                     <h2>222222 222222 222222 2222222 222222 222222</h2>
                     <h2>222222 222222 222222 2222222 222222 222222</h2>
                </div>
                <img src={url2} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>3333333 333333 333333 333333 333333 3333333</h2>
                    <h2>3333333 333333 333333 333333 333333 3333333</h2>
                    <h2>3333333 333333 333333 333333 333333 3333333</h2>
                    <h2>3333333 333333 333333 333333 333333 3333333</h2>
                    <h2>3333333 333333 333333 333333 333333 3333333</h2>
                    <h2>3333333 333333 333333 333333 333333 3333333</h2>
                    <h2>3333333 333333 333333 333333 333333 3333333</h2>
                </div>
                <img src={url3} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>444444 444444 444444 444444 44444 44444 4444</h2>
                    <h2>444444 444444 444444 444444 44444 44444 4444</h2>
                    <h2>444444 444444 444444 444444 44444 44444 4444</h2>
                    <h2>444444 444444 444444 444444 44444 44444 4444</h2>
                    <h2>444444 444444 444444 444444 44444 44444 4444</h2>
                    <h2>444444 444444 444444 444444 44444 44444 4444</h2>
                    <h2>444444 444444 444444 444444 44444 44444 4444</h2>
                </div>
                <img src={url4} alt=""/>
          </div>
          <div className={style.characterSecondSlider}>
                <div className={style.characterSecondSliderTitle}>
                    <h2>5555 555555 555555 5555555 55555 5555</h2>
                    <h2>5555 555555 555555 5555555 55555 5555</h2>
                    <h2>5555 555555 555555 5555555 55555 5555</h2>
                    <h2>5555 555555 555555 5555555 55555 5555</h2>
                    <h2>5555 555555 555555 5555555 55555 5555</h2>
                    <h2>5555 555555 555555 5555555 55555 5555</h2>
                    <h2>5555 555555 555555 5555555 55555 5555</h2>
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
        >
          <div style={{width:'5.2%'}}>
                <img src={url1} alt=""/>
          </div>
          <div style={{width:'5.2%'}}>
                <img src={url2} alt=""/>
          </div>
          <div style={{width:'5.2%'}}>
                <img src={url3} alt=""/>
          </div>
          <div style={{width:'5.2%'}}>
                <img src={url4} alt=""/>
          </div>
          <div style={{width:'5.2%'}}>
                <img src={url5} alt=""/>
          </div>
        </Slider>
      </section>
    );
  }
}
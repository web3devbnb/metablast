import urlImg from '../../media/showroom.141d53f9.png'
import style from './features.module.scss'

function Features(){
    return(
        <section className={style.features}>
            <div className='container'>
                <div className={style.featuresTitle}>
                    <h2 className={style.title} data-aos="fade-up" data-aos-once="true">DEATH ROAD<span> FEATURES</span></h2>
                </div>
                <div className={style.featuresWrapper}>
                    <div className={style.featureCard} data-aos="fade-right" data-aos-once="true" data-aos-duration="500">
                        <div className={style.featureCardTop}>
                            <div className={style.featureCardTopTitle}>SHOWROOM</div>
                            <div className={style.featureCardTopImg}><img src={urlImg} alt="SHOWROOM"/></div>
                        </div>
                        <div className={style.featureCardBottom}>
                            <div className={style.featureCardBottomTitle}>
                                <h3><span>NFT</span> Secret Boxes</h3>
                                <p>OPEN FOR NEW CARS/WEAPONS</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.featureCard} data-aos="fade-right" data-aos-once="true" data-aos-delay="300" data-aos-duration="500">
                        <div className={style.featureCardTop}>
                            <div className={style.featureCardTopTitle}>SHOWROOM</div>
                            <div className={style.featureCardTopImg}><img src={urlImg} alt="SHOWROOM"/></div>
                        </div>
                        <div className={style.featureCardBottom}>
                            <div className={style.featureCardBottomTitle}>
                                <h3><span>NFT</span> Secret Boxes</h3>
                                <p>OPEN FOR NEW CARS/WEAPONS</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.featureCard} data-aos="fade-right" data-aos-once="true" data-aos-delay="600" data-aos-duration="500">
                        <div className={style.featureCardTop}>
                            <div className={style.featureCardTopTitle}>SHOWROOM</div>
                            <div className={style.featureCardTopImg}><img src={urlImg} alt="SHOWROOM"/></div>
                        </div>
                        <div className={style.featureCardBottom}>
                            <div className={style.featureCardBottomTitle}>
                                <h3><span>NFT</span> Secret Boxes</h3>
                                <p>OPEN FOR NEW CARS/WEAPONS</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.featureCard} data-aos="fade-right" data-aos-once="true" data-aos-delay="600" data-aos-duration="500">
                        <div className={style.featureCardTop}>
                            <div className={style.featureCardTopTitle}>SHOWROOM</div>
                            <div className={style.featureCardTopImg}><img src={urlImg} alt="SHOWROOM"/></div>
                        </div>
                        <div className={style.featureCardBottom}>
                            <div className={style.featureCardBottomTitle}>
                                <h3><span>NFT</span> Secret Boxes</h3>
                                <p>OPEN FOR NEW CARS/WEAPONS</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.featureCard} data-aos="fade-right" data-aos-once="true" data-aos-delay="900" data-aos-duration="500">
                        <div className={style.featureCardTop}>
                            <div className={style.featureCardTopTitle}>SHOWROOM</div>
                            <div className={style.featureCardTopImg}><img src={urlImg} alt="SHOWROOM"/></div>
                        </div>
                        <div className={style.featureCardBottom}>
                            <div className={style.featureCardBottomTitle}>
                                <h3><span>NFT</span> Secret Boxes</h3>
                                <p>OPEN FOR NEW CARS/WEAPONS</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.featureCard} data-aos="fade-right" data-aos-once="true" data-aos-delay="1200" data-aos-duration="500">
                        <div className={style.featureCardTop}>
                            <div className={style.featureCardTopTitle}>SHOWROOM</div>
                            <div className={style.featureCardTopImg}><img src={urlImg} alt="SHOWROOM"/></div>
                        </div>
                        <div className={style.featureCardBottom}>
                            <div className={style.featureCardBottomTitle}>
                                <h3><span>NFT</span> Secret Boxes</h3>
                                <p>OPEN FOR NEW CARS/WEAPONS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features
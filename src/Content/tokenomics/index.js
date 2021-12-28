import urlImg from '../../media/tokenomics.25d3c6dd.png'
import urlTitle from '../../media/Tokenomics.png'
import style from './tokenomics.module.scss'
import clsx from 'clsx'

function Tokenomics(){
    return(
        <section className={style.tokenomics} id='tokenomics'>
            <div className='container'>
                <div className={style.tokenomicsWrapper}>
                    <div className={style.tokenomicsWrapperTitle}>
                        <img src={urlTitle} alt=""/>
                    </div>
                    <div className={style.tokenomicsWrapperImg} data-aos="fade-up-right" data-aos-delay="300">
                        <img src={urlImg} alt="tokenomic"/>
                    </div>
                    <div className={style.tokenomicsWrapperContent} data-aos="fade-up-left" data-aos-delay="300">
                        {/* <div className={style.tokenomicsWrapperContentTitle}>
                            TOKENOMICS <span>DISTRUBUTION</span>
                        </div> */}
                        <p>Total Supply: <span>200,000,000 $MGC</span> </p>
                        <ul className={style.tokenomicsWrapperContentList}>
                            <li><span>Private Sale:</span><span>15%</span></li>
                            <li><span>Public Sale:</span><span>3%</span></li>
                            <li><span>Team:</span><span>15%</span></li>
                            <li><span>Advisors & Partners:</span><span>5%</span></li>
                            <li><span>Liquidity:</span><span>10%</span></li>
                            <li><span>Marketing:</span><span>13%</span></li>
                            <li><span>Ecosystem:</span><span>27%</span></li>
                            <li><span>Treasury:</span><span>12%</span></li>
                        </ul>
                        {/* <a href="#" className={clsx('btn btnPrimary',style.button)} target="_blank" rel="noopener noreferrer">Read More</a> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Tokenomics
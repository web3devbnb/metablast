import urlImg from '../../media/tokenomic.25d3c6dd.png'
import style from './tokenomics.module.scss'
import clsx from 'clsx'

function Tokenomics(){
    return(
        <section className={style.tokenomics}>
            <div className='container'>
                <div className={style.tokenomicsWrapper}>
                    <div className={style.tokenomicsWrapperImg} data-aos="fade-up-right" data-aos-delay="300">
                        <img src={urlImg} alt="tokenomic"/>
                    </div>
                    <div className={style.tokenomicsWrapperContent} data-aos="fade-up-left" data-aos-delay="300">
                        <div className={style.tokenomicsWrapperContentTitle}>
                            TOKENOMICS <span>DISTRUBUTION</span>
                        </div>
                        <p>Total Supply: <span>1,000,000,000 $DRACE</span> </p>
                        <ul className={style.tokenomicsWrapperContentList}>
                            <li><span>Play-to-earn:</span><span>53.8%</span></li>
                            <li><span>Presale:</span><span>23.7%</span></li>
                            <li><span>Team:</span><span>10%(lock 1 year)</span></li>
                            <li><span>Marketing & Partnership:</span><span>8%</span></li>
                            <li><span>Liquidity Pools:</span><span>2.5%</span></li>
                            <li><span>Airdrop:</span><span>2%</span></li>
                        </ul>
                        <a href="#" className={clsx('btn btnPrimary',style.button)} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Tokenomics
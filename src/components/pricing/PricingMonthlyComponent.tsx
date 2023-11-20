import React from 'react';
import style from './pricingComponent.module.css';

type PricingMonthlyComponentProps = {
    isMonthly: boolean;
}

const PricingMonthlyComponent: React.FC<PricingMonthlyComponentProps> = ({isMonthly}) => {
    // const [form, setForm] = useState({plan: ''});

    const planRadios: {
       name : string;
       radios: string[];         
    }[] = [
        {
            name: 'monthpal',
            radios: [
                'Starter Plan',
                'Standart Plan',
                'Premium Plan',
                'Enterprise-level Plan'
            ],
        }
    ];

    if(!isMonthly) return null;
    return(     
            <div >
                <form >
                    <div className={style.subContainer}>
                        {planRadios[0].radios.map((el, i) => {
                            return(
                                    <div className={style.card} key={i}>
                                        <h2 className={style.title}>{el}
                                            <input type="radio" name={planRadios[0].name} />
                                        </h2>
                                        <ul className={style.features}>
                                            <li>Top-up fee <span className={style.leftfeatures}>9%</span></li>
                                            <li>Maximum ad accounts per month <span className={style.leftfeatures}>3</span></li>
                                            <li>Restricted ad account review service <span className={style.leftfeatures}> Yes</span></li>
                                            <li className="text-content">Priority in request processing (Top-up, ad <br/>account, balance transfer ...)<span className={style.leftfeatures}>Low</span></li>
                                            <li>Management of all advertising platforms (Meta,<br/>Google, TikTok, Bing, Snapchat, Twitter…) <span className={style.leftfeatures}>Yes</span></li>
                                            <li>Live chat & Customer service <span className={style.leftfeatures}>Yes</span></li>
                                            <li>Personalized assistance and ongoing management <span className={style.leftfeatures}>No</span></li>
                                            <li>Full customization of the ad account name (no "wenlo" suffix) <span className={style.leftfeatures}>No</span></li>
                                            <li>Multi-user (Add your team members) <span className={style.leftfeatures}>No</span></li>
                                            <li>Total monthly top-up limit <span className={style.leftfeatures}>$10k</span></li>
                                        </ul>
                                        {el === 'Starter Plan' ? (
                                            <button className={style.button}>Free</button>
                                        ): el === 'Standart Plan' ? (
                                            <button className={style.button}>$ 199/Mo</button>
                                        ): el === 'Premium Plan' ? (
                                            <button className={style.button}>$ 499/Mo</button>
                                        ):(
                                            <button className={style.button}>$ 799/Mo</button>
                                        )}
                                        
                                    </div>
                            );
                        })}
                    </div>
                    <p className="font-20 font-600 text-center margin-15">Can’t find your best plan? 😵‍💫 <b>Custom your plan instead</b></p>
                    <div className={style.footer}>
                        <button className={style.endboutton}>Back</button>
                        <button className={style.endboutton}>Next</button>
                    </div>
                </form>
            </div>
    );
}

export default PricingMonthlyComponent;
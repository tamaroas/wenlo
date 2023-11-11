import React from "react";
import style from "./pricingComponent.module.css"

type PricingAnnuallyCompoenetProps = {
    isMonthly: boolean;
}

const PricingAnnuallyCompoenet: React.FC<PricingAnnuallyCompoenetProps> = ({isMonthly}) => {
    if(isMonthly) return null;

    return(
        <div className={style.container}>
            <div className={style.subContainer}>
                année
            </div>
            
        </div>
    )
}

export default PricingAnnuallyCompoenet;
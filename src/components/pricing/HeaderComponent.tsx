import style from "./HeaderComponent.module.css"

const HeaderCompoent = () => {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.circle}>
                    <img src="images/money-fly.png" alt="money" />
                </div>
                <h2 className="bold-title font-32 color-black">
                    Pricing plan
                </h2>
                <p className="simple-grayed-p font-14 color-gray">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad<br/> minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat
                </p>
            </div>
        </div>
    )
}
export default HeaderCompoent;
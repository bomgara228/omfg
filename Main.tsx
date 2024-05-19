import { Route, Routes } from 'react-router-dom'
import style from './Main.module.css';
import { allGames } from '../../api'
import Larr from "../../images/ArrowL.png"
import Rarr from "../../images/ArrowR.png"

const Main = () => {
    /* console.log(allGames.then(function (result) { console.log(result) })) */
    return (
        <div className={style.center}>
            <p className={style.tx}>POPULAR AND RECOMMENDED</p>
            <div className={style.stoiRovno}>
                <img src={Larr} alt="strelkal" className={style.streloski} />
                <div className={style.megaBox}></div>
                <img src={Rarr} alt="strelkar" className={style.streloskir}/>
            </div>
        </div>
    )
}
export default Main
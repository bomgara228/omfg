import { NavLink, Link } from "react-router-dom";
import logoImg from "../../images/logo.png";
import blut from "../../images/blueunder.jpg"
import style from './Header.module.css';
import {Zoom} from 'react-reveal'

export const Header = () => {
    
    return (
        <header className={style.up}>
            <NavLink
                className={({ isActive }) => (isActive ? style.active : style.link)}
                to="/"
            ><img
                    className={style.logo}
                    src={logoImg}
                    alt=""
                /></NavLink>
            <div className={style.onColumn}>
                <NavLink
                    className={({ isActive }) => (isActive ? style.active : style.link)}
                    to="/"
                ><h2>Store</h2></NavLink>

                <NavLink
                    className={({ isActive }) => (isActive ? style.downanim : style.net)}
                    to="/"
                ><Zoom><img src={blut} className={style.forIm} /></Zoom></NavLink>
            </div>
            <div className={style.onColumn}>
                <NavLink
                    className={({ isActive }) => (isActive ? style.active : style.link)}
                    
                    to="/library"
                ><h2>Library</h2></NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? style.downanim : style.net)}
                    to="/library"
                    
                ><Zoom><img src={blut} className={style.forIm} /></Zoom></NavLink>
            </div>
            <div className={style.onColumn}>
                <NavLink
                    className={({ isActive }) => (isActive ? style.active : style.link)}
                    
                    to="/home"
                ><h2>Home</h2></NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? style.downanim : style.net)}
                    to="/home"
                    
                ><Zoom><img src={blut} className={style.forIm} /></Zoom></NavLink>
            </div>
            
        </header>
    )
}
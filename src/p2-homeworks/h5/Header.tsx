import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './pages/PreJunior.module.css'

function Header() {
    return (
        <div>
            <div className={s.div}><NavLink to={'pre-junior'}>pre-junior</NavLink></div>
            <div className={s.div}><NavLink to={'junior'}>junior</NavLink></div>
            <div className={s.div}><NavLink to={'junior-plus'}>junior+</NavLink></div>
        </div>

    )
}

export default Header

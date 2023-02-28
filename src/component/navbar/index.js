import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './navbar.module.css'

const Navbar = () => {
    const location = useLocation();
    const { pathname } = location;
    const path = pathname.split("/");
    return (
        <>
            <div className='d-flex gap-5'>
                <Link className={path[1] === "reactporto" ? `${styles.link_button} ${styles.active}` : styles.link_button} to="/reactporto/">Hy..</Link>
                <Link className={path[2] === "portofolio" ? `${styles.link_button} ${styles.active}` : styles.link_button} to="/reactporto/portofolio">Portofolio</Link>
            </div>
        </>
    )
}

export default Navbar
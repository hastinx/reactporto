import React from 'react'
import Left from '../leftSide'
import Navbar from '../navbar'
import Right from '../rightSide'
import styles from './header.module.css'

const Header = () => {
    return (
        <>
            <div className={`${styles.header} d-flex justify-content-between align-items-center p-2`}>
                <Left />
                <Navbar />
                <Right />
            </div>
        </>
    )
}

export default Header
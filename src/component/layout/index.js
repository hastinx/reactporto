import React from 'react'
// import CarouselButton from '../carouselButton'
import Header from '../header'
import styles from './layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <div className='container mt-5 mx-auto'>
                <Header />
                <div className={styles.content}>

                    {children}
                    {/* <CarouselButton /> */}
                </div>
            </div>

        </>
    )
}

export default Layout
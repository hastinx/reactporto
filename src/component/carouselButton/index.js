import React from 'react'
import styles from './carousel.module.css'

const CarouselButton = () => {
    return (
        <div className={styles.stick + ' d-flex flex-column gap-4'}>
            <input className={styles.carousel_radio} type='radio' name="carousel" id='0' />
            <input className={styles.carousel_radio} type='radio' name="carousel" id='1' />
            <input className={styles.carousel_radio} type='radio' name="carousel" id='2' />
            <input className={styles.carousel_radio} type='radio' name="carousel" id='3' />
        </div>
    )
}

export default CarouselButton
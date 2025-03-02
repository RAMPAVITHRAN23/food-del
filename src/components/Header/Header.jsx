import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Order your fav food here</h2>
                <p>Choose from a wide variety of delicious meals and have them delivered to your doorstep.Enjoy exclusive discounts and offers on your favorite dishes.
                Fast delivery and easy payment options available</p>
            
                <button>View menu</button>
            </div>
        </div>
    )
}

export default Header
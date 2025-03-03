import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import { food_list } from '../../assets/assets'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near youu</h2>
            <div className='food-display-list'>
                {food_list.map((item, index) => {
                    return<FoodItem key={index} id={item.id }name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
            )}
            </div>
        </div>
    )
}

export default FoodDisplay
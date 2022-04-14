import React from 'react';
import './home.css';

export const Favorite = ({url,city,pickup,rating,price}) => {
    return (
        <div className='tourCard'>
            <div>
                <img className='tourImg' src={url} alt=""/>
            </div>
            <div>
                <img className='tourImg' src={url} alt=""/>
            </div><div>
                <img className='tourImg' src={url} alt=""/>
            </div>
            <div className='tourCont'>
                <p className='tourCity'>{city}</p>
                <p className='tourpickup'>{ pickup}</p>
                <p className='tourpickup'>skip the line</p>
            </div>
            <div className='tourCont'>
                <p className='tourpickup'>{rating}</p>
                <div><span className='tourCity'>{price}</span><span classname='tourCityPerson'>  per person</span></div>
            </div>
        </div>
    )
}



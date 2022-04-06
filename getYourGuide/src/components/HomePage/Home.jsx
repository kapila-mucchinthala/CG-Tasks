import './home.css';
import { Favorite } from './Favorite';


// import { FiHeart } from "react-icons";
export const Home = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='navbarLogo'>
                    <img src="https://www.linkpicture.com/q/logo_286.png" alt="" />
                </div>
                <div className='navbarContent'> 
                    <div>English</div>
                    <div>INR</div>
                    {/* <div><FiHeart/>Whislist</div> */}
                    <div>Cart</div>
                    <div>Help</div>
                    <div>Login</div>
                    <div><button className='signUp'>Sign up</button></div>
                </div>
            </div>
            <div className='navbarImg'>
                <div className='imgSearch'>
                    <input placeholder='Where are you going?'/>
                    <button>Search</button>
                </div>
                <p className='imgContent'>Escape the tourist traps<br />with unforgettable travel <br />
                experiences</p>
            </div>
            <hr className='orangeLine'></hr>
            <div className='favourite'>
                <div className='favHeading'>Our favorite experiences worldwide</div>
                <div className='favContainer'>
                    <Favorite
                        url='https://cdn.getyourguide.com/img/mic/crop-tour-277-502f5c71875b4016.jpeg/wide_320_uncropped_q50.webp'
                        city='Dubai: Old Town, Dubai Creek, Souks and Street Food Tour'
                        pickup='Pickup available'
                        rating='4.9(1,661 reviews)'
                        price='From 3,557' />
                    <Favorite
                    url='https://cdn.getyourguide.com/img/mic/crop-tour-277-60d04e4533d6a.jpeg/wide_320_uncropped_q50.webp'
                        city='Las Vegas: Antelope Canyon & Horshoe Bend Tour with Pickup'
                        pickup='Pickup available'
                        rating='4.8(482 reviews)'
                        price='From 23,711'/>
                    <Favorite
                        url='https://cdn.getyourguide.com/img/mic/crop-tour-277-459ac8be6adc7182.jpeg/wide_320_uncropped_q50.webp'
                        city='Rome: Street Food Tour with Local Guide'
                        pickup='Pickup available'
                        rating='4.9(1,072 reviews)'
                        price='From 3,682'/>
                    <Favorite
                        url='https://cdn.getyourguide.com/img/mic/crop-tour-277-5f8fef6189f28.jpeg/wide_320_uncropped_q50.webp'
                        city='Little Havana: Food & Cultural Walking Tour with Lunch'
                        pickup='Pickup available'
                        rating='4.9(173 reviews)'
                        price='From 5,454'/>
                </div>
            </div>
            <div className='favourite'>
                <div className='favHeading'>Get beneath the surface of these destinations</div>
                <div className='destinations'>
                    <div className='destinyOne'><h3>London</h3></div>
                    <div className='destinyTwo'><h3>Edinburgh</h3></div>
                    <div className='destinyThree'><h3>Krakow</h3></div>
                    <div className='destinyFour'><h3>Armsterdam</h3></div>
                    <div className='destinyFive'><h3>Dubai</h3></div>
                    <div className='destinySix'><h3>Paris</h3></div>
                </div>
            </div>
            
        </div>
    )
}
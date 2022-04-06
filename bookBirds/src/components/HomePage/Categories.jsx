import Styles from './categories.module.css';
import { useNavigate } from 'react-router-dom';

export const Categories = () => {
    let navigate = useNavigate();
    return (
        <div>
        <div className={Styles.categories}>
            <h1>Browse the books by category</h1>
            <div className={Styles.Category_list}>
                <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/1-modified.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Architecture</h5>
                </div>
                <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/2-modified.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Arts & Photography</h5>
                </div>
                <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/3-modified.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Body, Mind & Spirit</h5>
                </div>
                <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/4-modified.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Business & Economics</h5>
                </div>
                <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/1-modified_1.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Computer & Internet</h5>
                </div>
                <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/2-modified_1.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Cookery, Food & Wine</h5>
                </div>
                <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/3-modified_1.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Dictionaries & Language</h5>
                </div>
                <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/4-modified_1.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Environment & Geography</h5>
                    </div>
                <div onClick={() => { navigate('/Products'); }} className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/5-modified.png" className={Styles.categoryImg} alt="Title" />
                    <h5>History & Humanities</h5>
                </div>
                <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/7-modified.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Medicine</h5>
                </div>
                <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/1-modified_2.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Music</h5>
                </div>
                <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/2-modified_2.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Science & Mathematics</h5>
                </div>
                {/* <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/1-modified.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Art</h5>
                </div>
                <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/1-modified.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Art</h5>
                </div>
                <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/1-modified.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Art</h5>
                </div>
                <div className={Styles.categories_div}>
                    <img src="https://www.linkpicture.com/q/1-modified.png" className={Styles.categoryImg} alt="Title" />
                    <h5>Art</h5>
                </div> */}
            </div>
            </div>
            <div className={Styles.learn}>Keep Learning To Gain Knowledge!</div>
        </div>
    )
}

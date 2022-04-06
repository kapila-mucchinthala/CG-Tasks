import { Carousel } from 'react-bootstrap';

export const Slider = () => {
    return (
        <div>
            <Carousel style={{ marginLeft: 60, marginRight: 60, marginBottom:50}}>
            <Carousel.Item interval={1000}>
                <img
                        className="d-block w-100"
                        style={{height:600}}
                    src="https://www.linkpicture.com/q/4_125.jpeg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                        className="d-block w-100"
                        style={{height:600}}
                    src="https://www.linkpicture.com/q/5_42.jpeg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1300}>
                <img
                        className="d-block w-100"
                        style={{height:600}}
                    src="https://www.linkpicture.com/q/2_39.jpeg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1300}>
                <img
                        className="d-block w-100"
                        style={{height:600}}
                    src="https://www.linkpicture.com/q/3_143.jpeg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1300}>
                <img
                        className="d-block w-100"
                        style={{height:600}}
                    src="https://www.linkpicture.com/q/2_170.jpeg"
                    alt="First slide"
                />
                </Carousel.Item>
            <Carousel.Item interval={1300}>
                <img
                        className="d-block w-100"
                        style={{height:600}}
                    src="https://www.linkpicture.com/q/1_201.jpeg"
                    alt="First slide"
                />
                </Carousel.Item>
            
            </Carousel>
        </div>
    )
}


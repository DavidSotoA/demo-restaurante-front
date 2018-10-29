import * as React from 'react';
// import { Carousel, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface IShome {
    activeIndex : number,
    animating: boolean
}

interface IslideItem {
    src: string,
    legend: string,
    id: number
}

interface IPhome {
    items: IslideItem[];
}


class Home extends React.Component<IPhome, IShome> {
    constructor(props: IPhome) {
        super(props);
        this.state = { activeIndex : 0, animating: false}

    }

    public renderSlides() {
        return this.props.items.map( item => (
            <div key={item.id}>
                <img style={{width: "100vw", height: "100vh"}} src={item.src} />
                {/* <p>{item.legend}</p> */}
            </div>
        ));
    }


    public render() {
        return (
            <Carousel showThumbs={false} showStatus={false} transitionTime={800} autoPlay={true} interval={5000} infiniteLoop={true}>
                {this.renderSlides()}
            </Carousel>
        )
    }
}

export default Home;
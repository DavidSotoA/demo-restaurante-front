import * as React from 'react';
// import { Carousel, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface IShome {
    activeIndex : number,
    animating: boolean,
    gray: number
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
        this.state = { activeIndex : 0, animating: false, gray: 1}

        this.updateBrightness     = this.updateBrightness.bind(this);
        this.renderSlides   = this.renderSlides.bind(this); 
        this.updateCarousel = this.updateCarousel.bind(this);
    }

    public componentDidMount() {
        window.addEventListener("scroll", this.updateBrightness);
      }
    
    public componentWillUnmount() {
        window.removeEventListener("scroll", this.updateBrightness);
    }
    
    public updateBrightness(){
        const scrollPosition = window.scrollY;
        this.setState({  gray: 1 - scrollPosition*1.7/window.innerHeight });
    }

    public updateCarousel(index: number, element: any) {
        this.setState({activeIndex: index});
    }

    public renderSlides() {
        return this.props.items.map( item => (
            <div style={{userSelect: "none"}} key={item.id}>
                <img style={{width: "100vw", height: "100vh", filter: `grayscale(70%) brightness(${this.state.gray})`}} src={item.src} />
                {/* <p>{item.legend}</p> */}
            </div>
        ));
    }


    public render() {
        return (
            <Carousel selectedItem={this.state.activeIndex} showThumbs={false} showStatus={false} 
                      transitionTime={800} onChange={this.updateCarousel}
                      autoPlay={true} infiniteLoop={true}>
                {this.renderSlides()}
            </Carousel>
        )
    }
}

export default Home;
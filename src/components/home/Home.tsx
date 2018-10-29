import * as React from 'react';
import { Carousel, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption } from 'reactstrap';

interface IShome {
    activeIndex : number,
    animating: boolean
}

interface IslideItem {
    src: string,
    alt: string,
    caption: string,
    id: number
}

interface IPhome {
    items: IslideItem[];
}


class Home extends React.Component<IPhome, IShome> {
    constructor(props: IPhome) {
        super(props);
        this.state = { activeIndex : 0, animating: false}

        this.next           = this.next.bind(this);
        this.previous       = this.previous.bind(this);
        this.goToIndex      = this.goToIndex.bind(this);
        this.onExited       = this.onExited.bind(this);
        this.onExiting      = this.onExiting.bind(this);
        this.renderSlides   = this.renderSlides.bind(this);

    }

    public onExiting() {
        this.setState({ activeIndex: this.state.activeIndex, animating: true, });
    }
    
    public onExited() {
        this.setState({ activeIndex: this.state.activeIndex, animating: false, });
    }

    public next() {
        if (this.state.animating) {return};
        const size = this.props.items.length - 1;
        const next = this.state.activeIndex === size ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: next, animating: this.state.animating });
    }

    public previous() {
        if (this.state.animating) {return};
        const size = this.props.items.length - 1;
        const next = this.state.activeIndex === 0 ? size : this.state.activeIndex - 1;
        this.setState({ activeIndex: next, animating: this.state.animating  });
    }

    public goToIndex( newIndex: number) {
        if (this.state.animating) {return};
        this.setState({ activeIndex: newIndex, animating: this.state.animating  });
    }

    public renderSlides() {
        return this.props.items.map( item => (
            <CarouselItem  key={item.id}>
                <img style={{ width: "100vw", height: "100vh" }} src={item.src} alt={item.alt} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        ));
    }


    public render() {
        return (
            <div>
                <Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.previous}>
                    <CarouselIndicators items={this.props.items} 
                                        activeIndex={this.state.activeIndex} 
                                        onClickHandler={this.goToIndex} />
                    {this.renderSlides()}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        )
    }
}

export default Home;
class ImgCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            direction: null,
            images: props.images
        };
        this.handleSelect = this.handleSelect.bind(this);
    }


    handleSelect(selectedIndex, e) {
        e.stopPropagation();
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        return(
            (this.state.images.length == 0) ? (null) : (
            <ReactBootstrap.Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                {this.state.images.map((entry,index) => {
                    return(
                        <ReactBootstrap.Carousel.Item key={index}>
                            {console.log("Rendering with: " + entry)}
                            <img width={900} height={500} alt="900x500" src={entry}/>
                            <ReactBootstrap.Carousel.Caption>
                                <h3>{entry}</h3>
                                <p>{entry}</p>
                            </ReactBootstrap.Carousel.Caption>
                        </ReactBootstrap.Carousel.Item>
                    )
                })}
            </ReactBootstrap.Carousel>
        ));
    }
}

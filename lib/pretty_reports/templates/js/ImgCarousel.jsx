class ImgCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            direction: null
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
            (this.props.images.length == 0) ? (null) : (
            <ReactBootstrap.Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                {this.props.images.map((entry,index) => {
                    return(
                        <ReactBootstrap.Carousel.Item key={index}>
                            <img width={900} height={500} alt="900x500" src={entry.url}/>
                            <ReactBootstrap.Carousel.Caption>
                                <h3>{entry.title}</h3>
                                <p>{entry.description}</p>
                            </ReactBootstrap.Carousel.Caption>
                        </ReactBootstrap.Carousel.Item>
                    )
                })}
            </ReactBootstrap.Carousel>
        ));
    }
}

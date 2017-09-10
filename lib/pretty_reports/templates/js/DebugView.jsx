class DebugView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            images: this.props.images || []
        }
    }

    render() {
        return(
            <div onClick={this.props.toggler}>
                <div>Debug view.</div>
                <ImgCarousel images={this.state.images}/>
            </div>
        );
    }
}

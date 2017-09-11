class DebugView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            logsShowed: false,
            images: this.props.images || [],
            videos: this.props.videos || [], //Yet to be implemented
            logs: this.props.logs || []
        };
    }


    render() {
        return(
            <div onClick={this.props.toggler}>
                <div>Debug view.</div>
                <ImgCarousel images={this.state.images} />

                {this.state.logs.map((entry,index) => {
                    return(
                        <Logger key={index} log={entry}/>
                    )
                })}
            </div>
        );
    }
}

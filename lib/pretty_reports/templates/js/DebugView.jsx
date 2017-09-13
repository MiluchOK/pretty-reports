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
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col md={8} mdOffset={2}>
                            <ImgCarousel images={this.state.images} />
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>


                    {this.state.logs.map((entry,index) => {
                        return(
                            <ReactBootstrap.Row className="log_row">
                                <ReactBootstrap.Col md={6} mdOffset={3}>
                                    <Logger key={index} log={entry}/>
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>
                        )
                    })}
            </div>
        );
    }
}

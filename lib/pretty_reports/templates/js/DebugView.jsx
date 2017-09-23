class DebugView extends React.Component {

    constructor(props){
        super(props);
    }


    render() {
        return(
            <div onClick={this.props.toggler}>
                <div>Debug view.</div>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col md={8} mdOffset={2}>
                        <ImgCarousel images={this.props.images || []} />
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>


                {this.props.logs.map((entry,index) => {
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

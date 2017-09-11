class Logger extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            logsShowed: false,
            log: this.props.log,
        };
        this.showLogs = this.showLogs.bind(this);
        this.closeLogs = this.closeLogs.bind(this);
    }

    showLogs(e){
        e.stopPropagation();
        console.log("Showing logs toggled.");
        this.setState({logsShowed: true})
    }

    closeLogs(e){
        e.stopPropagation();
        console.log("Closing logs modal.");
        this.setState({logsShowed: false})
    }

    render() {
        return(
        <div className="logger">
            <ReactBootstrap.Button
                bsStyle="primary"
                onClick={this.showLogs}
            >
                Show Logs {this.state.log.title}
            </ReactBootstrap.Button>


            <ReactBootstrap.Modal show={this.state.logsShowed} onHide={this.closeLogs}>
                <ReactBootstrap.Modal.Header>
                    <span>{this.state.log.title}</span>
                </ReactBootstrap.Modal.Header>

                <ReactBootstrap.Modal.Body>
                    <div className="logs_content">
                        {this.state.log.content}
                    </div>
                </ReactBootstrap.Modal.Body>

                <ReactBootstrap.Modal.Footer>
                    <ReactBootstrap.Button onClick={this.closeLogs} bsStyle="primary">Close</ReactBootstrap.Button>
                </ReactBootstrap.Modal.Footer>
            </ReactBootstrap.Modal>
        </div>
        );
    }
}











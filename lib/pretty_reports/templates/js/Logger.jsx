class Logger extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            logsShowed: false,
            log: this.props.log,
            logText: this.getLogs()
        };
        this.showLogs = this.showLogs.bind(this);
        this.closeLogs = this.closeLogs.bind(this);
        this.getLogs = this.getLogs.bind(this);
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

    getLogs(){
        {axios.get("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1")
            .then(function (response) {
                console.log(response.data[0]);
                return response.data[0]
            })
            .catch(function (error) {
                console.log(error);
                return "Nothing to see here."
            })
        }
    }

    render() {
        return(
        <div>
            <ReactBootstrap.Button
                bsStyle="primary"
                bsSize="large"
                onClick={this.showLogs}
            >
                Show Logs {this.state.log.title}
            </ReactBootstrap.Button>


            <ReactBootstrap.Modal show={this.state.logsShowed} onHide={this.closeLogs}>
                <ReactBootstrap.Modal.Header>
                    <span>{this.state.log.title}</span>
                </ReactBootstrap.Modal.Header>

                <ReactBootstrap.Modal.Body>
                    <div>
                        {this.state.logText}
                    </div>
                </ReactBootstrap.Modal.Body>

                <ReactBootstrap.Modal.Footer>
                    <ReactBootstrap.Button onClick={this.closeLogs}>Close</ReactBootstrap.Button>
                </ReactBootstrap.Modal.Footer>
            </ReactBootstrap.Modal>
        </div>
        );
    }
}











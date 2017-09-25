class Logger extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            log: this.props.log
        };
    }

    render() {
        return(
        <div className="logger">
            <ReactBootstrap.Button
                href={this.state.log.url}
                bsStyle="primary"
                onClick={this.showLogs}
            >
                Show Logs {this.state.log.title}
            </ReactBootstrap.Button>
        </div>
        );
    }
}











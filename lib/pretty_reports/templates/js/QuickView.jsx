class QuickView extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="quick_view" onClick={this.props.toggler}>
                <ReactBootstrap.Well>
                    <pre className="prettyprint">
                        {this.props.exception}
                    </pre>
                </ReactBootstrap.Well>

                <div className="stack-trace-box">
                    <p className="stack-trace">
                        {this.props.stackTrace}
                    </p>
                </div>
            </div>
        );
    }
}

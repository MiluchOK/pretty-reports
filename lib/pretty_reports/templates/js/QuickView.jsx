class QuickView extends React.Component {

    constructor(props){
        super(props);
        console.log("In Quick View constructor.");
        this.state = {
            exception: this.props.exception || 'No exception',
            stackTrace: this.props.stackTrace || 'No StackTrace'
        }
    }

    render() {
        return(
            <div className="quick_view" onClick={this.props.toggler}>
                <ReactBootstrap.Well>
                    <pre className="prettyprint">
                        {this.state.exception}
                    </pre>
                </ReactBootstrap.Well>

                <div className="stack-trace-box">
                    <p className="stack-trace">
                        {this.state.stackTrace}
                    </p>
                </div>
            </div>
        );
    }
}

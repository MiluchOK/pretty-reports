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
                <pre className="prettyprint">
                    {this.state.exception}
                </pre>

                <p className="stack-trace">
                    {this.state.stackTrace}
                </p>
            </div>
        );
    }
}

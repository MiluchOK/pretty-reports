class QuickView extends React.Component {

    constructor(props){
        super(props);
        console.log("In Quick View constructor.");
        this.state = {
            exception: this.props.exception || 'No exception',
            stackTrace: this.props.stackTrace || ['No StackTrace']
        }
    }

    render() {

        const backtraceStyle = {
            "fontSize": '9px'
        };

        return(
            <div className="quick_view" onClick={this.props.toggler}>
                <pre className="prettyprint">
                    {this.state.exception}
                </pre>

                <p style={backtraceStyle}>
                    {this.state.stackTrace.map(item => <span className="stack-trace-line">{item}</span>)}
                </p>
            </div>
        );
    }
}

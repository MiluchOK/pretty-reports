class QuickView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            exception: this.props.exception || '',
            stackTrace: this.props.stackTrace || ''
        }
    }

    render() {

        const backtraceStyle = {
            "font-size": '15px'
        };

        return(
            <div className="quick_view" onClick={this.props.toggler}>
                {
                    (this.state.exception) ?
                        (
                        <pre className="prettyprint">
                            {this.state.exception}
                        </pre>
                        )
                        :
                       (<p></p>)
                }
                {
                    (this.state.stackTrace) ?
                        (<p style={backtraceStyle}>
                            {this.state.stackTrace.map(item => <div>{item}</div>)}
                        </p>
                        )
                        :
                        (<p></p>)
                }
            </div>
        );
    }
}

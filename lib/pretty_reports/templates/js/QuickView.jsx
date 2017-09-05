class QuickView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: this.props.title || 'No title given',
            exception: this.props.exception || '',
            stackTrace: this.props.stackTrace || ''
        }
    }

    render() {

        const backtraceStyle = {
            "font-size": '15px'
        }

        return(
            <ReactBootstrap.Jumbotron onClick={this.props.toggler}>
                <h2> Title: {this.state.title}</h2>
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
            </ReactBootstrap.Jumbotron>
        );
    }
}

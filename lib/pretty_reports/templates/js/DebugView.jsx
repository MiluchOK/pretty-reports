class DebugView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            testData: this.props.testData || {
                status: 'undefined',
                title: 'No title'
            }
        }
    }

    render() {
        return(
            <div onClick={this.props.toggler}>
                <pre class="prettyprint">
                    {JSON.stringify(this.state.testData.metadata, null, 4)}
                </pre>
            </div>
        );
    }
}

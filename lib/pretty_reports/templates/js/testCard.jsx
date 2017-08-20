class TestCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // var meta = JSON.stringify(this.props.testData.metadata);
        // alert(meta);
        this.setState({flipped: !this.state.flipped})
    }

    summaryView(){
        return(
            <div className="front">
                <ReactBootstrap.Jumbotron className={"test_card " + this.props.testData.status} onClick={this.handleClick}>
                    <h2>{this.props.testData.title}</h2>
                    <p>{this.props.testData.description}</p>
                    <h1>{this.props.testData.status}</h1>
                </ReactBootstrap.Jumbotron>
            </div>
        );
    }

    metaView(){
        return(
            <div className="back">
                <ReactBootstrap.Jumbotron className={"test_card " + this.props.testData.status} onClick={this.handleClick}>
                    <pre class="prettyprint">
                        {JSON.stringify(this.props.testData.metadata, null, 4)}
                    </pre>
                </ReactBootstrap.Jumbotron>
            </div>
        );
    }

    render() {
        var ret;
        if(this.state.flipped){
            ret = this.metaView();
        }
        else{
            ret = this.summaryView();
        }
        return(
            <div className="flip-container">
                <div className="flipper">
                    {ret}
                </div>
            </div>
        )
    }
}

TestCard.defaultProps = {
    testData: {
        title: "Unexecuted test.",
        description: "This test has not been reached by RSpec yet.",
        status: 'unexecuted'
    }
};


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
                    <p><ReactBootstrap.Button>Some Cool Action</ReactBootstrap.Button></p>
                </ReactBootstrap.Jumbotron>
            </div>
        );
    }

    metaView(){
        return(
            <div className="back">
                <ReactBootstrap.Jumbotron className={"test_card " + this.props.testData.status} onClick={this.handleClick}>
                    {this.props.testData.metadata}
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

class TestsContainer extends React.Component {
    render() {
        var testCardsComponents = this.props.testCards.map(function(testCard) {
            return <TestCard testData={testCard} />;
        });
        return <div>{testCardsComponents}</div>;
    }
}

React.render(<TestsContainer testCards={cards} />, document.getElementById("tests_container"));
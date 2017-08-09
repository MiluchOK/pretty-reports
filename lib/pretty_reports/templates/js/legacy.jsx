
var TestCard = React.createClass({

    getDefaultProps: function () {
        return {
            testData: {
                title: "Unexecuted test.",
                description: "This test has not been reached by RSpec yet.",
                status: 'unexecuted'
            }
        };
    },

    render: function() {

        var ButtonGroup = ReactBootstrap.ButtonGroup,
            Button  = ReactBootstrap.Button,
            Jumbotron = ReactBootstrap.Jumbotron;

        var statusClass = 'bg-faded';
        switch(this.props.testData.status){
            case 'failed':
                statusClass = 'bg-danger';
                break;
            case 'passed':
                statusClass = 'bg-success';
                break;
            case 'pending':
                statusClass = 'bg-warning';
                break;
        }


        return (<Jumbotron className={"test_card " + statusClass}>
            <h2>{this.props.testData.title}</h2>
            <p>{this.props.testData.description}</p>
            <h1>{this.props.testData.status}</h1>
            <p><Button>Some Cool Action</Button></p>
        </Jumbotron>);
    }
});

var TestsContainer = React.createClass({
    render: function(){
        var testCardsComponents = this.props.testCards.map(function(testCard) {
            return <TestCard testData={testCard} />;
        });
        return <div>{testCardsComponents}</div>;
    }
});
React.render(<TestsContainer testCards={cards} />, document.getElementById("tests_container"));
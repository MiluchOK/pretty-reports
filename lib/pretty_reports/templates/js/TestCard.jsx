class TestCard extends React.Component {

    constructor(props) {
        super(props);
        const defaultTestData = {
            title: "Unexecuted test.",
            description: "This test has not been reached by RSpec yet.",
            status: 'unexecuted',
            exception: '',
            backtrace: ''
        };

        this.state = {
            flipped: false,
            testData: props.testData || defaultTestData
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({flipped: !this.state.flipped})
    }

    summaryView(){
        {console.log("Data: " + this.state.testData)}
        return(
            <QuickView toggler={this.handleClick} title={this.state.testData.title}
                       exception={this.state.testData.exception}
                       stackTrace={this.state.testData.backtrace}
            />
        );
    }

    metaView(){
        return(
            <DebugView toggler={this.handleClick} />
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
            <div className={"test_card " + this.state.testData.status}>
                {ret}
            </div>
        )
    }
}

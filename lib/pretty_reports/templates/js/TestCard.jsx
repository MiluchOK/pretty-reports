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
        this.stateStatusToBootstrap = this.stateStatusToBootstrap.bind(this);
    }

    handleClick() {
        this.setState({flipped: !this.state.flipped})
    }

    quickView(){
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

    stateStatusToBootstrap(){
        switch(this.state.testData.status) {
            case 'failed':
                return 'danger';
                break;
            case 'passed':
                return 'success';
                break;
            case 'pending':
                return 'warning';
                break;
            default:
                return 'info';
        }
    }

    render() {
        var ret;    //The view
        var title = this.state.testData.title;
        var statusClass = this.stateStatusToBootstrap();

        if(this.state.flipped){
            ret = this.metaView();
        }
        else{
            ret = this.quickView();
        }
        return(
            <div>
                <ReactBootstrap.Panel header={title} bsStyle={statusClass}>
                </ReactBootstrap.Panel>
            </div>
        )
    }
}

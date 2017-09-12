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
            expanded: false,
            testData: props.testData || defaultTestData
        };
        this.handleClick = this.handleClick.bind(this);
        this.stateStatusToBootstrap = this.stateStatusToBootstrap.bind(this);
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    handleClick(){
        console.log('Flip is fired!');
        this.setState({flipped: !this.state.flipped})
    }

    toggleExpand(e){
        console.log('Expand is fired!');
        e.stopPropagation();
        this.setState({expanded: !this.state.expanded})
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
            <DebugView toggler={this.handleClick}
                images={this.state.testData.metadata.reporter_images}
                logs={this.state.testData.metadata.reporter_logs}
            />
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
        var title = <h3 onClick={this.toggleExpand}>{this.state.testData.title}
            <span className="case_id">Case id: <strong>{this.state.testData.metadata.crail_id || 'Unspecified'}</strong>
            </span>
        </h3>;
        var statusClass = this.stateStatusToBootstrap();

        if(this.state.flipped){
            ret = this.metaView();
        }
        else{
            ret = this.quickView();
        }
        return(
            <div className="test_card">
                <ReactBootstrap.Panel header={title} bsStyle={statusClass}>
                    {
                        (!this.state.expanded) ?
                            (null) :
                            (ret)
                    }
                </ReactBootstrap.Panel>
            </div>
        )
    }
}

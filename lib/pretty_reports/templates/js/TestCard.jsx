class TestCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flipped: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.stateStatusToBootstrap = this.stateStatusToBootstrap.bind(this);
    }

    handleClick(){
        console.log('Flip is fired!');
        this.setState({flipped: !this.state.flipped})
    }

    quickView(){
        return(
            <QuickView toggler={this.handleClick} title={this.props.testData.title}
                       exception={this.props.testData.exception}
                       stackTrace={this.props.testData.backtrace}
            />
        );
    }

    metaView(){
        return(
            <DebugView toggler={this.handleClick}
                images={this.props.testData.metadata.reporter_images}
                logs={this.props.testData.metadata.reporter_logs}
            />
        );
    }

    stateStatusToBootstrap(){
        switch(this.props.testData.status) {
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
        var title = <h3>{this.props.testData.title}
                        <span className="case_id">Case id: <strong>{this.props.testData.metadata.crail_id || 'Unspecified'}</strong>

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
                <ReactBootstrap.Panel collapsible header={title} bsStyle={statusClass}>
                    {ret}
                </ReactBootstrap.Panel>
            </div>
        )
    }
}

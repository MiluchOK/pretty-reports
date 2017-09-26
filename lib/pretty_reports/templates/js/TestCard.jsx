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
        var title = (
            <div className="sdfsdfsdfsdf">
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col md={10}>
                        <h3 className="panel-title">
                            {this.props.testData.title}
                        </h3>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col md={2}>
                        <span className="case_id">Case id: <strong>{this.props.testData.metadata.crail_id || 'Unspecified'}</strong>
                        </span>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </div>
        );


        var statusClass = this.stateStatusToBootstrap();
        let the_logs = this.props.testData.metadata.reporter_logs || [];
        let the_images = this.props.testData.metadata.reporter_images || [];

        return(
            <div className="test_card">
                <ReactBootstrap.Panel collapsible header={title} bsStyle={statusClass}>
                    <ReactBootstrap.Collapse in={!this.state.flipped}>
                        <div>
                            <QuickView toggler={this.handleClick} title={this.props.testData.title}
                                       exception={this.props.testData.exception}
                                       stackTrace={this.props.testData.backtrace}
                                       location={this.props.testData.location}
                            />
                        </div>
                    </ReactBootstrap.Collapse>

                    <ReactBootstrap.Collapse in={this.state.flipped}>
                        <div>
                            <DebugView toggler={this.handleClick}
                                       images={the_images}
                                       logs={the_logs}
                            />
                        </div>
                    </ReactBootstrap.Collapse>
                </ReactBootstrap.Panel>
            </div>
        )
    }
}

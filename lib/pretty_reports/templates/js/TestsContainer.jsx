class TestsContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tests: this.props.testCards || []
        }
    }

    render() {
        return(
            <div className="allContent">
                <ReactBootstrap.PanelGroup>
                    {console.log("Rendering")}
                    {this.state.tests.map((entry,index) => {
                        return <TestCard key={index} testData={entry} />
                    })}
                </ReactBootstrap.PanelGroup>
            </div>
        );
    }
}

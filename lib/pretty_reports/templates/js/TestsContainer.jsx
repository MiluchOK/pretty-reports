class TestsContainer extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="allContent">
                <ReactBootstrap.PanelGroup>
                    {console.log("Rendering cards within TestContainer: " + (this.props.testCards.map((entry) => {return entry.title})))}
                    {this.props.testCards.map((entry,index) => {
                        return <TestCard key={index} testData={entry} />
                    })}
                </ReactBootstrap.PanelGroup>
            </div>
        );
    }
}

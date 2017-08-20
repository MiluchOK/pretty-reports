class TestsContainer extends React.Component {
    render() {
        var testCardsComponents = this.props.testCards.map(function(testCard) {
            return <TestCard testData={testCard} />;
        });

        var logo =
            <ReactBootstrap.Grid>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Thumbnail href="http://google.com" alt="171x180" src={this.props.logoUrl} responsive/>
                </ReactBootstrap.Row>
            </ReactBootstrap.Grid>;


        return(
            <div className="allContent">
                <div className="logo">
                    {logo}
                </div>

                <div>
                    {testCardsComponents}
                </div>
            </div>
        );
    }
}

React.render(<TestsContainer logoUrl={logoUrl} testCards={cards} />, document.getElementById("tests_container"));
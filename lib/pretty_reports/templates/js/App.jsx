class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            testCards: cards
        };
        this.filterTestsByStatus = this.filterTestsByStatus.bind(this);
        this.filterByFailed = this.filterByFailed.bind(this);
        this.filterByPending = this.filterByPending.bind(this);
        this.filterByPassed = this.filterByPassed.bind(this);
    }

    filterTestsByStatus(filterBy){
        console.log("Filtering by " + filterBy);
        const filteredCards = [];

        this.state.testCards.map((entry) => {
            if(entry.status == filterBy){
                filteredCards.push(entry)
            }
        });

        console.log("Filtered: " + filteredCards);
        this.setState({
            testCards: filteredCards
        });
    }

    filterByFailed(){
        console.log("Filtering by Passing.");
        this.filterTestsByStatus('failed')
    }

    filterByPending(){
        console.log("Filtering by Pending.");
        this.filterTestsByStatus('pending')
    }

    filterByPassed(){
        console.log("Filtering by Passed.");
        this.filterTestsByStatus('passed')
    }

    render() {

        const logo = "https://crunchbase-production-res.cloudinary.com/image/upload/c_limit,h_600,w_600/v1453924600/tmmdxp5a13bemgsrqkce.png";
        const name = 'Branch';

        //Cards comes from external script
        const all_tests = this.state.testCards;
        let passed_tests = [];
        let failed_tests = [];
        let pending_tests = [];

        cards.map((entry, index) => {
            if(entry.status == 'passed'){
                passed_tests.push(entry)
            }
            else if(entry.status == 'failed'){
                failed_tests.push(entry)
            }
            else if(entry.status == 'pending'){
                pending_tests.push(entry)
            }
        });

        {console.log("Number of tests: " + all_tests.length)}
        {console.log("Number of passed tests: " + passed_tests.length)}
        {console.log("Number of failed tests: " + failed_tests.length)}
        {console.log("Number of pending tests: " + pending_tests.length)}

        return(
            <div className="the_app">
                <ReactBootstrap.Grid>
                    <ReactBootstrap.Row>
                        <Logo name={name} logo_src={logo} />
                    </ReactBootstrap.Row>

                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col md={2}>
                            <ReactBootstrap.ListGroup>
                                <ReactBootstrap.ListGroupItem bsStyle="info">Number of tests: {all_tests.length}</ReactBootstrap.ListGroupItem>
                                <ReactBootstrap.ListGroupItem bsStyle="success">Passing tests: {passed_tests.length}</ReactBootstrap.ListGroupItem>
                                <ReactBootstrap.ListGroupItem bsStyle="warning">Pending tests: {pending_tests.length}</ReactBootstrap.ListGroupItem>
                                <ReactBootstrap.ListGroupItem bsStyle="danger">Failing tests: {failed_tests.length}</ReactBootstrap.ListGroupItem>
                            </ReactBootstrap.ListGroup>
                        </ReactBootstrap.Col>

                        <ReactBootstrap.Col md={4} mdOffset={6}>
                            <ReactBootstrap.Checkbox defaultChecked onChange={this.filterByFailed}>
                                Failure
                            </ReactBootstrap.Checkbox>

                            <ReactBootstrap.Checkbox defaultChecked onChange={this.filterByPending}>
                                Pending
                            </ReactBootstrap.Checkbox>

                            <ReactBootstrap.Checkbox defaultChecked onChange={this.filterByPassed}>
                                Passing
                            </ReactBootstrap.Checkbox>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>

                    {console.log("The rendering test cards in App: " + this.state.testCards)}
                    <TestsContainer testCards={this.state.testCards}/>
                </ReactBootstrap.Grid>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            testCards: cards,
            showFailed: true,
            showPending: true,
            showPassed: true
        };
        this.toggleFailed = this.toggleFailed.bind(this);
        this.togglePending = this.togglePending.bind(this);
        this.togglePassed = this.togglePassed.bind(this);
    }

    toggleFailed(){
        this.setState({showFailed: !this.state.showFailed});
    }

    togglePending(){
        this.setState({showPending: !this.state.showPending});
    }

    togglePassed(){
        this.setState({showPassed: !this.state.showPassed});
    }

    render() {

        const logo = "https://crunchbase-production-res.cloudinary.com/image/upload/c_limit,h_600,w_600/v1453924600/tmmdxp5a13bemgsrqkce.png";
        const name = 'Branch';

        //Cards comes from external script
        const all_tests = this.state.testCards;
        let passed_tests = [];
        let failed_tests = [];
        let pending_tests = [];
        let testsToShow = [];

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

        if(this.state.showFailed){
            testsToShow = testsToShow.concat(failed_tests)
        }
        if(this.state.showPending){
            testsToShow = testsToShow.concat(pending_tests)
        }
        if(this.state.showPassed){
            testsToShow = testsToShow.concat(passed_tests)
        }

        {console.log("Number of tests: " + all_tests.length)}
        {console.log("Number of passed tests: " + passed_tests.length)}
        {console.log("Number of failed tests: " + failed_tests.length)}
        {console.log("Number of pending tests: " + pending_tests.length)}
        {console.log("Tests to show: " + testsToShow)}



        return(
            <div className="the_app">
                <ReactBootstrap.Grid>
                    <ReactBootstrap.Row>
                        <Logo name={name} logo_src={logo} />
                    </ReactBootstrap.Row>

                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col md={12} lg={12}>
                            <ReactBootstrap.ProgressBar>
                                <ReactBootstrap.ProgressBar bsClass={`progress-bar progress-bar-success
                                                            ${(this.state.showPassed) ? (null) : ('unselected')}`}
                                                            onClick={this.togglePassed}
                                                            now={passed_tests.length/(all_tests.length/100)}
                                                            label={`Passing: ${passed_tests.length}`}/>

                                <ReactBootstrap.ProgressBar bsClass={`progress-bar progress-bar-warning
                                                            ${(this.state.showPending) ? (null) : ('unselected')}`}
                                                            onClick={this.togglePending}
                                                            now={pending_tests.length/(all_tests.length/100)}
                                                            label={`Pending: ${passed_tests.length}`}/>

                                <ReactBootstrap.ProgressBar bsClass={`progress-bar progress-bar-danger
                                                            ${(this.state.showFailed) ? (null) : ('unselected')}`}
                                                            onClick={this.toggleFailed}
                                                            now={failed_tests.length/(all_tests.length/100)}
                                                            label={`Failed: ${passed_tests.length}`}/>
                            </ReactBootstrap.ProgressBar>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>

                    {console.log("The rendering test cards in App: " + this.state.testCards)}
                    <TestsContainer testCards={testsToShow}/>
                </ReactBootstrap.Grid>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

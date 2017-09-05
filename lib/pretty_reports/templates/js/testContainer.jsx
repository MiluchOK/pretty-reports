class TestsContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tests: this.props.testCards || []
        }
    }

    render() {
        const logo = "https://crunchbase-production-res.cloudinary.com/image/upload/c_limit,h_600,w_600/v1453924600/tmmdxp5a13bemgsrqkce.png";
        const name = 'Branch';


        return(
            <div className="allContent">
                <Logo name={name} logo_src={logo} />
                {this.state.tests.map((entry,index) => {
                    return <TestCard key={index} testData={entry} />
                })}
            </div>
        );
    }
}

React.render(<TestsContainer logoUrl={logoUrl} testCards={cards} />, document.getElementById("tests_container"));
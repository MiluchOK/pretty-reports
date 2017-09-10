class App extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        const logo = "https://crunchbase-production-res.cloudinary.com/image/upload/c_limit,h_600,w_600/v1453924600/tmmdxp5a13bemgsrqkce.png";
        const name = 'Branch';

        return(
            <div className="the_app">
                <Logo name={name} logo_src={logo} />
                <TestsContainer testCards={cards}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

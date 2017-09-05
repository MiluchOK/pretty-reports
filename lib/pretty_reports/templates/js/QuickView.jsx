class QuickView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: this.props.title || 'No title given',
            exception: this.props.exception || ''
        }
    }

    render() {
        return(
            <ReactBootstrap.Jumbotron onClick={this.props.toggler}>
                <h2> Title: {this.state.title}</h2>
                {
                    (this.state.exception) ?
                        (<pre className="prettyprint">
                            {this.state.exception}
                        </pre>) :
                        (<p></p>)
                }
            </ReactBootstrap.Jumbotron>
        );
    }
}

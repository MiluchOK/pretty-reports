class QuickView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: this.props.title || 'No title given',
            exception: this.props.exception || 'No stackTrace'
        }
    }

    render() {
        return(
            <ReactBootstrap.Jumbotron onClick={this.props.toggler}>
                <h2> Title: {this.state.title}</h2>
                <h2>StackTrace: {this.state.exception}</h2>
            </ReactBootstrap.Jumbotron>
        );
    }
}

class TestCard extends React.Component {
    render() {
        return <h1>A test card {this.props.name}!</h1>;
    }
}

React.render(<TestCard name="O MAMA" />, document.getElementById("tests_container"));
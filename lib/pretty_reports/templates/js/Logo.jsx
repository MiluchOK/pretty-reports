class Logo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logo_src: props.logo_src || 'http://sites.seizethemarket.com/site-files/9/cms/26/photo-1.jpg',
            name: props.name || 'Pretty Reporter'
        }
    }


    render() {
        return(
            <ReactBootstrap.Grid>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col lg={4} md={4} xs={4} lgOffset={4} mdOffset={4} xsOffset={4}>
                        <img className="logo" src={this.state.logo_src}/>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Grid>
        )
    }
}
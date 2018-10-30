import * as React from 'react';
import { NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';

interface Ioption { name: string, url: string, id: number};

interface IPnavigationBar {
    options: Ioption[];
}

interface ISnavigationBar {
    open: boolean,
    bg_ligth: boolean
}

class NavigationBar extends React.Component<IPnavigationBar, ISnavigationBar> {

    constructor(props: IPnavigationBar) {
        super(props);
        this.state = {open: false, bg_ligth: true}

        this.renderOptions  = this.renderOptions.bind(this);
        this.update_bg      = this.update_bg.bind(this);
        this.toggle         = this.toggle.bind(this);
    }

    public componentDidMount() {
        window.addEventListener('scroll', this.update_bg);
    }

    public componentWillMount() {
        window.addEventListener('scroll', this.update_bg);
    }

    public update_bg() {
        const scrollPosition = window.scrollY;
        this.setState({ open: this.state.open, bg_ligth: scrollPosition/window.innerHeight < 0.77 });
    }

    public renderOptions(options: Ioption[]) {
        const optionList = options.map( option => {
                return (
 
                    <li key={option.id} className="nav-item active">
                        <a style={this.state.bg_ligth ? {} : {fontSize: "1.2rem"}}  className="nav-link" href={option.url}>{option.name}</a>
                    </li>
 
                )
        })
        return <ul className="navbar-nav ml-auto">{optionList}</ul>
    }

    public toggle() {
        this.setState( {open: !this.state.open } )
    }

    public render() {
        return (
 
            <nav className={`navbar navbar-expand-md navbar-${this.state.bg_ligth ? 'ligth': 'dark'} fixed-top`}>
                <NavbarBrand href="/">( ͡° ͜ʖ͡°)</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.open} navbar={true}>
                    {this.renderOptions(this.props.options)}
                </Collapse>
            </nav>

        )

    }
}

export default NavigationBar;
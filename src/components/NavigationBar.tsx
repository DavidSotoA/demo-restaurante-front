import * as React from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, NavLink, NavbarToggler, Collapse } from 'reactstrap';

interface Ioption { name: string, url: string, id: number};

interface IPnavigationBar {
    options: Ioption[];
}

interface ISnavigationBar {
    open: boolean
}

  
class NavigationBar extends React.Component<IPnavigationBar, ISnavigationBar> {

    constructor(props: IPnavigationBar) {
        super(props);
        this.state = {open: false}

        this.renderOptions = this.renderOptions.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    public renderOptions(options: Ioption[]) {
        const optionList = options.map( option => {
                return (
                    <NavItem key={option.id}>
                        <NavLink href={option.url}>{option.name}</NavLink>
                    </NavItem>
                )
        })
        return <Nav className="ml-auto" navbar={true}>{optionList}</Nav>
    }

    public toggle() {
        this.setState( {open: !this.state.open } )
    }

    public render() {
        return (
                <nav>
                    <Navbar color="light" light={true} expand="sm" fixed={'top'}>
                        <NavbarBrand href="/">( ͡° ͜ʖ͡°)</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.open} navbar={true}>
                            {this.renderOptions(this.props.options)}
                        </Collapse>
                    </Navbar>
                </nav>
        )

    }
}

export default NavigationBar;


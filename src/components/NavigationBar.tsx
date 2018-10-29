import * as React from 'react';

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
 
                    <li key={option.id} className="nav-item active">
                        <a className="nav-link" href={option.url}>{option.name}</a>
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

            <nav className="navbar navbar-expand-sm navbar-light fixed-top">
                <a className="navbar-brand" href="/">( ͡° ͜ʖ͡°)</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {this.renderOptions(this.props.options)}
                    </div>
            </nav>

        )

    }
}

export default NavigationBar;


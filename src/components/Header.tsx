import * as React from 'react';
import {    
            Navbar,
 } from 'reactstrap';


interface Iheader {
    content: string;
  } 
  
class Header extends React.Component<{}, Iheader> {

    constructor(props: {}){
        super(props)
        this.state = { content: "" };
        }

    public render() {
        return (
            <div>
                <Navbar/>
            </div>

        )
    }
}

export default Header;


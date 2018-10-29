import axios from 'axios';
import * as React from 'react';

import Menu from './components/Menu';
import NavigationBar from './components/NavigationBar'
import Summary from './components/ShoppingCart/Summary';
import Home from './components/home/Home';


import './css/app.css'

interface Istate {
  content: string,
  headerOptions: Array<{ name: string, url: string, id: number }>;
  slideOptions: Array<{src: string, alt: string, caption: string, id: number}>
}


class App extends React.Component<{}, Istate> {

  constructor(props: {}) {
    super(props)
    this.state = {
      content: "Cargando...",
      headerOptions: [
        { name: 'Hamburguesas', url: "#", id: 1 },
        { name: 'Perros', url: "#", id: 2 },
        { name: 'Chuzos', url: "#", id: 3 }
      ],

      slideOptions : [
        { 
          alt:"ased",
          caption: "Arepas",
          id: 1,
          src: "https://static1.squarespace.com/static/50182a8dc4aa5fb338c47d0b/5536e76ae4b0d22ae69a4f16/5536e76ee4b0d22ae69a585d/1429661945758/repitas-recipe.png",  
        },
        { 
          alt:"ased",
          caption: "Hamburguesas",
          id: 2,
          src: "https://freedesignfile.com/upload/2017/07/Hamburger-on-an-chopping-board-HD-picture.jpg",  
        },

        { 
          alt:"ased",
          caption: "Perros",
          id: 2,
          src: "https://images2.alphacoders.com/632/632979.jpg",  
        }



      ]
    };
  }

  public componentDidMount() {

    if (process.env.REACT_APP_API_URL) {
      axios.get(process.env.REACT_APP_API_URL).then(response => {
        this.setState({ content: response.data.message });
      }).catch(e => {
        this.setState({ content: "Error :(" });
      })
    } else {
      console.log("api url not defined");
    }

  }

  public render() {
    return (
      <div>

        <NavigationBar options={this.state.headerOptions} />
        <Home items={this.state.slideOptions} />
  
        <p>
          <Summary />
          <Menu />
        </p>
      </div>
      
    );
  }

}

export default App;

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
  slideOptions: Array<{src: string, legend: string, id: number }>
}


class App extends React.Component<{}, Istate> {

  constructor(props: {}) {
    super(props)
    this.state = {
      content: "Cargando...",
      headerOptions: [
        { name: 'Menus', url: "#", id: 1 },
        { name: 'Reservaciones', url: "#", id: 2 },
        { name: 'Contactenos', url: "#", id: 3 }
      ],

      slideOptions : [
        { 
          id: 1,
          legend: "Arepas",
          src: "https://www.bellagio.com/content/dam/MGM/bellagio/dining/prime-steakhouse/architecture/bellagio-prime-steakhouse-architecture.tiff",  
        },
        { 
          id: 2,
          legend: "Hamburguesas",
          src: "https://freedesignfile.com/upload/2017/07/Hamburger-on-an-chopping-board-HD-picture.jpg",  
        },

        { 
          id: 3,
          legend: "Perros",
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

import axios from 'axios';
import * as React from 'react';

import Menu from './components/Menu';
import NavigationBar from './components/NavigationBar'
import Summary from './components/ShoppingCart/Summary';
import Home from './components/home/Home';


import './css/app.css'

interface Istate {
  content: string,
  headerOptions: Array<{ name: string, url: string, id: number }>,
  slideOptions: Array<{src: string, legend: string, id: number }>,
  masPedidos:  Array<{id: number, nombre: string, precio: number, img: string, estrellas: number, descripcion: string}>
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
      ],

      masPedidos: [{
        id: 1,
        nombre: "Chuzo de pollo",
        precio: 2500,
        img: "https://www.recetin.com/wp-content/uploads/2015/07/pinchos_pollo.jpg",
        estrellas: 129,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    
     {
        id: 2,
        nombre: "Chuzo de pollo",
        precio: 2500,
        img: "https://www.recetin.com/wp-content/uploads/2015/07/pinchos_pollo.jpg",
        estrellas: 129,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    
     {
        id: 3,
        nombre: "Chuzo de pollo",
        precio: 2500,
        img: "https://www.recetin.com/wp-content/uploads/2015/07/pinchos_pollo.jpg",
        estrellas: 129,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    
     {
        id: 4,
        nombre: "Chuzo de pollo",
        precio: 2500,
        img: "https://www.recetin.com/wp-content/uploads/2015/07/pinchos_pollo.jpg",
        estrellas: 129,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    
     {
        id: 5,
        nombre: "Chuzo de pollo",
        precio: 2500,
        img: "https://www.recetin.com/wp-content/uploads/2015/07/pinchos_pollo.jpg",
        estrellas: 129,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    
    {
        id: 6,
        nombre: "Chuzo de pollo",
        precio: 2500,
        img: "https://www.recetin.com/wp-content/uploads/2015/07/pinchos_pollo.jpg",
        estrellas: 129,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    }]
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
        <Home slides={this.state.slideOptions} masPedios={this.state.masPedidos} />
  
        <p>
          <Summary />
          <Menu />
        </p>
      </div>
      
    );
  }

}

export default App;

import axios from 'axios';
import * as React from 'react';

import Menu from './components/Menu';
import NavigationBar from './components/NavigationBar'
import Summary from './components/ShoppingCart/Summary';

import './App.css';

interface Istate {
  content: string,
  headerOptions: Array<{ name: string, url: string, id: number }>;
}

class App extends React.Component<{}, Istate> {

  constructor(props: {}) {
    super(props)
    this.state = {
      content: "Cargando...",
      headerOptions: [
        { name: 'opcion1', url: "#", id: 1 },
        { name: 'opcion2', url: "#", id: 2 },
        { name: 'opcion3', url: "#", id: 3 }
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
        <p>
          <Summary />
          <Menu />
        </p>
      </div>
      
    );
  }

}

export default App;

import './App.css';
import axios from 'axios';
import * as React from 'react';

import Header from './components/Header';
import Menu from './components/Menu';

// import { Button } from '/home/skorpionx/demo-restaurante/front-restaurante/node_modules/reactstrap/dist/reactstrap.js';


interface Istate {
  content: string;
} 

class App extends React.Component<{}, Istate> {
  
  constructor(props: {}){
    super(props)
    this.state = { content: "Cargando..." };
  }

  public componentDidMount() {

    if(process.env.REACT_APP_API_URL) {
      axios.get(process.env.REACT_APP_API_URL).then( response  => {
        this.setState({content: response.data.message});
      }).catch( e => {
        this.setState({content: "Error :("});
      })
    } else{
      console.log("api url not defined");
    }

  }

  public render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          {this.state.content}
        </p>
        <p>
          <Menu />
        </p>
      </div>
    );
  }

}

export default App;

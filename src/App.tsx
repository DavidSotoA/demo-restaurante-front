import './App.css';
import axios from 'axios';
import logo from './logo.svg';
import * as React from 'react';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.content}
        </p>
      </div>
    );
  }

}

export default App;

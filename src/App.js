import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import Product from './components/product';

class App extends Component {
  render(){
    return (
        <div>
          <Header></Header>
          <div className="row">
            <div className="col-lg-6">
              <Product />
            </div>
          </div>
        </div>
    );
  }
}

export default App;

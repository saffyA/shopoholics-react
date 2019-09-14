import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';
import Products from './components/products';
import MenuComponent from './components/menuComponent';

class App extends Component{  

  state={
    counters: [
        {id: 1, count: 3},
        {id: 2, count: 4},
        {id: 3, count: 0},
        {id: 4, count: 1},
        ]
    };

    handleIncrement = counter => {
        //console.log(counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].count++;
        this.setState({counters: counters});
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(counter => counter.id!=counterId);
        this.setState({counters: counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map( counter => {counter.count=0; return counter;} );
        this.setState({counters: counters});
    };

    render() {
      return (
        <React.Fragment>
          <NavBar totalCounters={this.state.counters.filter(counter => counter.count > 0).length}/>
          <MenuComponent />
            <div className="container">
            {/* <Counters 
              onIncrement = {this.handleIncrement}
              onReset = {this.handleReset}
              onDelete = {this.handleDelete}
              counters = {this.state.counters}
            /> */}
            <br /><br />
            <Products />
            </div>
        </React.Fragment>
      );
    }

}

export default App;

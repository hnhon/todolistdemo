import React, {Component} from 'react';
import Title from './Title';
import AddTodo from './AddTodo';
import List from './List';
import Filter from './Filter';
import './App.css'

//define App component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        text: '', 
        id: Date.now(),
        done: false
      },
      items: localStorage.getItem('lists')==null?[]:JSON.parse(localStorage.getItem('lists')),
      filter: 'All'
    };
  }

  //handle input from user
  handleChange = (e) => {
      let newItem = 
      {
        text: e.target.value,
        id: Date.now(),
        done: false
      }
      this.setState ({item: newItem});
  }

  //handle submit from user
  handleSubmit = (e) => {
    //prevent submit button takes page to other route
    e.preventDefault();
    this.setState ({
      items: [...this.state.items, this.state.item],
      item: {
        text: '', 
        id: Date.now(),
        done: false
      }
    })
    //update localStorage 
    if (localStorage.getItem('lists')==null) {
      let list = [];
      list = [...list, this.state.item];
      localStorage.setItem('lists', JSON.stringify(list))
    } else {
      let list = JSON.parse(localStorage.getItem('lists'));
      list = [...list, this.state.item];
      localStorage.setItem('lists', JSON.stringify(list)) 
    }
  }

  //hanlde completed button funtion
  handleClick = (id) => {
    let newList = this.state.items.map (i => {
      if (i.id === id) {
        return {
          text: i.text,
          id: i.id,
          done: !i.done
        } } else {
          return i;
        }      
    });
    this.setState ({
      items: newList
    })
    localStorage.setItem('lists', JSON.stringify(newList));
  }

  //hanlde Delete funtion
  handleDelete = (key) => {
     let newList = this.state.items.filter(
       (item) => {
         return item.id !== key
       }
     );
    this.setState ({
      items: newList
    });

    localStorage.setItem('lists', JSON.stringify(newList))
  }

  //change view between all active and completed
  changeView = (newFilter) => {
    this.setState ({
      filter: newFilter
    });
  } 

  render () {
    return (
      <div className='App'>
        <Title />
        <AddTodo onChange={this.handleChange} onSubmit={this.handleSubmit} item={this.state.item} />
        <List items={this.state.items} onClick={this.handleClick} onDelete={this.handleDelete} filter={this.state.filter} />
        <Filter changeView={this.changeView} filter={this.state.filter} />
      </div>
    );
  }
}

export default App;

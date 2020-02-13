import React, {Component} from 'react';
import Title from './Title';
import AddTodo from './AddTodo';
import List from './List';
import Filter from './Filter';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        text: '', 
        id: Date.now(),
        done: false
      },
      items: [],
      filter: 'All'
    };
  }

  handleChange = (e) => {
      let newItem = 
      {
        text: e.target.value,
        id: Date.now(),
        done: false
      }
      this.setState ({item: newItem});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState ({
      items: [...this.state.items, this.state.item],
      item: {
        text: '', 
        id: Date.now(),
        done: false
      }
    })
  }

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
  }

  handleDelete = (key) => {
     let newList = this.state.items.filter(
       (item) => {
         return item.id !== key
       }
     );
    this.setState ({
      items: newList
    })
  }

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

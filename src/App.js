import React, {Component} from 'react';
import Title from './title';
import AddTodo from './addTodo';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      items: []
    };
  }

  handleChange = (e) => {
    this.setState ({item: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState ({
      item: '',
      items: [...this.state.items, this.state.item]
    })
  }

  render () {
    return (
      <div>
        <Title />
        <AddTodo onChange={this.handleChange} onSubmit={this.handleSubmit} item={this.state.item} />
        <List items={this.state.items}/>
      </div>
    );
  }
}

export default App;

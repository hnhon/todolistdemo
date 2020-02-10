import React, {Component} from 'react';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            markCompleted: false
        };
    }

    handleChange = () => {
        let completed = this.state.markCompleted;
        completed = completed ? false : true;
        this.setState({markCompleted: completed})
    }

    getStyle = () => {
        return {
            textDecoration: this.state.markCompleted ? 'line-through' : 'none',
        }
    }

    render () {
        return (
            <ul>
                {
                    this.props.items.map(
                    (i, index) => {
                    return(
                    <div style={this.getStyle()}>
                        <li key={index} markCompleted={this.state.markCompleted}>{i}<input type='checkbox' onChange={this.handleChange}></input></li>
                    </div>
                    )
                    }
                    )
                }
            </ul>
        );
    }
};

export default List; 

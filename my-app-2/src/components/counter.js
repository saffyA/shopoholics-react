import React, { Component } from 'react';

class Counter extends Component{
    render()
    {
        const {onIncrement,counter,onDelete} = this.props;
        return (<React.Fragment>
        <span style={{fontWeight: 'lighter',fontSize: 15}} className= {this.getBadgeClasses()} >{this.formatCount()}</span>
        <button className="btn btn-secondary" onClick={() => this.props.onIncrement(counter)}>Increment</button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(counter.id)}>Delete</button>
        <br />
        </React.Fragment>);
    }

    formatCount()
    {
        const {count} = this.props.counter;
        return count === 0 ? "Zero" : count;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.count === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;
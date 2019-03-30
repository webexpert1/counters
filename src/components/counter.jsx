import React, { Component } from 'react';

class Counter extends Component {
 	
   formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero": value;
   }
   formatBadge() {
    let badge = "badge m-2 badge-"
    return badge += (this.props.counter.value === 0) ? "warning" : "primary";
   }

 	render() {
    
	  return (
        <div>
          <span className={this.formatBadge()}>{this.formatCount()}</span>
          <button
             onClick={() => this.props.onIncrement(this.props.counter)} 
             className="btn btn-info btn-sm m-2">Increment
          </button>
          <button 
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm">Decrement
          </button>
          <button className="btn btn-danger m-2" 
                  onClick={() => this.props.onDelete(this.props.counter.id)}>Delete
          </button>
        </div>
      );
  }
}

export default Counter;
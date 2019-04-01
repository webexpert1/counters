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
        <div className="row">
        <div className="col-1">
          <span className={this.formatBadge()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
             onClick={() => this.props.onIncrement(this.props.counter)} 
             className="btn btn-info btn-sm"> +
          </button>
          <button 
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? 'disabled': ''}> -
          </button>
          <button className="btn btn-danger" 
                  onClick={() => this.props.onDelete(this.props.counter.id)}>Delete
          </button>
        </div>
    
        </div>
      );
  }
}

export default Counter;
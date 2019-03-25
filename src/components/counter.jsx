import React, {Component} from 'react';

class Counter extends Component {
 	state = {
 	  value: this.props.counter.value, 
 	  tags: ['tag1', 'tag2'] 
 	}; 


 	handleIncrement = (product) => {
 	  console.log(product);
 	  this.setState({ value: this.state.value  + 1});
 	} 

 	renderTags() {
 	  if (this.state.tags.length === 0) return <p>There are no tags!</p>
 	  return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
 	} 


	render() {

    console.log('props', this.props);
	  return (
       <React.Fragment>
           <h4>{this.props.counter.id}</h4>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary">Increment</button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger sm m-2">Delete </button>
          {this.state.tags.length === 0 && 'There are no tags yet!'}
          {this.renderTags()}
       </React.Fragment>
	  )
	}

	getBadgeClasses() {
 	  let classes = "badge m-2 badge-";
 	  classes += (this.state.value === 0) ? "warning": "primary";
 	  return classes;
 	} 

 	formatCount() {
 	  let counts = (this.state.value === 0) ? 'Zero' : this.state.value;
 	  return counts;
 	}
}

export default Counter;
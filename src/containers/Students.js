import React, { Component } from 'react';
// We need some glue! This Component/container needs to know about the store (redux)
// so we can use it's state (and update if needed). To accomplish this, we can use the 
// connect method from react-redux (the glue between react and redux)
import { connect } from 'react-redux';

class Students extends Component{
	render(){
		console.log(this.props.backRowStudents);
		var studentArray = this.props.backRowStudents.map((student,index)=>{
			return(<li key={index}>{student.name} sits in seat {student.seat}</li>)
		});
		return(
			<div>
				<h1>Students Component</h1>
				{studentArray}
			</div>
		)
	}
}

// We need a function to map the redux state to THIS components prosp.
function mapStateToProps(state){
	// the state parameter IS THE ROOT REDUCER
	// this function will return an object
	// property will be the props IN THIS component
	// the value will be the piece of state from the reducer
	return{
		backRowStudents: state.students
	}
}

// export default Students;
// in containers (Components that need to know about redux), we don't export teh component,
// we export connect. We pass connect a function, and we pass that the componet
export default connect(mapStateToProps)(Students)


// somewhere inside react-redux
// function connect(stuffToSendAsProps){
// 	return function(componentToRender){
// 		return <componentToRender stuffToSendAsProps.key={stuffToSendAsProps[key]} />
// 	}
// }
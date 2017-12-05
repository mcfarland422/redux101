import React, { Component } from 'react';
// We need some glue! This Component/container needs to know about the store (redux)
// so we can use it's state (and update if needed). To accomplish this, we can use the
// connect method from react-redux (the glue between react and redux)
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import AddStudent from '../actions/AddStudent';

class Students extends Component{

	addNewStudent(){
		const name = document.getElementById('student-name').value;
		this.props.addStudent(name);
	}

	render(){
		console.log(this.props);
		var studentArray = this.props.backRowStudents.map((student,index)=>{
			return(<li key={index}>{student.name} sits in seat {student.seat}</li>)
		});
		return(
			<div className="divbox">
				<input id="student-name" type="text" placeholder="Name of student" />
				<button onClick={this.addNewStudent}>Add student</button>
				<h1 className="h1title">Students Component</h1>
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

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		addStudent: AddStudent
	}, dispatch);

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

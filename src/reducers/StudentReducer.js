// Reducers are functions that return a peice of state.

const students = [
		{
			name: "Jason",
			seat: 5
		},
		{
			name: "Chris",
			seat: 6
		},
		{
			name: "Saif",
			seat: 7
		},
		{
			name: "Taylor",
			seat: 8
		}
	];

// all render functions have 2 parama.
// 1: current state
// 2: info that came from the action
export default function(state, action){
	console.log(action);
	return state;
}

// export default function(){
//return students
//}

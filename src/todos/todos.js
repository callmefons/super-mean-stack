import _ from 'lodash';

export default function($scope){

	let params = {
		createHasInput : false
	};

	$scope.todos = [
		{
			task:'do dish',
			isCompleted: false,
			isEditing : false
		},
		{
			task:'walk the dog',
			isCompleted: true,
			isEditing : false
		}
	];

	$scope.onCompletedClick = todo => {
		todo.isCompleted = !todo.isCompleted;
	};

	$scope.onEditClick = todo => {
		todo.isEditing = true;
		todo.updateTask = todo.task;
	};

	$scope.createTask = () => {
		params.createHasInput = false;
		$scope.createTaskInput = '';
	};

	$scope.onCancelClick = todo => {
		todo.isEditing = false;
	};

	$scope.deleteTask = todoToDelete => {
		_.remove($scope.todos, todo => todo.task === todoToDelete.task);
	};

	$scope.updateTask = todo => {
		todo.task = todo.updateTask;
		todo.isEditing = false;
	};

	$scope.$watch('createTaskInput', val => {
		if(!val && params.createHasInput){
			$scope.todos.pop();
			params.createHasInput = false;
		} else if(val && !params.createHasInput){
			$scope.todos.push({task: val, isComplete : false});
			params.createHasInput = true;
		} else if(val && params.createHasInput){
			$scope.todos[$scope.todos.length - 1].task = val;
		}
	});
}
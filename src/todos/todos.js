import _ from 'lodash';

export default function($scope, todoFactory){

	let params = {
		createHasInput : false
	};

	// $scope.todos = [
	// 	{
	// 		task:'do dish',
	// 		isCompleted: false,
	// 		isEditing : false
	// 	},
	// 	{
	// 		task:'walk the dog',
	// 		isCompleted: true,
	// 		isEditing : false
	// 	}
	// ];

	todoFactory.getTasks($scope);

	$scope.onCompletedClick = todo => {
		todo.isCompleted = !todo.isCompleted;
	};

	$scope.onCancelClick = todo => {
		todo.isEditing = false;
	};

	$scope.onEditClick = todo => {
		todo.isEditing = true;
		todo.updateTask = todo.task;
	};

	const {
		createTask, 
		updateTask, 
		deleteTask, 
		watchCreateTaskInput
	} = todoFactory;

	$scope.createTask = _.partial(createTask, $scope, params);
	$scope.deleteTask = _.partial(deleteTask, $scope);
	$scope.updateTask = _.partial(updateTask);
	$scope.$watch('createTaskInput', _.partial(watchCreateTaskInput, $scope, params));


	// $scope.createTask = () => {
	// 	params.createHasInput = false;
	// 	$scope.createTaskInput = '';
	// };

	// $scope.deleteTask = todoToDelete => {
	// 	_.remove($scope.todos, todo => todo.task === todoToDelete.task);
	// };

	// $scope.updateTask = todo => {
	// 	todo.task = todo.updateTask;
	// 	todo.isEditing = false;
	// };

	// $scope.$watch('createTaskInput', val => {
	// 	if(!val && params.createHasInput){
	// 		$scope.todos.pop();
	// 		params.createHasInput = false;
	// 	} else if(val && !params.createHasInput){
	// 		$scope.todos.push({task: val, isCompleted : false});
	// 		params.createHasInput = true;
	// 	} else if(val && params.createHasInput){
	// 		$scope.todos[$scope.todos.length - 1].task = val;
	// 	}
	// });
}
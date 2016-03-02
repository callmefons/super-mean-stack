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

    $scope.onEditClick = todo => {
        todo.isEditing = true;
        todo.updatedTask = todo.task;
    };

    $scope.onCancelClick = todo => {
        todo.isEditing = false;
    };

    const { createTask, updateTask, deleteTask, watchCreateTaskInput } = todoFactory;

    $scope.createTask = _.partial(createTask, $scope, params);
    $scope.updateTask = _.partial(updateTask, $scope);
    $scope.deleteTask = _.partial(deleteTask, $scope);
    $scope.$watch('createTaskInput', _.partial(watchCreateTaskInput, params, $scope));


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
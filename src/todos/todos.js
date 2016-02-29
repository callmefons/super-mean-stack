export default function($scope){
	$scope.todos = [
		{
			task:'do dish',
			isCompleted: false
		},
		{
			task:'walk the dog',
			isCompleted: true
		}
	];

	$scope.onCompletedClick = todo => {
		todo.isCompleted = !todo.isCompleted;
	};
}
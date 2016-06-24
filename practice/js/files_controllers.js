function FilesListCtrl($scope, $http) {

    $scope.images = [];
    $scope.next_page = null;
    var in_progress = true;

    $scope.loadImages = function() {
        if (in_progress){
            var url = '/api/v1/files.json';
            if ($scope.next_page) {
                url = $scope.next_page;
            }
            $http.get(url).success(function(data) {
                $scope.images = $scope.images.concat(data.items);
                $scope.next_page = data.nextPageInternal;

                if (!$scope.next_page) {
                    in_progress = false;
                }
            });
        }
    };

    FilesListCtrl.$inject = ['$scope', '$http'];

    $scope.loadImages();
}

angular.module('my-awesome-app', []).directive('whenScrolled', function() {
    return function(scope, elm, attr) {
        var raw = elm[0];

        elm.bind('scroll', function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
    };
});

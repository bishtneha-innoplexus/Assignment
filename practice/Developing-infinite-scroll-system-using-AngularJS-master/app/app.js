var app = angular.module('infiniteScroll', ['infinite-scroll']);

angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 250);

app.controller('scrolling',function($scope, $http){

  $score.images = [
		{'id' : 1,
		 'url' : 'assignment_angular/butterfly _ Flickr - Photo Sharing!6.html'
		'img' : 'assignment_angular/1.jpg'
	},
	{'id' : 2,
	 'url' : 'assignment_angular/butterfly _ Flickr - Photo Sharing!6.html'
	'img' : 'assignment_angular/2.jpg'
},
{'id' : 3,
 'url' : 'assignment_angular/butterfly _ Flickr - Photo Sharing!6.html'
'img' : 'assignment_angular/3.jpg'
},
{'id' : 4,
 'url' : 'assignment_angular/butterfly _ Flickr - Photo Sharing!6.html'
'img' : 'assignment_angular/4.jpg'
},
{'id' : 5,
 'url' : 'assignment_angular/butterfly _ Flickr - Photo Sharing!6.html'
'img' : 'assignment_angular/6.jpg'
},
{'id' : 7,
 'url' : 'assignment_angular/butterfly _ Flickr - Photo Sharing!6.html'
'img' : 'assignment_angular/8.jpg'
},
{'id' : 9,
 'url' : 'assignment_angular/butterfly _ Flickr - Photo Sharing!6.html'
'img' : 'assignment_angular/9.jpg'
},{'id' : 10,
 'url' : 'assignment_angular/butterfly _ Flickr - Photo Sharing!6.html'
'img' : 'assignment_angular/10.jpg'
},
{'id' : 11,
 'url' : 'assignment_angular/butterfly _ Flickr - Photo Sharing!6.html'
'img' : 'assignment_angular/11.jpg'
},
{'id' : 12,
 'url' : 'assignment_angular/butterfly _ Flickr - Photo Sharing!6.html'
'img' : 'assignment_angular/12.jpg'
}];



	$scope.loadMore = function() {
		var last = $scope.images[$scope.images.length - 1];
    for(var i = 1; i <= 12; i++) {
			$scope.images.push(last + i);

		}

	};
});

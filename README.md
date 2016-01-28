# CyInfiniteScroll


Directives for infinite scroll in vanillaJs ES6.

Originaly from http://shabeebk.com/blog/lazy-scroll-infinite-scrolling-angularjs-plugin

### Demo
You can see a [live demo]

## How to use ?

### Install with bower
```bash
$ bower install --save cy-infinite-scroll
```

### Install with npm
```bash
$ npm install --save cy-infinite-scroll
```

###
Include the file
```html
<script type="text/javascript" src="yourPath/cyInfiniteScroll.min.js"></script>
```
And the module to your angular app
```javascript
angular.module('myApp', ['cyInfiniteScroll']);
```

### Parameters
 * <b>infiniteScroll:</b> function to execute when scroll


 * <b>distance:</b> this is an optional parameter to controll scroll trigger. This parameter can accept value ranging from  0 -100. For example if we mention  50 in this parameter, scroll function will called when mouse point reached on 50% of the screen.


 * <b>disableScroll:</b> this is an optional parameter to disable scroll. If true, the infiniteScroll function will not be execute



### Example

In your controller:
```javascript
function UserController($scope, UserService) {
    $scope.users        = [];
    $scope.isLoading    = false;
    $scope.getMoreUsers = getMoreUsers;

	function getMoreUsers() {
    	$scope.isLoading = true;
        // getUser retreive the list of users from server
		UserService.getUser().then(res => {
        	// do whatever you want
            $scope.isLoading = false;
        });
    }
}

angular.module('myApp', ['cyInfiniteScroll']).controller('UserController', UserController);
```

In your html view:
```html
<div infinite-scroll="getMoreUsers()" distance="80" disable-scroll="isLoading">
	<div ng-repeat="user in users track by $index">
    	{{user.name}}
    </div>
</div>
```

### Issues

If you find any issues , please report on the issue section of github or send a mail to captainyouz@gmail.com

[live demo]: <http://captainyouz.github.io/cy-infinite-scroll>

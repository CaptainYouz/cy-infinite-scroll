'use strict';

/**
 * Directives for infinite scroll in vanillaJs ES6 copy from : http://shabeebk.com/blog/lazy-scroll-infinite-scrolling-angularjs-plugin
 *
 * Parameters:
 *   infiniteScroll: function to execute when scroll
 *   distance: This is an optional parameter to controll scroll trigger. This parameter can accept value ranging from  0 -100.
 *             For example if we mention  50 in this parameter, scroll function will called when mouse point reached on 50% of the screen.
 *   disableScroll: This is an optional parameter to disable scroll. If true, the infiniteScroll function will not be execute
 *
 * Example :
 *   <div infinite-scroll="paginationFuntion()" distance="80">
 */

(function () {
  'use strict';

  function infiniteScroll($rootScope, $window) {
    return {
      link: function link(scope, elem, attrs) {
        var scrollTrigger = 0.90;
        var scrollEnabled = true;

        $window = angular.element($window);

        if (attrs.disableScroll) {
          scope.$watch(attrs.disableScroll, function (value) {
            scrollEnabled = value !== true;
          });
        }

        if (attrs.distance && attrs.distance > 0 && attrs.distance < 100) {
          scrollTrigger = attrs.distance / 100;
        }

        function loadData() {
          var wintop = window.pageYOffset;
          var docHeight = window.document.body.clientHeight;
          var windowHeight = window.innerHeight;
          var triggered = wintop / (docHeight - windowHeight);

          if (scrollEnabled && triggered >= scrollTrigger) return scope.$apply(attrs.infiniteScroll);
        }

        $window.on('scroll', loadData);
        scope.$on('$destroy', function () {
          return $window.off('scroll', loadData);
        });
      }
    };
  }

  angular.module('cyInfiniteScroll', []).directive('infiniteScroll', infiniteScroll);
})();
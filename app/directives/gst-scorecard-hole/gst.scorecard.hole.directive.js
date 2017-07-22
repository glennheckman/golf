angular.module('GST').directive('gstScorecardHole', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/directives/gst-scorecard-hole/gst.scorecard.hole.directive.html',
    scope: {
      hole: '=hole'
    }
  };
});

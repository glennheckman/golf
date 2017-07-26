angular.module('GST').directive('gstScorecard', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/directives/gst-scorecard/gst.scorecard.directive.html',
    scope: {
      holes: '='
    }//,
    //controller: 'gstScorecardController'
  };
});

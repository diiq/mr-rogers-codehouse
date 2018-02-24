console.log("CONTTT")
angular.module("budgetBuddy").directive('party', ['$interval', function($interval) {
  function randomColorComponent() {
    return Math.floor(Math.random() * 256);
  }
  
  function randomColor() {
    return `rgb(${randomColorComponent()}, ${randomColorComponent()}, ${randomColorComponent()})`
  }
  
  function setRandomTextColor(elt) {
    elt.style.color = randomColor();
  }

  function link(scope, element, attrs) {
    $interval(() => setRandomTextColor(element[0]), 100);
  }

  return {
    restrict: 'A',
    link: link
  };
}]);
angular.module('WhenScrolledDirective', [])

    .directive('whenScrolledTeste', function() {
        return {
            templateUrl: '/assets/js/directives/templates/card-course.html',

            link: function(scope, element, attrs) {
                console.log(scope.customer.name);
            }
        }
    })

    // we create a simple directive to modify behavior of <ul>
    .directive("whenScrolled", function(){
        return{

            //scope: {
            //    whenScrolled: "@"
            //},

            restrict: 'A',
            link: function(scope, elem, attrs){

                // we get a list of elements of size 1 and need the first element
                raw = elem[0];

                // we load more elements when scrolled past a limit
                elem.bind("scroll", function(){
                    if(raw.scrollTop+raw.offsetHeight+5 >= raw.scrollHeight){
                        scope.loading = true;

                        // we can give any function which loads more elements into the list
                        scope.$apply(attrs.whenScrolled);
                    }
                });
            }
        }
    });
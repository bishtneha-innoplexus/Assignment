'use strict';
var App = angular.module('clientApp', ['ngResource', 'App.filters']);
App.controller('ClientCtrl', ['$scope', function ($scope) {
    $scope.selectedCompany = [];
    $scope.companyList = [{
        id: 1,
        name: 'Apple'
    }, {
        id: 2,
        name: 'Facebook'
    }, {
        id: 3,
        name: 'Google'
    }];

    $scope.$watch('companyList',function(){});

    $scope.clients = [{
        name: 'Brett',
        designation: 'Software Engineer',
        salary: '10000',
        company: {
            id: 1,
            name: 'Apple'
        }
    }, {
        name: 'Steven',
        designation: 'Database Administrator',
        salary: '18000',

        company: {
            id: 3,
            name: 'Google'
        }
    }, {
        name: 'Jim',
        designation: 'Designer',
        salary: '16000',
        company: {
            id: 2,
            name: 'Facebook'
        }
    }, {
        name: 'Michael',
        designation: 'Front-End Developer',
        salary: '15400',        
        company: {
            id: 1,
            name: 'Apple'
        }
    }, {
        name: 'Josh',
        designation: 'Network Engineer',
        salary: '18900',        
        company: {
            id: 3,
            name: 'Google'
        }
    }, {
        name: 'Ellie',
        designation: 'Internet Marketing Engineer',
        salary: '1900',
        company: {
            id: 1,
            name: 'Apple'
        }
    }];
    $scope.$watch('clients',function(){});
    $scope.setSelectedClient = function (id) {
        if (_.contains($scope.selectedCompany, id)) {
            $scope.selectedCompany = _.without($scope.selectedCompany, id);
        } else {
            $scope.selectedCompany.push(id);
        }
        return false;
    };

    $scope.isChecked = function (id) {
        if (_.contains($scope.selectedCompany, id)) {
            return 'icon-ok pull-right';
        }
        return false;
    };

    $scope.checkAll = function () {
        
        $scope.selectedCompany = _.pluck($scope.companyList, 'id');
        console.log($scope.selectedCompany)
    };
    $scope.uncheckAll = function(){
        $scope.selectedCompany=[];
    };
    $scope.sort = function (option) {
        $scope.sortselected = option;
    };
    $scope.namesort = function (option) {
       $scope.selectedsort = option;
    };
    
}]);

App.directive('myDropdown', function() {
function myDropdownCtrl($scope){
        var myDropdown = this;
      $scope.selectallcheckbox = function(){
        myDropdown.selectall();
      }; 
      $scope.deselectcheckbox =function(){
        myDropdown.deselect();
      };
      $scope.clientselectcheckbox = function(id){
        myDropdown.clientselect({'id' :id});
      };
      $scope.sort = function(option){
        myDropdown.sort({'option':option});
      };
      $scope.namesort = function(option){
        myDropdown.namesort({'option': option});
      };
    };
  return {
     restrict: 'E',
     scope: {
      companies: '=inputmodels',
      selectall : '&',
      deselect : '&',
      clientselect : '&',
      sort : '&',
      namesort : '&'
    },
    controller:myDropdownCtrl,
    controllerAs : 'myDropdown',
    templateUrl: 'index2.html',
    bindToController: true
  }});

App.directive('myCustomer', function() {

  return {
     restrict: 'E',
    scope: {
      selectedClient: '=inputmodel',
      companyselection: '=companyselection',
      sortselected: '=sortselected',
      selectedsort: '=selectedsort'
    },
    templateUrl: 'index1.html',
    filter : 'companyFilter'
  }});

//App.directive('listSorting', function(){
//    return{
//        scope
//    }
//})

angular.module('App.filters', []).filter('companyFilter', [function () {
    return function (clients, selectedCompany) {
        if (!angular.isUndefined(clients) && !angular.isUndefined(selectedCompany) && selectedCompany.length > 0) {
            var tempClients = [];
            angular.forEach(selectedCompany, function (id) {
                angular.forEach(clients, function (client) {
                    if (angular.equals(client.company.id, id)) {
                        tempClients.push(client);
                    }
                });
            });
            console.log(tempClients);
            return tempClients;
        } else {
            return clients;
        }
    };
}]).filter('orderBy', [function(){

 return function(clients,sortselect) {
    //debugger;
    if (sortselect){

        clients.sort(function(a, b){

        
        if (sortselect == 'lowtohigh')
        {
            a.salary = parseInt(a.salary);
            b.salary = parseInt(b.salary);
            return a.salary - b.salary;}
        else if(sortselect == 'hightolow')
        {
            a.salary = parseInt(a.salary);
            b.salary = parseInt(b.salary); 
            return b.salary - a.salary;}
        else if(sortselect == 'ascending'){
           // a.name = a.name;
           // b.name = b.name;
           return a.name > b.name ?  1 : 0;
        }
        else if(sortselect == 'descending'){
           // a.name = a.name;
           // b.name = b.name;
           return a.name < b.name  ? 1 : 0; 
        }
    });
    }
    // if (selectsort){
    //     clients.sort(function(a,b)
    //         a.name = a.name;

    //         )

    // }
    return clients;
}
}]);
//angular.module('App.filters', []).filter('salaryFilter', [function (){
//    return function (clients){
//        var tempsalary =[];
//        angular.forEach()
//    }
//}])
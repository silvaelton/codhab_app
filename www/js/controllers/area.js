var app = angular.module('codhab.controllers.area', []);
app.controller('AreaCtrl', function($scope,$ionicPlatform, $ionicConfig, $state,$sce,$filter,$http) {


  $scope.cpf_logados = localStorage['cpf_logado']

  //  $scope.url = $sce.trustAsResourceUrl("http://www.codhab.df.gov.br/candidato/area_restrita?cpf="+$scope.cpf_logados);
  //  $scope.url = $sce.trustAsResourceUrl("http://mobile.codhab.df.gov.br?cpf="+$scope.cpf_logados+'&deviceid='+window.localStorage['UserId']+'&pushtoken='+window.localStorage['PushToken']);
   $scope.url = $sce.trustAsResourceUrl("http://10.36.26.90:3001");
   $scope.logout = function(){
     $http.post("http://www.codhab.df.gov.br/autentica?cpf="+$scope.cpf_logados+'=false')
     .success(function (data, status, headers, config){
       console.log(data)
      }).error(function(data, status, headers, config){
      }).then(function(result){
     });
     window.localStorage['cpf_logado'] = '';
     $scope.cpf_logados = '';

     $state.go('tabs.home');
     window.location.reload();

   }

});


app = angular.module('storeApp', []); 

app.controller('contatoController', function($scope, $http) {
    $scope.contato = {};     
  
        $scope.enviar = function(){
          if ($scope.contato != {}){
          var config = {
            headers : {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
              
            }
          }

         $http(
            {method: 'POST',
            url: 'http://www.lgrapplications.com/file.php',
            data: $scope.contato,
            config:config
          }).success(function(data, status, headers, config) {
          console.log(data);
            $scope.contato = {};
            alert('Contato enviado com sucesso');
          })
          .error(function(data, status, headers, config) {
            console.log(data);
          
          });
        }
        }  
  });




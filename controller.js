var app = angular.module('myapp',[]);

app.controller('myctrl',function($scope){
    var name = prompt('name kia hai be tera?');
    $scope.name = name;
    $scope.title;
$scope.msgs = []
$scope.idSocket;
     var socket = io('http://localhost:9000');
  socket.on('connect', function () {
      console.log('yayyyy');
  socket.on('id',function(response){
    $scope.idSocket;
  });
   socket.on('chat',function(msg){
        $scope.msgs.push(msg);
        $scope.$apply();
   });
   socket.on('typing',function(response){
        $scope.title = response.id+" "+response.status;
        $scope.$apply();
   });
  });

$scope.sendMsg = function(){
 
           var msg = {id : $scope.idSocket,name : $scope.name, message : $scope.msg};
    socket.emit('msg',msg); 
  
}

$scope.isTyping = function (){
    var status = {id: $scope.name, status: 'Is typing'};
    socket.emit('typing',status);
}
});
myAppDev = angular.module('myAppDev', ['App', 'ngMockE2E']);
myAppDev.run(function($httpBackend) {
   var goods = [
    {
      "id": "1",
      "name": "phone",
      "desc": "good phone",
      "have": "available"
    },
    {
      "id": "2",
      "name": "tablet",
      "desc": "good tablet",
      "have": "unavailable"
    },
    {
      "id": "3",
      "name": "comp",
      "desc": "good comp",
      "have": "available"
    }
  ];

  var services = [
    {
      "name": "Наклеить пленку",
      "cost": "15"
    },
    {
      "name": "Заменить батарею",
      "cost": "20"
    },
    {
      "name": "Переустановить ОС",
      "cost": "30"
    },
  ];

  $httpBackend.whenGET('/goods').respond(goods);
  $httpBackend.whenGET('/services').respond(services);
  
  $httpBackend.whenGET(/views\/.*/).passThrough();
});
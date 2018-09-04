function CartService($http){
   const vm = this; 
   vm.cart = {}
   
    vm.quantity = 0; 

   vm.getAllItems = () => {
       return $http({
           url: "/router", 
           method: "GET"
       }).then((response) => {
           console.log(response.data);
           vm.cart = response.data;
           return vm.cart; 
       }).catch((response) => {
        console.log(response);
    });
   }

   vm.addItem = (obj) => {
       console.log(obj.quantity);
    return $http({
        url: "/router/", 
        method: "POST", 
        data: obj 
    }).then((response) => {
        console.log(response.data);
        vm.cart = response.data; 
    }).catch((response) => {
        console.log(response);
    });
   } 

   vm.removeItem = (id) => {
            console.log("remove items ran " + id);
            return $http({
                url: "/router/" + id,  
                method: "DELETE"
            }).then((response) => {
                console.log("then ran")
                vm.cart = response.data; 
            }).catch((response) => {
                console.log(response);
            });
   }

   vm.updateItem = (obj) => {
       console.log(obj);
       return $http({
           url: "/router/", 
           method: "PUT", 
           data: obj 
       }).then((response) => {
           console.log(response); 
            vm.cart = response.data; 
       }).catch((response) => {
        console.log(response);
    });
   }
}

angular.module("App").service("CartService", CartService); 
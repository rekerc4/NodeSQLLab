const component = {
    templateUrl: './components/component.html' ,
    controller: ["CartService", function(CartService) {
        const vm = this;
        vm.cart = {};

        CartService.getAllItems().then((response) => {
            console.log(CartService.cart);
            vm.cart = CartService.cart;
          }).catch((response) => {
            console.log(response);
        });
        
        vm.deleteItem = (id) => {
            console.log(id); 
            CartService.removeItem(id).then((response) => {
                console.log(response); 
                vm.cart = CartService.cart; 
            }).catch((response) => {
                console.log(response);
            });

        }
        
        vm.add = (product, quantity) => {
            console.log(product + quantity); 
            product.quantity = quantity;
            console.log(product); 
            CartService.addItem(product).then((response) => {
                vm.cart = CartService.cart
                console.log(vm.cart);
            }).catch((response) => {
                console.log(response);
            });
        }

        vm.updateItem = (id, quantity) => {
            console.log(id);
            let obj = [id, quantity.value]; 
            CartService.updateItem(obj).then((response) => {
                console.log(response); 
                vm.cart = CartService.cart;
            }).catch((response) => {
                console.log(response);
            });
        }
        
    }]
}

angular.module("App").component("component", component);

    // vm.delete = (index) => {
    //     vm.list.splice(index, 1);
    // }
    // vm.moreInfo = (index) => {
    //     vm.show = index;
    // }
    // vm.closeInfo = () => {
    //     vm.show = null;
    // }
    // vm.changePath = (path) => {
    //     $location.path(path);
    // }
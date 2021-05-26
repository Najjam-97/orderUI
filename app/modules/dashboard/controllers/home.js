dashboard.controller("HomeController", ['$http','$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($http,$rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;
    vm.getUser={};
    vm.showDetails = true;
    vm.home = {};
    vm.setUser = {};

    //load data from APi
    $scope.data=[];
    $scope.loadData = function() {
        console.log("I've been pressed!");
        $http({
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization":'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhcHBsaWNhdGlvbiIsInVpZCI6IklsR1dJQlRnZE5BdUlmIiwicm9sZXMiOlsiQURNSU4iLCJNQVJLRVRQTEFDRSIsIkFQSV9VU0VSIl0sImFwaVR5cGUiOiJQT1JUQUwiLCJ0YWdzIjpbXSwiaWF0IjoxNjIxNDkwNDUyLCJ0ZW5hbnQiOiJYTG4yV0l4ZFd4MERCdCIsInZlcnNpb24iOjF9.MlmkjkF03Hze0caABznkzZZV5QsKve9Vxh8cX1ACkArESgg9-EyuQDhidnjraQDB'
            },
            datatype:'JSON',
            url: "https://api-stg.martcart.pk/api/v1/orders/marketplaceOrders?loadItems=true&statusIn=CONFIRMED,ON_THE_WAY,NEW,VIEWED,FAILED",
        }).success(function (response) {
            for (var i=0;i<response.length;i++){
                $scope.data=response[i].items;
            }
        }).error(function () {
            console.log("Unable to perform get request");
        });
    }



    vm.home.mainData = [
        {
            title: "Projects",
            value: "30+",
            theme: "aqua",
            icon: "puzzle-piece"
        },
        {
            title: "Designs",
            value: "250+",
            theme: "red",
            icon: "paint-brush"
        },
        {
            title: "Awards",
            value: "50+",
            theme: "green",
            icon: "trophy"
        },
        {
            title: "Cups of Beer",
            value: "0",
            theme: "yellow",
            icon: "glass"
        },
    ];

    vm.home.items=[
        {
            UID: '16797000061',
            status: 'viewed',
            trip: 'single trip\n'+' Express',
            address: "Skylarks It Solution, Mart Cart\n" +
                "Tehsil Hazro,Distt. Attock,Pakistan",
            Uaddress:'Ghori Town Phase 3, Muhammad Waqas\n' +
                'Ghori Town Phase 3 +923117556579',
            price:'Rs1,479.00\n' +
                'CASH',
            OderStatus:'Pending Confirmation',
            orderConfirm:'Confirm Order'
        },
        {
            UID: '16797000062',
            status: 'viewed',
            trip: 'single trip\n'+' Express',
            address: "Skylarks It Solution, Mart Cart\n" +
                "Tehsil Hazro,Distt. Attock,Pakistan",
            Uaddress:'Ghori Town Phase 3, Muhammad Waqas\n' +
                'Ghori Town Phase 3 +923117556579',
            price:'Rs1,479.00\n' +
                'CASH',
            OderStatus:'Pending Confirmation',
            orderConfirm:'Confirm Order'
        },
        {
            UID: '16797000063',
            status: 'viewed',
            trip: 'single trip\n'+' Express',
            address: "Skylarks It Solution, Mart Cart\n" +
                "Tehsil Hazro,Distt. Attock,Pakistan",
            Uaddress:'Ghori Town Phase 3, Muhammad Waqas\n' +
                'Ghori Town Phase 3 +923117556579',
            price:'Rs1,479.00\n' +
                'CASH',
            OderStatus:'Pending Confirmation',
            orderConfirm:'Confirm Order'
        }
    ];
    vm.home.arrlist=[
        {
            status:'Active'
        },
        {
        status: 'Out Of Delivery'
        },
        {
            status:'Done'
        },
        {
            status: 'Failed'
        },
        {
            status:'Canceled'
        }
    ];

    //Tools I use Carousel
    $("#owl-demo").owlCarousel({


        items: 8, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    });
    $("#owl-demo").trigger('owl.play', 2000);

    // Custom Navigation Events
    $(".next").click(function () {
        $("#owl-demo").trigger('owl.next');
    })
    $(".prev").click(function () {
        $("#owl-demo").trigger('owl.prev');
    })
    $(".play").click(function () {
        $("#owl-demo").trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function () {
        $("#owl-demo").trigger('owl.stop');
    })

    //cartoon photo slider carosusel
    $("#owl-single").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 5000, //Set AutoPlay to 3 seconds
    });
}]);


var demo = angular.module("Demo",['ngResource']);

demo.controller("DemoController",[ '$scope',function($scope){
        $scope.selectedcompany = [];
        $scope.phonenames= [ "motorola" , "dell" , "samsung" ,  "nexus" , "lg" , "t-mobile" , "sanyo-zio" ];
		$scope.phoneList = [
    {
        "age": 0, 
        "id": "motorola", 
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
        "name": "Motorola XOOM\u2122 with Wi-Fi", 
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }, 
    {
        "age": 1, 
        "id": "motorola", 
        "imageUrl": "img/phones/motorola-xoom.0.jpg", 
        "name": "MOTOROLA XOOM\u2122", 
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }, 
    {
        "age": 2, 
        "carrier": "AT&amp;T", 
        "id": "motorola", 
        "imageUrl": "img/phones/motorola-atrix-4g.0.jpg", 
        "name": "MOTOROLA ATRIX\u2122 4G", 
        "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
    }, 
    {
        "age": 3, 
        "id": "dell", 
        "imageUrl": "img/phones/dell-streak-7.0.jpg", 
        "name": "Dell Streak 7", 
        "snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around."
    }, 
    {
        "age": 4, 
        "carrier": "Cellular", 
        "id": "samsung", 
        "imageUrl": "img/phones/samsung-gem.0.jpg", 
        "name": "Samsung Gem\u2122", 
        "snippet": "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price."
    }, 
    {
        "age": 5, 
        "carrier": "Dell", 
        "id": "dell", 
        "imageUrl": "img/phones/dell-venue.0.jpg", 
        "name": "Dell Venue", 
        "snippet": "The Dell Venue; Your Personal Express Lane to Everything"
    }, 
    {
        "age": 6, 
        "carrier": "Best Buy", 
        "id": "nexus", 
        "imageUrl": "img/phones/nexus-s.0.jpg", 
        "name": "Nexus S", 
        "snippet": "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
    }, 
    {
        "age": 7, 
        "carrier": "Cellular South", 
        "id": "lg", 
        "imageUrl": "img/phones/lg-axis.0.jpg", 
        "name": "LG Axis", 
        "snippet": "Android Powered, Google Maps Navigation, 5 Customizable Home Screens"
    }, 
    {
        "age": 8, 
        "id": "samsung", 
        "imageUrl": "img/phones/samsung-galaxy-tab.0.jpg", 
        "name": "Samsung Galaxy Tab\u2122", 
        "snippet": "Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122 brings you an ultra-mobile entertainment experience through its 7\u201d display, high-power processor and Adobe\u00ae Flash\u00ae Player compatibility."
    }, 
    {
        "age": 9, 
        "carrier": "Cellular South", 
        "id": "samsung", 
        "imageUrl": "img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg", 
        "name": "Samsung Showcase\u2122 a Galaxy S\u2122 phone", 
        "snippet": "The Samsung Showcase\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance, even outdoors"
    }, 
    {
        "age": 10, 
        "carrier": "Verizon", 
        "id": "motorola", 
        "imageUrl": "img/phones/droid-2-global-by-motorola.0.jpg", 
        "name": "DROID\u2122 2 Global by Motorola", 
        "snippet": "The first smartphone with a 1.2 GHz processor and global capabilities."
    }, 
    {
        "age": 11, 
        "carrier": "Verizon", 
        "id": "motorola", 
        "imageUrl": "img/phones/droid-pro-by-motorola.0.jpg", 
        "name": "DROID\u2122 Pro by Motorola", 
        "snippet": "The next generation of DOES."
    }, 
    {
        "age": 12, 
        "carrier": "AT&amp;T", 
        "id": "motorola", 
        "imageUrl": "img/phones/motorola-bravo-with-motoblur.0.jpg", 
        "name": "MOTOROLA BRAVO\u2122 with MOTOBLUR\u2122", 
        "snippet": "An experience to cheer about."
    }, 
    {
        "age": 13, 
        "carrier": "T-Mobile", 
        "id": "motorola", 
        "imageUrl": "img/phones/motorola-defy-with-motoblur.0.jpg", 
        "name": "Motorola DEFY\u2122 with MOTOBLUR\u2122", 
        "snippet": "Are you ready for everything life throws your way?"
    }, 
    {
        "age": 14, 
        "carrier": "T-Mobile", 
        "id": "t-mobile", 
        "imageUrl": "img/phones/t-mobile-mytouch-4g.0.jpg", 
        "name": "T-Mobile myTouch 4G", 
        "snippet": "The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi."
    }, 
    {
        "age": 15, 
        "carrier": "US Cellular", 
        "id": "samsung", 
        "imageUrl": "img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg", 
        "name": "Samsung Mesmerize\u2122 a Galaxy S\u2122 phone", 
        "snippet": "The Samsung Mesmerize\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance,even outdoors"
    }, 
    {
        "age": 16, 
        "carrier": "Sprint", 
        "id": "sanyo-zio", 
        "imageUrl": "img/phones/sanyo-zio.0.jpg", 
        "name": "SANYO ZIO", 
        "snippet": "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value."
    }, 
    {
        "age": 17, 
        "id": "samsung", 
        "imageUrl": "img/phones/samsung-transform.0.jpg", 
        "name": "Samsung Transform\u2122", 
        "snippet": "The Samsung Transform\u2122 brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed \u201cSprint ID Service Pack\u201d."
    }, 
    {
        "age": 18, 
        "id": "t-mobile", 
        "imageUrl": "img/phones/t-mobile-g2.0.jpg", 
        "name": "T-Mobile G2", 
        "snippet": "The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network. Get the information you need, faster than you ever thought possible."
    }, 
    {
        "age": 19, 
        "id": "motorola", 
        "imageUrl": "img/phones/motorola-charm-with-motoblur.0.jpg", 
        "name": "Motorola CHARM\u2122 with MOTOBLUR\u2122", 
        "snippet": "Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service."
    }
];

//

$scope.selectphone = function(u_select){
	$scope.selectedcompany = $scope.phoneList;
    $scope.forward_data = [];
    var j = 0;
    for(i=0;i<$scope.selectedcompany.length ; i++){
        if ($scope.selectedcompany[i].id == u_select){
            $scope.forward_data[j] = $scope.selectedcompany[i];
            j++;
            }
        //return forward_data;
        }
        console.log($scope.forward_data);
	};
	
	}]);


// demo.component('DemoCOm', {
//   templateUrl: 'index1.html',
//   controller: DemoController,
//   bindings: {
//     hero: '<',
//     onDelete: '&',
//     onUpdate: '&'
//   }
// });


//demo.component('phones',{
//    templateUrl: 'index1.html',
//    controller: DemoController,
//    bindings:{ 

        
//    }
//})
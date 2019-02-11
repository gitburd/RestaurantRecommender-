$(document).ready(function(){

class RestaurantRecommender {
    constructor() {
    // All main properties should go here.
    this.ratings = [];
    this.restaurants = {};
    this.users = {};
    this.categories=[];
    }

// good // good
    addRestaurant(name, category) {
        class Restaurant {
            constructor(name, category) {
            this.name = name;    
            this.category = [category];
            this.ratings = [];
            this.ratingsArr= [];
            this.avgRating = "none yet";
        }    
        }     
        this.restaurants[name] = new Restaurant(name, category);
        $('#displayRestaurantsList').append("<li>" + name + "</li>");

    }

    // getAvgRating(name){
    //     this.restaurants.name.avgRating = []

    //     this.ratings.forEach(element => {
    //         if (element[0]=== name){
    //             avgRating += element[2];
    //         }
            
    //     });
    
    //     avgRating= avgRating.reduce(function (p, c) {
    //         return p + c;
    //       })  / avgRating.length ;
    //       console.log(avgRating);

    //     console.log(this.ratings);
          
    // }
         
//  good //good
    addUser(name) {
        class User {
            constructor(name) {
                this.name = name; 
                // not working 
                this.ratings= [];
            }
            }
            this.users[name] = new User(name)
            $('#displayUsersList').append("<li>" + name + "</li>");
    }
     
    // good
    addRating(user,restaurant, stars){
        this.restaurants[restaurant].ratings.push([restaurant, user, stars]);
        this.restaurants[restaurant].ratingsArr.push(stars)
        this.restaurants[restaurant].avgRating= (this.restaurants[restaurant].ratingsArr.reduce((total, amount) => total + amount)/this.restaurants[restaurant].ratingsArr.length).toFixed(2);
        this.users[user].ratings.push([restaurant, user, stars]); 
        this.ratings.push([restaurant, user,stars]);
       
    }

    // CHECK ON
    // printRatingDetails(user, restaurant, stars) {
    //     if (this.user && this.restaurant && this.stars) {
    //       var starPlural = "stars";
    //       if(this.stars === 1) {
    //         starPlural = "star";
    //       }
    //       console.log("!".repeat(this.stars));
    //       console.log("The user ", this.user.name, " gives ", this.restaurant.name, this.stars, starPlural);
    //       console.log("!".repeat(this.stars));
    //       console.log();
    //     }
    //   }
    // }

// GOOD
    addCategory(category) {
        this.categories.push(category)
    } 

//    GOOD
    addRestaurantToCategory(name, category){
        this.restaurants[name].category.push(category)
    }
// GOOD

    deleteRestaurantFromCategory(name, category){
            this.restaurants[name].category = this.restaurants[name].category.filter(function(element){
                  return element !==category;
             });
    }

// good
deleteRestaurant(restaurant) {
    delete this.restaurants[restaurant]; 
 }
// good
    deleteUser(user) {
       delete this.users[user] ;
     
    }

// good
    deleteCategory(cat) {
        this.categories = this.categories.filter(function(element){
            return element !==cat   
        });
    }

// GOOD

// }); 

deleteRating(user,restaurant, stars) {


    this.ratings = this.ratings.filter(function(element){
       return ((element[1] !==user) || (element[0] !==restaurant))  
    });

    this.restaurants[restaurant].ratings = this.ratings.filter(function(element){
        return ((element[1] !==user) || (element[0] !==restaurant))  
    });

    // this.users[user].ratings = this.ratingsArr.filter(function(element){
    //     return ((element.user !==user) || (element.restaurant !==restaurant))  
    // });

    var index = this.restaurants[restaurant].ratingsArr.indexOf(stars);
        if (index > -1) {
            this.restaurants[restaurant].ratingsArr.splice(index, 1); 
        }    
       this.restaurants[restaurant].avgRating= (this.restaurants[restaurant].ratingsArr.reduce((total, amount) => total + amount)/this.restaurants[restaurant].ratingsArr.length).toFixed(2); 
       
   }
   
   
// filter(){
//     }


    // end of rr
}
    
function displayRestaurants(rr){  
        
    $('#displayRestaurantsBtn').click(function() {
        $.each( rr.restaurants, function( key, value ) {
            $('#displayRestaurantsList').append("<li class='restaurant-name'>" + key + " </li>")  
        }); 
        });
}

function addR(rr){
    
        $('#addRestaurantBtn').click(function() {
        //    $('#displayRestaurantsList').append("<li class='restaurant-name'>" + document.getElementById('addRestaurantFormName').value + " </li>")  
           rr.addRestaurant(document.getElementById('addRestaurantFormName').value, document.getElementById('addRestaurantFormCategory').value);
           console.log(rr);
         });   
}

function removeR(rr){
    $('#removeRestaurantBtn').click(function() {
    rr.deleteRestaurant(document.getElementById('removeRestaurantFormName').value); 
        $('#displayRestaurantsList').append("<li class='restaurant-name'>" + document.getElementById('removeRestaurantFormName').value + " </li>")
    
    });
          
}

function displayUsers(rr){  
        
    $('#displayUsersBtn').click(function() {
        $.each( rr.users, function( key, value ) {
            $('#displayUsersList').append("<li>" + key + " </li>")  
           
        }); 
        });
}


function addUser(rr){
    
    $('#signUpBtn').click(function() {
    //    $('#displayRestaurantsList').append("<li class='restaurant-name'>" + document.getElementById('addRestaurantFormName').value + " </li>")  
       rr.addUser(document.getElementById('newUser').value);
       console.log(rr);
     });   
}


// addUser(name)

// function getAvgRating(rr,name){
//     let avgRating = []

//     $.each( rr.restaurants.name.ratings, function( key, value ) {
//         avgRating +=  this.restaurants.name.ratings.stars
//     }); 
//     return avgRating.reduce(function (p, c) {
//         return p + c;
//       })  / avgRating.length 

// }


// HAD TO STOP HERE 

// function displayRestaurantRatings(){  

// $('.displayHead').click(function(){
//     $(this).addClass('red-text'); 
// });
// }


// function change(rr){
//     $('.restaurant-name').click(function(){
//         $('#displayHead').html('<p>'+ 'that' +'</p>')
// });
// }


let rr = new  RestaurantRecommender ()
rr.addRestaurant("Pizza Bell");
rr.addRestaurant("Zazzi");
rr.addRestaurant("Jupiter");
rr.addRestaurant("Saturn");
rr.addRestaurant("Royal Ground");

rr.addUser("Scarlet Johanson");
rr.addUser("Bill Nye");
rr.addUser("Pickle Rick");
rr.addUser("The Queen of England");
rr.addUser("lulu Bell")


rr.addRating("Bill Nye", "Jupiter", 5);
rr.addRating("Pickle Rick", "Jupiter", 5);
rr.addRating("The Queen of England", "Jupiter", 2);
console.log(rr);

rr.deleteRating("The Queen of England", "Jupiter", 2);



rr.addRating("Bill Nye", "Pizza Bell", 4);
rr.addRating("lulu Bell", "Pizza Bell", 3);
rr.addRating("The Queen of England", "Pizza Bell", 3);


console.log(rr);
// rr.displayRestaurants();
displayRestaurants(rr);
addR(rr);
displayUsers(rr);
addUser(rr);

rr.getAvgRating;
// getAvgRating(rr, "Pizza Bell");

// end doc ready


});
  

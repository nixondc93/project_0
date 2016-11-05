$(document).ready(function(){


  var Car = {
    move: function(e){
        if(e.which === this.key){
          console.log('keypress')
          $( '.' + this.key ).animate({ "margin-left": "+=5%" }, "slow" );
        }
        console.log(this.key, this.eleClass);
      },
    margin: function(){$('.' + this.eleClass).css('margin-left')}
  }

  function CarFactory(eleClass, key) {
    var car = Object.create(Car);
    car.eleClass = eleClass,
    car.key = key
    return car;
}

var redCar = CarFactory('player-1', 76);
var blueCar = CarFactory('player-2', 68);

console.log(redCar.key);
console.log(blueCar.key);


$(document).on("keydown", function(e){redCar.move(e)});
blueCar.move();


console.log(blueCar.move());





  // $(document).on("keydown", function(e){
  //
  //   if(e.which === 68){$( '.player-1' ).animate({ "margin-left": "+=2%" }, "fast" );}
  // });




// console.log(Car.color());
// console.log(Car.color());
// Car.move('player-1');

// function winOrLap(car, key){
//    $('.' + car + '').on('keydown', function(e){
//     console.log('hello');
//     if(e.which === 68){
//       console.log($('.' + car + '').css('margin-left'));
//       return e.css('margin-left');
//     }
//   });
//
//   if(margin){
//
//   }
// }
//
// winOrLap(1);
// winOrLap(2);
//
//
//
//
});

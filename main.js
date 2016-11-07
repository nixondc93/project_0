$(document).ready(function() {


	//   var Car = {
	//     move: function(e){
	//       if(e.which === this.key && this.distancetogoal > 46){
	//         this.winner();
	//         this.reset();
	//       } else if(e.which === this.key){
	//         $('.player-' + this.eleClass).animate({ "margin-left": "+=2%" }, "slow" );
	//         $('.player-' + this.eleClass + ':animated').off();
	//         this.distancetogoal ++;
	//       }
	//     },
	//     margin: function(num){ $('.player-'+this.eleClass).css('margin-left=\'' + num + '\'')},
	//     winner: function(){
	//       $('.winner').append("Player:"+this.eleClass+" you win!");
	//     },
	//     reset: function(){
	//       $('.player-'+this.eleClass).css('margin-left','2%');
	//       this.distancetogoal = 0;
	//     }
	//   }
	//
	//   function CarFactory(eleClass, key) {
	//     var car = Object.create(Car);
	//     car.eleClass = eleClass;
	//     car.key = key;
	//     car.distancetogoal = 0;
	//     return car;
	// }
	//
	// var redCar = CarFactory('1', 76);
	// var blueCar = CarFactory('2', 68);
	//
	//
	// $('.player-'+this.eleClass).hide();
	// // .css('margin-left=\'' + 14 + '\'')
	// $(document).on("keyup", function(e){redCar.move(e)});
	// $(document).on("keyup", function(e){blueCar.move(e)});








	// var player1Position = $('.car').position();
	// console.log(player1Position)
	//
	//
	//
	//
	//
	//

  var mili = $('#milisec');
  var mins = $('#minutes');
  var secs = $('#seconds');
	var begin = $('.begin');
	var container = $('#container');
	var car = $('#car');
	var pole = $('.pole');
	var pole_1 = $('#pole_1');
	var pole_2 = $('#pole_2');
	
	var speed_span = $('#speed');
	var restart = $('#restart_btn');


	var container_width = parseInt(container.width());
	var container_height = parseInt(container.height());
	var pole_initial_position = parseInt(pole.css('right'));
	var pole_initial_height = parseInt(pole.css('height'));
	var car_left = parseInt(car.css('left'));
	var car_height = parseInt(car.height());
	// var speed =  parseInt($('#speed').val());
  var speed = 25;






	function game() {



      // var date = Date.prototype.getTime();
      // secs.html(''+date+'');
      var sec = 0;
      function timePading (t){ return t > 9 ? t : '0'+ t }
      var timer = setInterval( function(){
        mili.html(timePading(++sec%60))
        secs.html(timePading(parseInt(sec/60,10)));
        mins.html(timePading(parseInt(sec/60/60,10)));
      }, 10);




    //car movement


    // function movement(){
    $(document).keydown(function(e) {
    var position1 = $('#car').position();
		switch (e.keyCode) {
			case 37:
				$('#car').css('left', position1.left - 40 + 'px');
				break;
			case 38:
				$('#car').css('top', position1.top - 40 + 'px');
				break;
			case 39:
				$('#car').css('left', position1.left + 40 + 'px');
				break;
			case 40:
				$('#car').css('top', position1.top + 40 + 'px');
				break;
		}
	});
// }
    function collision($div1, $div2) {
       var x1 = $div1.offset().left;
       var y1 = $div1.offset().top;
       var h1 = $div1.outerHeight(true);
       var w1 = $div1.outerWidth(true);
       var b1 = y1 + h1;
       var r1 = x1 + w1;
       var x2 = $div2.offset().left;
       var y2 = $div2.offset().top;
       var h2 = $div2.outerHeight(true);
       var w2 = $div2.outerWidth(true);
       var b2 = y2 + h2;
       var r2 = x2 + w2;

       if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
       return true;
   }

   function stopTheGame(){
      clearInterval(movement);
      clearInterval(timer);
   }

		var movement = setInterval(function() {
			if (collision(car, pole_1) || collision(car, pole_2) || parseInt(car.css('top')) <= 0 || parseInt(car.css('top')) > container_height - car_height){
        // console.log('test');
        stopTheGame();

      }




		  var currentPosition = parseInt(pole.css('right'));
      // changing pole height
			var newHeight = parseInt(Math.random() * 120);
			if (currentPosition > container_width) {
				pole_1.css('height', pole_initial_height + newHeight);
				pole_2.css('height', pole_initial_height - newHeight);
				currentPosition = pole_initial_position;
			}

      //moving poles
			pole.css('right', currentPosition + speed);
		}, 20);
	}


//begin game button click
	begin.click(function(e) {
		begin.slideUp();
		game();


	});

  restart.click(function(e){
    location.reload()
  });

});

$(document).ready(function() {
	function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

	$(".ryu").on("mouseenter", function(){


		$(".ryu-still").hide();
		$(".ryu-ready").show();

	}).on("mouseleave",function(){
		$(".ryu-ready").hide();
		$(".ryu-still").show();

	}).on("mousedown", function(){
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
		.animate({'left':'700px'},500,
					function(){
							$(this).hide();
							$(this).css('left','442px');
										});
	}).on("mouseup", function(){

		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});
	$(document).on("keydown", function(event){

		if (event.which == 88) {
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-cool").show();
						
		}

}).on("keyup", function(event){
				if (event.which == 88){
				$(".ryu-cool").hide();
				$(".ryu-ready").hide();
				$(".ryu-still").show();
				$(".ryu-throwing").hide();
			}

}).on("click", function(){
	$(".ryu-ready").hide();
});


$(".para").slideDown("slow");
});


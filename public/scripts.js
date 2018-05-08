function ajax_call(q){
	$.ajax({
  	url: '/chatbot',
  	data: {
  		question: q
  	},
  	type: 'POST',
  	dataType: 'json',
		error: function(data){
			// console.log(data);
			alert("Oh No! Try a refresh?");
		},
  	success: function(data){
			console.log("WOHO we got data back!");
			console.log(data);

    }
  });
};

// called when window loads
$(window).on('load',function(){
	// console.log('we are set up!');

  // grab the submit button
	var $submit_button = $('#submit_button');


  // when the submit button is clicked send data to the server side
	$submit_button.click(function(){
    console.log("we have been clicked!");
		var chatbot_question = $('input[name="chatbot-question"]').val();
	  console.log(chatbot_question);
	  ajax_call(chatbot_question);
	});

});

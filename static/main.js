/**
 * jTinder initialization
 */
$("#tinderslide").jTinder({
	// dislike callback
    onDislike: function (item) {
        // POST item index (asynchronously) to server to store swipe info
	    $.post('/save_swipe', { animal_id: parseInt(item.attr('id')), match: 0 });
    },
	// like callback
    onLike: function (item) {
        // POST item index (asynchronously) to server to store swipe info
	    $.post('/save_swipe', { animal_id: parseInt(item.attr('id')), match: 1 });
    },
	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike'
});

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function(e){
	e.preventDefault();
	$("#tinderslide").jTinder($(this).attr('class'));
});
$(document).ready(function() {
	// Add item
	$("#addbutton").mousedown(function() {
		addItem();
		$("#addbox").focus();
	});
	
	$(document).keydown(function(event) {
		if (event.which == 13) {
			addItem();
		}
	});
	
	// Remove item
	$("#thelist").on("click", ".del", function(){
		$(this).parent().remove();
		checkForLastItem();
	})
	
	// Strike item
	.on("click", ".items", function(event){
		$(this).toggleClass("checked");
	});
	
	// Show instructions
	$("#instructions").mouseover(function() {
		$("#instructions-info").show();
	})
	$("#instructions").mouseleave(function() {
		$("#instructions-info").hide();
	});
	
	// Sortable list (requires extra javascript source in HTML)
	$("#thelist").sortable();
	
	// New list
	$("#newbutton").mousedown(function() {
		var retVal = confirm("Creating a new list will delete your current list.\n\nDo you want to continue?");
		if( retVal == true ){
			$("#thelist").children().remove();
			checkForLastItem();
			$("#addbox").val("");
			return true;
		}
	});
});

// add item to list
function addItem () {
	var addbox = $("#addbox").val().trim();
	if (addbox != "") {
		$("#example-item").remove();
		var item = '<li><div class="del" title="Remove item"></div><div class="items" title="Mark item">' + addbox + '</div></li>';
		$("#thelist").prepend (item);
		$("#addbox").val("");
	}
};

// check for last item and add the example text
function checkForLastItem () {
	var countli = $("#thelist li").length;
	if (countli == 0) {
		$("#thelist").prepend ('<li id="example-item" class="example">(Waiting for your items)</li>');
	}
}
$(document).ready(function () {
	// Add item
	$("#addbutton").mousedown(addItem);
	
	$(document).keydown(function(event) {
		if (event.which == 13) {
			addItem();
		}
	})
	
	// Remove item
	$("#thelist").on("click", ".del", function (){
		$(this).parent().remove();
	})
	
	// Strike item
	.on("click", ".items", function (event){
		$(this).toggleClass("checked");
	});
});

function addItem () {
	var item = '<li><div class="del"></div><div class="items">' + $("#addbox").val() + '</div></li>';
	if (item !="") {
		$("#thelist").prepend (item);
		$("#addbox").val("");
	}
};
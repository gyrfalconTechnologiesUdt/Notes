$(document) .ready(function(){
$("#backarrowId").click(function(){
	window.location.href="3_ET_track expense.html";
});
$("#rec1Id").click(function(){
	window.location.href="2_ET_create expenses.html";
});
$("#rec3Id").click(function(){
	window.location.href="3_ET_track expense.html";
});
$("#rec2Id").click(function(){
	window.location.href="6_ET_consolidate.html";
});
$("#rec4Id").click(function(){
	window.location.href="7_ET_settings.html";
});
$("#row1Id").click(function(){
	window.location.href="4_ET_category.html";
});
$("#catrowId").click(function(){
	window.location.href="5_ET_category list.html";
});
$("#backarrow1Id").click(function(){
	window.location.href="4_ET_category.html";
});
$("#homeId").click(function(){
	window.location.href="1_ET_dashboard.html";
});
$("#createIdId").click(function(){
	window.location.href="2_ET_create expenses.html";
});
$("#trackId").click(function(){
	window.location.href="3_ET_track expense.html";
});
$("#consId").click(function(){
	window.location.href="6_ET_consolidate.html";
});
$("#settingsId").click(function(){
	window.location.href="7_ET_settings.html";
});
$("#saveId").click(function(){
	window.location.href="6_ET_consolidate.html";
});
$("#amountId input").focus(function(e){
	
$("#amountLbl").addClass("amountLbl");
});

$("#amountId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#amountLbl").removeClass("amountLbl");
	}
});

$("#catId input").focus(function(e){
	
$("#catLbl").addClass("catLbl");
});

$("#catId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#catLbl").removeClass("catLbl");
	}
});

$("#dateId input").focus(function(e){
	
$("#dateLbl").addClass("dateLbl");
});

$("#dateId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#dateLbl").removeClass("dateLbl");
	}
});


$("#notesnameId input").focus(function(e){
	
$("#notesnameLbl").addClass("notesnameLbl");
});

$("#notesnameId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#notesnameLbl").removeClass("notesnameLbl");
	}
});

$("#notesId input").focus(function(e){
	
$("#notesLbl").addClass("notesLbl");
});

$("#notesId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#notesLbl").removeClass("notesLbl");
	}
});

$('#btnEdit').click(function(){
   $('#row1').attr('contenteditable', 'true');
});
$('#btnEdit1').click(function(){
   $('#row2').attr('contenteditable', 'true');
});
$('#btnEdit2').click(function(){
   $('#row3').attr('contenteditable', 'true');
});
$("#popupId").hide();
$("#delId1").click(function(){
	$("#popupId").show();
});
$("#closeId").click(function(){
	$("#popupId").hide();
});
$("#okId").click(function(){
	  $( "#row1" ).remove();
      $("#popupId").hide();
});


$("#popupId1").hide();
$("#sorticonId").click(function(){
	$("#popupId1").show();
});
$("#closeId1").click(function(){
	$("#popupId1").hide();
});
$("#catmsgId").click(function(){
	$("#contable1Id").hide();
	$("#contableId").show();
	$("#popupId1").hide();
});
$("#catcarId").click(function(){
	$("#contableId").hide();
		$("#contable1Id").show();

	$("#popupId1").hide();
});
$("#contableId").click(function(){
	window.location.href="5_ET_category list.html";
});

});
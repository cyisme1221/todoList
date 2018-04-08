 $("ul").on("click", "li", function(){
 	
 	$(this).toggleClass("completed");
 });

 //click on X to delete
 $("ul").on("click", "span", function(event){
 	$(this).parent().fadeOut(200, function(){  //此行的this指span
 		$(this).remove(); //此行span指的是 fadeOut前边， 也就是li (span的parent)
 	});  //remove span的父元素， 也就是li
 	event.stopPropagation();
 });

 $("input[type='text']").keypress(function(event){
 	if(event.which === 13) {
 		//获取输入的数据
 		var todoText = $(this).val();

 		$(this).val(""); //获取后清空输入框中的数据
 		//创建一个新的li并添加到ul中
 		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
 	}
 });

$("h1").on("click", ".fa-plus",function(){
	 $("input[type='text']").fadeToggle();
});
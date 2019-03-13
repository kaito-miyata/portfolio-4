 $(function(){
   // リストを非表示
	$('#nav_toggle').on('click',function(){
    $("header").toggleClass('open');
    &('header_list').slideToggle(500);
  });

	});

 })

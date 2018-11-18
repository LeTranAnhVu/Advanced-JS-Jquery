


function dev_tool(){
	let e = '<div class="toggle-tool"> <div class="btn btn-success" id="toggle-button">toggle layout</div> <div class="btn-warning" id="toggle-fluid-button">toggle fluid</div> <div class="toggle-grid active"> <div class="container-grid container"> <div class="row"> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> </div> </div> </div> </div>', m = '.toggle-tool { position: relative; width: 100%; } .toggle-tool #toggle-button { position: fixed; bottom: 20vh; right: 20px; text-align: center; border-radius: 5px; cursor: pointer; z-index: 400; padding: 10px 10px; } .toggle-tool #toggle-fluid-button { position: fixed; bottom: 5vh; right: 20px; text-align: center; border-radius: 5px; cursor: pointer; z-index: 400; padding: 10px 10px; } .toggle-tool .toggle-grid { position: fixed; top: 0; left: 0; height: 100vh; width: 100%; z-index: 200; display: none; } .toggle-tool .toggle-grid.active { display: block; } .toggle-tool .toggle-grid .container-grid .row { height: 100vh; } .toggle-tool .toggle-grid .container-grid .row .col { height: 100vh; } .toggle-tool .toggle-grid .container-grid .row .col .item { height: 100vh; background: rgba(0, 0, 0, 0.5); }';
	$('head').append(`<style>${m}</style>`);
	$('body').append(e);


	// logic
	$('#toggle-button').on('click',function(){
		$('.container-grid').removeClass('container-fluid');
		$('.toggle-grid').toggleClass('active');
		$('.container-grid').toggleClass('container');
	})
	
	// $('#toggle-fluid-button').on('click',function(){
	// 	$('.container-grid').removeClass('container');
	// 	$('.toggle-grid').toggleClass('active');
	// 	$('.container-grid').toggleClass('container-fluid');
	// })
}

// dev_tool();

function boxInoutActiveAffect(){
	$('.box-input input').on('focus',function(){

		$(this).parents('.box-input').addClass('active');
		$(this).parents('.box-input').find('label').addClass('active');
	})
	
	$('.box-input input').on('focusout',function(){
		$(this).parents('.box-input').removeClass('active');
		$(this).parents('.box-input').find('label').removeClass('active');
		let text = $(this).val();
		if(text){
			$(this).parents('.box-input').find('label').addClass('active');
		}else{
		}
	})
}

boxInoutActiveAffect();




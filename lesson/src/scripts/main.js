function dev_tool() {
	let e = '<div class="toggle-tool"> <div class="btn btn-success" id="toggle-button">toggle layout</div> <div class="btn-warning" id="toggle-fluid-button">toggle fluid</div> <div class="toggle-grid active"> <div class="container-grid container"> <div class="row"> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> </div> </div> </div> </div>',
		m = '.toggle-tool { position: relative; width: 100%; } .toggle-tool #toggle-button { position: fixed; bottom: 20vh; right: 20px; text-align: center; border-radius: 5px; cursor: pointer; z-index: 400; padding: 10px 10px; } .toggle-tool #toggle-fluid-button { position: fixed; bottom: 5vh; right: 20px; text-align: center; border-radius: 5px; cursor: pointer; z-index: 400; padding: 10px 10px; } .toggle-tool .toggle-grid { position: fixed; top: 0; left: 0; height: 100vh; width: 100%; z-index: 200; display: none; } .toggle-tool .toggle-grid.active { display: block; } .toggle-tool .toggle-grid .container-grid .row { height: 100vh; } .toggle-tool .toggle-grid .container-grid .row .col { height: 100vh; } .toggle-tool .toggle-grid .container-grid .row .col .item { height: 100vh; background: rgba(0, 0, 0, 0.5); }';
	$('head').append(`<style>${m}</style>`);
	$('body').append(e);


	// logic
	$('#toggle-button').on('click', function () {
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

function boxInoutActiveAffect() {
	$('.box-input input').on('focus', function () {

		$(this).parents('.box-input').addClass('active');
		$(this).parents('.box-input').find('label').addClass('active');
	})

	$('.box-input input').on('blur', function () {
		$(this).parents('.box-input').removeClass('active');
		let inputTarget = $(this).parents('.box-input').find('label');
		let text = $(this).val();
		text ? inputTarget.addClass('active') : inputTarget.removeClass('active');
	})
}
boxInoutActiveAffect();


let currentStage = 0;

function processBarNextStep() {

	$('.process-bar #next-btn').on('click', function () {
		let stages = $('.process-bar .stages .stage');
		currentStage++;
		$(stages[currentStage]).addClass('active');
	})
}

function processBarBackStep() {
	$('.process-bar #back-btn').on('click', function () {
		let stages = $('.process-bar .stages .stage');
		if (currentStage > 0) {
			$(stages[currentStage]).removeClass('active');
			currentStage--;
		}
	})
}

function resetProcessBar() {
	$('.process-bar #reset-btn').on('click', function () {
		currentStage = 0;
		$('.process-bar .stages .stage').each(function (index, item) {
			index == 0 ? null : $(item).removeClass('active');
		});
	})
}


function getUrlParameter(param, dummyPath) {
	var sPageURL = dummyPath || window.location.search.substring(1),
		sURLVariables = sPageURL.replace(/%2C/g, ",").split(/[&||?]/),
		res;
	console.log('sPageURL :', sPageURL);
	console.log('sURLVariables :', sURLVariables);
	for (var i = 0; i < sURLVariables.length; i += 1) {
		var paramName = sURLVariables[i],
			sParameterName = (paramName || "").split("=");

		if (sParameterName[0] === param) {
			res = sParameterName[1];
		}
	}
	return res;
}

console.log(getUrlParameter("step"))



processBarNextStep();
processBarBackStep();
resetProcessBar();



// tool

function letterSpacingTool() {
	$('#letter-spacing-tool ').on('input change', function () {
		let value = $(this).val();
		$('.object-col .object .object-content').css({
			'letter-spacing': value.toString() + "px"
		});
		let e = `letter-spacing: ${value.toString()}px`;
		$('.source-col .source-code').text(e);
	})
}

letterSpacingTool();



// lesson 4 counter module

$(document).scroll(function () {
	triggerCounterUp();
	triggerCounterUpLesson4();
})
$(document).ready(function () {
	triggerCounterUp();
	triggerCounterUpLesson4();
})
$(document).resize(function () {
	triggerCounterUp();
	triggerCounterUpLesson4();
})


function triggerCounterUp() {
	$('[data-count]').each(function () {
		let $this = $(this)
		let objY = $this.offset().top,
			myscreenY = $(window).height(),
			st = $(window).scrollTop(),
			maxVal = $this.attr('data-count'),
			durationTo = 5000,
			run = false,
			cloneObj = {
				countNum: 0
			};
		if ( (objY + 100)  < (myscreenY + st) && objY > st && !run) {
			$(cloneObj).animate({
				countNum: maxVal
			}, {
				duration: durationTo,
				easing: 'linear',
				step: function () {
					$this.text(Math.floor(this.countNum))
				},
				complete: function () {
					$this.text(maxVal.toString());
					run = true;
				},
			});
		}else {
			cloneObj.countNum = 0;
			$this.text('0');
		}
	})
}

function triggerCounterUpLesson4(){
	$('#lesson-4 .counter-module-2 .outter-box .box .lesson-4-counter .number').each(function(i ,item){
		let $target = $(item);
		let targetY = $target.offset().top;
		let st = $(window).scrollTop();
		let screenY = $(window).height();
		let isDone = false;
		let maxVal = parseInt($target.attr('count'));
		let clone = {
			number: 0
		};
		// (targetY + 100)  < (screenY + st) && targetY > st && !isDone
		if((targetY > st) && (targetY < st+ screenY) && !isDone){
			clone.number= parseInt($target.text());
			$(clone).animate({
				number: maxVal
			},{
				duration: 3000,
				easing: 'linear',
				step: function(){
					$target.text(Math.floor(this.number).toString())

				},
				complete: function(){
					isDone = true;
					$target.text(maxVal.toString());
					this.number = 0;
				}
			})
		}else{
			isDone = true;
			clone.number = 0;
			$target.text('0');
			console.log($target.text())
			// console.log('helo')

		}
	});
}




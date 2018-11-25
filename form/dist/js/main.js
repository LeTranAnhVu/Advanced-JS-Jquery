'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];_e = function _e() {
			return '\\w+';
		};c = 1;
	};while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
function dev_tool() {
	var e = '<div class="toggle-tool"> <div class="btn btn-success" id="toggle-button">toggle layout</div> <div class="btn-warning" id="toggle-fluid-button">toggle fluid</div> <div class="toggle-grid active"> <div class="container-grid container"> <div class="row"> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> </div> </div> </div> </div>',
	    m = '.toggle-tool { position: relative; width: 100%; } .toggle-tool #toggle-button { position: fixed; bottom: 20vh; right: 20px; text-align: center; border-radius: 5px; cursor: pointer; z-index: 400; padding: 10px 10px; } .toggle-tool #toggle-fluid-button { position: fixed; bottom: 5vh; right: 20px; text-align: center; border-radius: 5px; cursor: pointer; z-index: 400; padding: 10px 10px; } .toggle-tool .toggle-grid { position: fixed; top: 0; left: 0; height: 100vh; width: 100%; z-index: 200; display: none; } .toggle-tool .toggle-grid.active { display: block; } .toggle-tool .toggle-grid .container-grid .row { height: 100vh; } .toggle-tool .toggle-grid .container-grid .row .col { height: 100vh; } .toggle-tool .toggle-grid .container-grid .row .col .item { height: 100vh; background: rgba(0, 0, 0, 0.5); }';
	$('head').append('<style>' + m + '</style>');
	$('body').append(e);

	// logic
	$('#toggle-button').on('click', function () {
		$('.container-grid').removeClass('container-fluid');
		$('.toggle-grid').toggleClass('active');
		$('.container-grid').toggleClass('container');
	});

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
	});

	$('.box-input input').on('blur', function () {
		$(this).parents('.box-input').removeClass('active');
		var inputTarget = $(this).parents('.box-input').find('label');
		var text = $(this).val();
		text ? inputTarget.addClass('active') : inputTarget.removeClass('active');
	});
}
boxInoutActiveAffect();

var currentStage = 0;

function processBarNextStep() {

	$('.process-bar #next-btn').on('click', function () {
		var stages = $('.process-bar .stages .stage');
		currentStage++;
		$(stages[currentStage]).addClass('active');
	});
}

function processBarBackStep() {
	$('.process-bar #back-btn').on('click', function () {
		var stages = $('.process-bar .stages .stage');
		if (currentStage > 0) {
			$(stages[currentStage]).removeClass('active');
			currentStage--;
		}
	});
}

function resetProcessBar() {
	$('.process-bar #reset-btn').on('click', function () {
		currentStage = 0;
		$('.process-bar .stages .stage').each(function (index, item) {
			index == 0 ? null : $(item).removeClass('active');
		});
	});
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

console.log(getUrlParameter("step"));

processBarNextStep();
processBarBackStep();
resetProcessBar();

// tool

function letterSpacingTool() {
	$('#letter-spacing-tool ').on('input change', function () {
		var value = $(this).val();
		$('.object-col .object .object-content').css({
			'letter-spacing': value.toString() + "px"
		});
		var e = 'letter-spacing: ' + value.toString() + 'px';
		$('.source-col .source-code').text(e);
	});
}

letterSpacingTool();

// lesson 3 counter module

$(document).scroll(function () {
	triggerCounterUp();
});
$(document).ready(function () {
	triggerCounterUp();
});
$(document).resize(function () {
	triggerCounterUp();
});

function triggerCounterUp() {
	$('[data-count]').each(function () {
		var objY = $(this).offset().top,
		    myscreenY = $(window).height(),
		    st = $(window).scrollTop(),
		    maxVal = $(this).attr('data-count'),
		    durationTo = 5000,
		    run = false;
		var that = this;
		if (objY < myscreenY + st - 100 || !run) {
			var $this = $(this);
			$({ countNum: $this.text() }).animate({
				countNum: maxVal
			}, {
				duration: durationTo,
				easing: 'linear',
				step: function step() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function complete() {
					$(this).text(this.countNum);
					run = true;
				}
			});
		} else {
			$this.text('0');
		}
	});
}
//# sourceMappingURL=main.js.map

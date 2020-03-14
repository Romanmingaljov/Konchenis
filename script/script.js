//change active links

onload = function (){
    for (let lnk = document.links, j = 0; j < lnk.length; j++)
    if (lnk [j].href == document.URL) lnk [j].style.cssText = 'background-color: #ffff; color: #000;';
}

//fancybox - switch class

var arr=['structure__link_andrey', 'structure__link_roman', 'structure__link_alexandr',
 	'exercise__link_1', 'exercise__link_2', 'exercise__link_3'];

$(document).ready(function() {
	jQuery.each(arr, function() {
		$("." + this).fancybox({
			prevEffect	: 'none',
			nextEffect	: 'none',
			helpers	: {
				title	: {
					type: 'outside'	
				},
				thumbs	: {
					width	: 50,
					height	: 50
				}
			}
		});
	});
});

//current date
function getDate(){
	let today = new Date();
	let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	let time = today.getHours() + ":" + today.getMinutes();
	let dateTime = date+' '+time;
	let writeDate = document.getElementById('item-datetime__p');
	writeDate.innerHTML = dateTime;
	console.log(writeDate + '' + writeDate.innerHTML);
}
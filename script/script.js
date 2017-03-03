var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab3 = document.getElementById("tab3");
var tab4 = document.getElementById("tab4");





function tab11(){
	if (tab1.style.display === "none"){
		tab1.style.display = "block";
		tab2.style.display = "none";
		tab3.style.display = "none";
		tab4.style.display = "none";
	}
	else{
		tab1.style.display = "none";
		tab2.style.display = "none";
		tab3.style.display = "none";
		tab4.style.display = "none";
	}
}

function tab22(){
	if (tab2.style.display === "none"){
		tab2.style.display = "block";
		tab1.style.display = "none";
		tab3.style.display = "none";
		tab4.style.display = "none";
	}
	else{
		tab1.style.display = "none";
		tab2.style.display = "none";
		tab3.style.display = "none";
		tab4.style.display = "none";
	}
}

function tab33(){
	if (tab3.style.display === "none"){
		tab3.style.display = "block";
		tab2.style.display = "none";
		tab1.style.display = "none";
		tab4.style.display = "none";
	}
	else{
		tab1.style.display = "none";
		tab2.style.display = "none";
		tab3.style.display = "none";
		tab4.style.display = "none";
	}
}

function tab44(){
	if (tab4.style.display === "none"){
		tab4.style.display = "block";
		tab2.style.display = "none";
		tab3.style.display = "none";
		tab1.style.display = "none";
	}
	else{
		tab1.style.display = "none";
		tab2.style.display = "none";
		tab3.style.display = "none";
		tab4.style.display = "none";
	}
}

////////////////// changement de background automatique //////////
var day = new Date(); 
var hour = day.getHours();
var imgHead = [
			
			'img/background3.jpg',
	'img/background.jpg'
		], i=1;
	function csaHead(){
// && hour>=24 && hour<6  // 
		if(i > (imgHead.length-1)){     
			$('#background').animate({'opacity':'0'},1000,function(){
				i=1;
				$('#background').css({'background-image':'url('+imgHead[1]+')'});
			})
			$('#background').animate({'opacity':'1'},1000);
		}else{
			$('#background').animate({'opacity':'0'},1000,function(){
				$('#background').css({'background-image':'url('+imgHead[i]+')'});
				i++;
			});
			$('#background').animate({'opacity':'1'},1000);
		}
		
	}
	csaHead();


	/////////////////////l`heur////////////

	function timer(){
				var day = new Date(); 
				var hour = day.getHours();
				var min = day.getMinutes(); 
				var secs = day.getSeconds();
				var greeting;

		
			if (hour>=5 && hour<12) {
				greeting = "Matin"; 
			}else if (hour>=12 && hour<18) {
				greeting = "Jour"; 
			}else if (hour>=18 && hour<24) {
				greeting = "Soir"; 
			}else {
				greeting = "Nuit";
			}
			var time = ("c`est le " + greeting + "<br>time " + hour + " : " +min+" : "+secs);
				document.getElementById('copy').innerHTML = time;
		}

					
					var r = setInterval("timer()",1000);

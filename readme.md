Идеи для разработки

1. Добавить изменение времени суток, возможно ли добавление дождя и снега относительно погоды на улице...
2. © copyright


<!-- weather widget start --><div id="m-booked-bl-simple-95082"> <a href="//www.booked.net/weather/paris-18145" class="booked-wzs-160-110" style="background-color:#137AE9;"> 
<div class="booked-wzs-160-data wrz-18"> 
<div class="booked-wzs-160-right"> 
<div class="booked-wzs-day-deck"> 
<div class="booked-wzs-day-val"> 
<div class="booked-wzs-day-number"><span class="plus">+</span>8</div> 
<div class="booked-wzs-day-dergee"> 
<div class="booked-wzs-day-dergee-val">&deg;</div> 
<div class="booked-wzs-day-dergee-name">C</div> 
</div> 
</div> 
<div class="booked-wzs-day"> 
<div class="booked-wzs-day-d"><span class="plus">+</span>11&deg;</div> 
<div class="booked-wzs-day-n"><span class="plus">+</span>7&deg;</div> </div> </div> 
<div class="booked-wzs-160-city">Paris</div> 
<div class="booked-wzs-160-date">Mercredi, 01</div> </div> </div> 
<div class="booked-wzs-center"> <span class="booked-wzs-bottom-l">Prévisions sur 7 jours</span> </div> </a> </div>

<script type="text/javascript"> 
var css_file=document.createElement("link"); 
css_file.setAttribute("rel","stylesheet"); 
css_file.setAttribute("type","text/css"); 
css_file.setAttribute("href",'//s.bookcdn.com/css/w/booked-wzs-widget-160.css?v=0.0.1'); 
document.getElementsByTagName("head")[0].appendChild(css_file); 
	function setWidgetData(data) { if(typeof(data) != 'undefined' && data.results.length > 0) { for(var i = 0; i < data.results.length; ++i) { 
			var objMainBlock = document.getElementById('m-booked-bl-simple-95082'); 
			if(objMainBlock !== null) { 
				var copyBlock = document.getElementById('m-bookew-weather-copy-'+data.results[i].widget_type); 
				objMainBlock.innerHTML = data.results[i].html_code; 
				if(copyBlock !== null) objMainBlock.appendChild(copyBlock); } } } 
				else { alert('data=undefined||data.results is empty'); } } 

</script>
 <script type="text/javascript" charset="UTF-8" src="https://widgets.booked.net/weather/info?action=get_weather_info&ver=4&cityID=18145&type=1&scode=124&ltid=3457&domid=w209&cmetric=1&wlangID=3&color=137AE9&wwidth=250&header_color=ffffff&text_color=333333&link_color=08488D&border_form=1&footer_color=ffffff&footer_text_color=333333&transparent=0"></script><!-- weather widget end -->
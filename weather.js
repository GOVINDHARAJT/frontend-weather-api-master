//Complete the Weather API Backend part using openweathermap api
$("#btn").click(function(){	
    var city=$("#txt1").val();	
    $.ajax({	
        url:"http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric"+"&APPID=ac1fbc752b1455b1735b8b8c11d55d87",	
        type:"GET",	
        datatype:"json",	
        success:function(data){	
            document.getElementById("showPlace").innerHTML = city.charAt(0).toUpperCase() + city.slice(1)+", "+data.sys.country;	
            var current = new Date();     	
            var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            var day = days[current.getDay()];	
            var hh = current.getHours();        
            var mm = current.getMinutes();      	
            var ss = current.getSeconds();
            document.getElementById("showDayAndTime").innerHTML = day + ", " + hh + ":" + mm + ":" + ss;
            document.getElementById("showWeather").innerHTML=data.weather[0].main + ", "+data.weather[0].description;
            var icon="http://openweathermap.org/img/w/" +data.weather[0].icon + ".png";
            document.getElementById("showTemperature").innerHTML=data.main.temp+" &deg;C";	
            document.getElementById("icon").src = icon;	
        }	
    });	
});
         	
    


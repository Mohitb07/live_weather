(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),o=t.n(r),l=t(1),i=(t(9),"b267e1938cf3553846b90e9d9090a5ed"),s="https://api.openweathermap.org/data/2.5/",m=function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),m=Object(l.a)(o,2),u=m[0],d=m[1],h=Object(n.useState)([]),p=Object(l.a)(h,2),y=p[0],b=p[1],f=Object(n.useState)([]),w=Object(l.a)(f,2),E=w[0],v=w[1],g=Object(n.useState)([]),j=Object(l.a)(g,2),S=j[0],M=j[1];return c.a.createElement("div",{className:"undefined"!=typeof u.main?"Haze"===u.weather[0].main?"haze":"Clouds"===u.weather[0].main?"clouds":"Rain"===u.weather[0].main?"rain":"Thunderstorm"===u.weather[0].main?"thunderstorm":"Clear"===u.weather[0].main?"clear":"Mist"===u.weather[0].main?"mist":"Smoke"===u.weather[0].main?"smoke":"":"app"},c.a.createElement("main",null,c.a.createElement("div",{className:"text"},c.a.createElement("p",null,"Live Weather")),c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search",onChange:function(e){return r(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(s,"weather?q=").concat(t,"&units=metric&APPID=").concat(i)).then((function(e){return e.json()})).then((function(e){d(e),r(""),console.log(e),404!=e.cod&&fetch("".concat(s,"onecall?lat=").concat(e.coord.lat,"&lon=").concat(e.coord.lon,"&\n                    exclude=daily,&appid=").concat(i)).then((function(e){return e.json()})).then((function(e){console.log(e),b(e.daily[1].temp.max-273.15),v(e.daily[1].temp.min-273.15),console.log(e.daily[1].temp.max-273.15),console.log(e.daily[1].weather[0].description),M(e.daily[1].weather[0].description)}))}))}})),"undefined"!=typeof u.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},u.name,", ",u.sys.country),c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(u.main.temp),"\xb0C"),c.a.createElement("div",{className:"weather"},c.a.createElement("div",{id:"feels-like"}," Feels like \xa0",Math.round(u.main.feels_like),"\xb0"),u.weather[0].main,c.a.createElement("h6",null,"Tomorrow"),c.a.createElement("p",null,S),c.a.createElement("p",null,"Max ",Math.floor(y),"\xb0  / Min ",Math.floor(E),"\xb0")))):""))};o.a.render(c.a.createElement(m,null),document.querySelector("#root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.bd0591a9.chunk.js.map
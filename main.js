(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var secondHand = document.querySelector('.sec');
var minuteHand = document.querySelector('.min');
var hourHand = document.querySelector('.hour');

function setDate() {
  var now = new Date();

  var seconds = now.getSeconds();
  var secondsDeg = seconds / 60 * 360 + 90;
  secondHand.style.transform = 'rotate(' + secondsDeg + 'deg)';

  var minutes = now.getMinutes();
  var minutesDeg = minutes / 60 * 360 + 90;
  minuteHand.style.transform = 'rotate(' + minutesDeg + 'deg)';

  var hours = now.getHours();
  var hourDeg = hours / 60 * 360 + 90;
  hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
}

setInterval(setDate, 1000);
setDate();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixNQUF2QixDQUFuQjtBQUNBLElBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbkI7QUFDQSxJQUFNLFdBQVcsU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQWpCOztBQUVBLFNBQVMsT0FBVCxHQUFrQjtBQUNoQixNQUFNLE1BQU0sSUFBSSxJQUFKLEVBQVo7O0FBRUEsTUFBTSxVQUFVLElBQUksVUFBSixFQUFoQjtBQUNBLE1BQU0sYUFBZSxVQUFVLEVBQVgsR0FBaUIsR0FBbEIsR0FBeUIsRUFBNUM7QUFDQSxhQUFXLEtBQVgsQ0FBaUIsU0FBakIsZUFBdUMsVUFBdkM7O0FBRUEsTUFBTSxVQUFVLElBQUksVUFBSixFQUFoQjtBQUNBLE1BQU0sYUFBZSxVQUFVLEVBQVgsR0FBaUIsR0FBbEIsR0FBeUIsRUFBNUM7QUFDQSxhQUFXLEtBQVgsQ0FBaUIsU0FBakIsZUFBdUMsVUFBdkM7O0FBRUEsTUFBTSxRQUFRLElBQUksUUFBSixFQUFkO0FBQ0EsTUFBTSxVQUFZLFFBQVEsRUFBVCxHQUFlLEdBQWhCLEdBQXVCLEVBQXZDO0FBQ0EsV0FBUyxLQUFULENBQWUsU0FBZixlQUFxQyxPQUFyQztBQUNEOztBQUVELFlBQWEsT0FBYixFQUFzQixJQUF0QjtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IHNlY29uZEhhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjJyk7XG5jb25zdCBtaW51dGVIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbicpO1xuY29uc3QgaG91ckhhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cicpO1xuXG5mdW5jdGlvbiBzZXREYXRlKCl7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3Qgc2Vjb25kcyA9IG5vdy5nZXRTZWNvbmRzKCk7XG4gIGNvbnN0IHNlY29uZHNEZWcgPSAoKHNlY29uZHMgLyA2MCkgKiAzNjApICsgOTA7XG4gIHNlY29uZEhhbmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3NlY29uZHNEZWd9ZGVnKWBcblxuICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKTtcbiAgY29uc3QgbWludXRlc0RlZyA9ICgobWludXRlcyAvIDYwKSAqIDM2MCkgKyA5MDtcbiAgbWludXRlSGFuZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7bWludXRlc0RlZ31kZWcpYDtcblxuICBjb25zdCBob3VycyA9IG5vdy5nZXRIb3VycygpO1xuICBjb25zdCBob3VyRGVnID0gKChob3VycyAvIDYwKSAqIDM2MCkgKyA5MDtcbiAgaG91ckhhbmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke2hvdXJEZWd9ZGVnKWA7XG59XG5cbnNldEludGVydmFsKCBzZXREYXRlLCAxMDAwICk7XG5zZXREYXRlKCk7XG4iXX0=

/*
два велосеепедиста одновременно выехали на встречу друг-другу из двух прсёлков и встретились через 3 часа. Первый ехал со скоростью 12км/ч, а второй 14км/ч. На каком расстоянии находятся поселки?
*/  
 /* Алгоритм 
 1. найти расстояние, кот проехал первый велосепедист, умножив скорость на время.
 2. Найти расстояние, кот проехад второй велосепедист.
 3. Сложить полученное расстояние  */

var calculateDistance = function(time, speedOfFirstCyclist, speedOfSecondCyclist) {
  var S1=time*speedOfFirstCyclist;
  var S2=time*speedOfSecondCyclist;
  var totalDistance=S1+S2;
  return totalDistance;
  }; 

var firstDistance = calculateDistance(3, 12, 14);
var secondDistance = calculateDistance(6, 2, 1)
 console.log(firstDistance, secondDistance);

 var buySomeBread = function(eggs) {
  return eggs ? 10 : 1;
  };
 console.log(buySomeBread(false));
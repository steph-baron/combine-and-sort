var array1 = ["cat", "dog", "fish", "zebra"];
var array2 = [ "lion", "aardvark", "gorilla" ];

function mergeSortedArrs(a,b){
  for (var i = 0; i < b.length; i++){
      a.push(b[i]);
      var animalArr = a;
  }
  return animalArr.sort();
}

mergeSortedArrs(array1, array2);

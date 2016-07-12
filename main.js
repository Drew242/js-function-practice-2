firstReverse = function(str) {
  console.log(str.split('').reverse().join(''));
}
firstReverse('string');
swapCase = function(str) {
  var swap = str.split('')
  for (i=0; i<swap.length; i++) {
    if (swap[i] == swap[i].toLowerCase()) {
      swap[i] = swap[i].toUpperCase();
    } else {
      swap[i] = swap[i].toLowerCase();
    }
  }
  console.log(swap.join(''));
}
swapCase('Hello World');
function letterCount(str) {
    str = str.toLowerCase();
    var arr = str.split(" ");
    var count = 0;
    var word = "-1";
    for (var i = 0; i < arr.length; i++) {
        for (var a = 0; a < arr[i].length; a++) {
            var countNew = 0;
            for (var b = a + 1; b < arr[i].length; b++) {
                if (arr[i][a] === arr[i][b])
                    countNew += 1;
            }
            if (countNew > count) {
                count = countNew;
                word = arr[i];
            }
        }
    }
    console.log(word);
}
letterCount('today is the greatest day ever');
letterCount('today blue red crazy');
letterCount('today there is a boooom');

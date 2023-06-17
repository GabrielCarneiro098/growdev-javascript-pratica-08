var count = 0;
var num = 1;
const numerosPerfeitos = [];

while (count < 4) {
  var soma = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      soma += i;
    }
  }
  
  if (soma === num) {
    numerosPerfeitos.push(num);
    count++;
  }
  
  num++;
}

console.log(numerosPerfeitos);
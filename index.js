//1
function countToTen(){
  for(let i = 1; i <= 10; i++){
      console.log(i)
  }
}
//countToTen()
//2
function countFromOne(number){
  for(let i = 1; i <= number; i++){
      console.log(i)
  }
}
//countFromOne(29)
//3
function countEveryEven(number){
    for(let i = 1; i <= number; i++){
      if (i % 2 === 0){
          console.log(i)
      }
  }
  }
countEveryEven(23)

//4
function countEveryOdd(number){
   for(let i = 1; i <= number; i++){
      if (i % 2 != 0){
          console.log(i)
      }
  }
}
//countEveryOdd(23)
//5 
function countEvens(numbers){
    const evens = numbers.filter(x => x % 2 === 0)
    return evens
    
  
}
console.log(countEvens([0, 10, 23, 41, 22, 76]))
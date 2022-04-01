function cars(num){

  if (num == 10){
    return "first parking lane";
  }
  else if (num == 20){
    return "second parking lane";
  }
  else if (num ==30){
    return "third parking lane";
  }
  else{
    return "no cars in the lane";
  }
}

console.log(cars(10));
console.log(cars(20));
console.log(cars(30));
console.log(cars(7));

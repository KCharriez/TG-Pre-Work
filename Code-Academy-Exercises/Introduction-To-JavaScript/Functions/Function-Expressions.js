const plantNeedsWater = function(day){
  if(day === 'Wednesday'){
    return true;
  }else{
    return false;
  }
};

console.log(plantNeedsWater('Tuesday'));
//How to both declar a variable and set that variables' value to be whatever the functions return may be. This whole declaration being known as the function expression.
//However, these functions within the function expression only exist within that declaration and cannot be called up to use elsewhere.

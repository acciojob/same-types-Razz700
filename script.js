function isSameType(value1, value2) {
  //your js code here
	let x=typeof(value1);
      let y=typeof(value2);
      if(x==y){
return true;
      }
      else{
        return false;
      }
  }
	


// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

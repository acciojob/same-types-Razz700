function isSameType(value1, value2) {
  //your js code here
	 let x=value1%1;
  let y=value2%1;
  let z=value1+"a";
  let p=value2+"b";
  console.log(z);
    console.log(y);
  if(x==y){
 return true;
      }
 else if(z%1!=0 && p%1!=0 && x!=0 && y!=0){
   return true;
      }
      else {return false;}
  }
	
 

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

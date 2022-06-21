1.//Find the number of digits
//Take a number from the user and print the count of digits in that number.
const Find_Digits = (N) => 
{
	 
  let count=0;
  while(N!==0){
    count=count+1;
    N=parseInt(N/10)
    
  }
  return count
	 
};
2.Find the Fives.
Among all the digits from 0−9, PrepBuddy likes number 5.
He has a number and wants you to find out the number of times 5 occurred in the given number.
const Find_Five = (N) => 
{
	 let count=0
	 let digit
	 while(N!=0){
	   digit=N%10;
	   N=parseInt(N/10)
	   if(digit==5){
	     count=count+1;
	     
	   }
	 }
	 return count
};

que3::  Find Sum
// You are given an integer N,and your task is to find the sum of all
//  the even integers starting from 1upto N(N inclusive).


const findSum = (n) => {
    
    let sum=0
    let item=2
    while(item<=n){
      sum=sum+item;
      item+=2;
    }
      return sum;
      
      
      
  };
  
  
// que4::  Find the sum of the digits of a given number.
//   Write a program that takes a number from the user and get the sum of the
//  digits present in the number.


const Number_Sum = (N) => 
{
	
let sum=0
while(N!==0){
  let digit=N%10
  N=parseInt(N/10)
  sum=sum+digit;
}
	return sum;
	
};

// Print the Odds.
//que5:: Write a program which takes  a number from user and print all odd 
// numbers in between 2 and N, but print 2 first.


const Print_Odd = (N) => 
{
  console.log('2')
	let num=3;
 while(num<=N){
  console.log(num)
    num+=2
 }	 
};


// Print the Pattern.
//que6:: Write a program which ask user for no of lines and print a pattern 
// using an asterik .


const Print_pattern = (N) => 
{
let i,j;
for(i=0;i<N;i++){
  let result=''
  for(j=0;j<=i;j++){
    result=result+'*'
  }
  console.log(result)
}
};


// Check whether a Number is a prime or not.
//que7:: Write a program which takes  a number from user and check whether number is prime
//  number or not a prime number.

const Prime_Check = (N) => 
{
	 for (let i=2; i<N; i++)
{	 
	if (N%i!== 0) {
	  return "YES";
}else{
	 return "NO";

}
}	
};


// Print Numbers
// que8:: You are given an integer N, and your task is to print all the integers starting from 
// 1 till N(N inclusive).



const printNumbers = (n) => {
    var res='';
    for(let i=1;i<=n;i++){
      res=res+i+' ';
    }
    console.log(res);
};


 
//   Print the Table
// que9::  Write a program which takes a number from user and print the table.
 
const Print_Table = (N) => 
{
  let res='';
	for(let i=1;i<=10;i++){
	  res=N+' '+'*'+' '+i+' '+ '=' +' '+ N*i;
	  console.log(res);
	}
	
};
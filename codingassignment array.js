Write a program that takes an array as input from the user and find out the product of the elements.
const Find_Prod = (array, N) => 
{
 var value =1;
 for(var i=0; i<N; i++){
  value*=array[i];
 }
     return value;

};

2.Write a program which takes an array as input from the user and find out the sum of the array elements.
{
    var value = 0;
    for(var i=0; i<N;i++){
      value=value+array[i];
  
    }
    return value;
  };

  3.You are given an array Acontaining  Ninteger elements and an integer K, and your task is to return the count of occurrences of K
   in array A
   const findCount = (N, K, Arr) => 
   {
       let count=0;
   for(let i=0;i<N;i++){
     if(Arr[i]==K){
       count=count+1;
     }
   }
   return count;
   };
   4.You are given an array A containing N integer elements, and your task is to return an array B ( having a size equal to 2),where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A.
   Note: You have to complete findEvenOdd function. No need to take any input.
   const findEvenOdd = (N, Arr) => 
{
    let oddCount = 0;
        evenCount = 0;
        let arrBB = [];
        for(let p of Arr){
          if(p%2===0){
            evenCount+=p;
          }
          else{
            oddCount+=p;
          }
        }
        arrBB[0] = evenCount;
        arrBB[1] = oddCount;
        return arrBB
};
5.
Write a program which takes an array as input from the user and a number. Check whether the number is present or not.
Note: You have to complete Find_Num. No need to take any input.
const Find_Num = (array,N,M) => 
{
  let count=0;
      for(let p of array){
        if(p===M){
          count+=1
        }
      }
      if(count>0){
        return "YES";
      }
      else{
        return "NO"
      }
};
6. You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 18 (18 included).
Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge function. No need to take any input.
const highAge = (N, Arr) => 
{
    let ans=[];
            for (let i of Arr){
              if(i>=18){
                ans.push(i)
              }
            }
            return ans;
};
7. You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.
const Inc_Arr = (array,N) => 
{
  
let arr1 = "";
            for(let i of array){
              arr1+=(i+1).toString()+" "
            }
            console.log(arr1)
};
8.: You are given an array A containing the maths marks of students in your class, and your task is to determine if all the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 32. If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes).
Note: You have to complete isAllPass function. No need to take any input.
const isAllPass = (N, Arr) => 
{
   let count=0;
  for(let i=0;i<N;i++){
    if(Arr[i]>=32){
      count=count+1;
    }
    else{
      break;
    }
  }
  if(count===N){
    return "YES";
  }
  return "NO";
};

9.Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe.Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Prepbuddy wants you to find M.
Note: As there are many shades of a color so consider integers as a color name. i.e, color of shirt is 0,1,2, … , N.


function Unique_Shirts (arr,N) {

    let unique=arr.filter((value)=>arr.indexOf(value)===arr.lastIndexOf(value));
       return (unique.length);
   }
   
   10.Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.
   NOTE: The problem statement is simple- given N elements, find the minimum and maximum numbers among those elements.
   function arrayMin(arr) {
    let min = (Math.min(...arr));
        return min;
  
  }
  
  function arrayMax(arr) {
   
  let max = (Math.max(...arr));
        return max;
  }
  
11.Yatharth and Anamika are playing a game. Anamika loves Yatharth very much and she wants to share a chocolate bar with him in which each of the squares consists of an integer represented by A[i]. She decides to share a contiguous segment of the chocolate bar selected such that the length of the segment matches Yatharth's birth month M and the sum of the integers on the squares is equal to his birthday D.
NOTE: You must determine how many ways she can divide the chocolate.
 
function Birthday_Game(arr,D ,M) {
    let finalCount=0;
        for(let i=0;i<(arr.toString().length-M);i++){
          let count=0;
          for(let j=i;j<(i+M);j++){
            count+=arr[j];
          }
          if(count===D){
            finalCount+=1
          }
        }
        return finalCount;
   
   }
   
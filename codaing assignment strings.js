1.Count Characters
const countCharacters = (S) => 
{
    let arr=[];
    let countA=0;
    let countD=0;
    for(let i=0;i<S.length;i++){
      if (S[i]==="A"){
        countA+=1;
      }else if(S[i]==="D"){
        countD+=1;
      }
    }
    arr.push(countA);
    arr.push(countD);
    return arr;
};
2.Count the Heads
var Count_Occ = (s) => 
{
  let count = 1;
  let str = "";
  let result = "";
  for(let i=0;i<s.length;i++){
    for(let j=i+1;j<s.length;j++){
      if(s[i]===s[j]){
        count++
      }
    }
    if(count>1){
      str=s[i];
      result = result+" "+s[i]+count;
      s=s.replace(str," ");
      s=s.split(str).join("");
      
    }
    count=1
  }
  return result.split(" ").sort().join("")
};
 

3.Count the Vowels
var Count_Vowels= (S) => 
{
      return count_Vowels = S.match(/[aeiou]/gi).length;
};
 

4.Concatenate the Strings
var Concatenate_Strings = (S1, S2) => 
{
      return (S1.concat(S2));
};

5.Find Length
const findLength = (S) => 
{
    return S.length;
 
};

6.Find the Winner
{
    let countA = S.match(/[a]/gi).length;
        let countD = S.match(/[d]/gi).length;
        
        if (countA>countD){
          return "Aditya";
        }else if(countD>countA){
          return "Danish";
        }else if(countD===countA){
          return "Draw";
        }
  }

 7.Join Strings
 
 const joinStrings = (S, P) => 
{
   return S.concat(P) 
};

8.Plaindrome Check
var Palin_Check = (str) =>
{
	  return (str.split("").reverse().join(""))===str?"True":"False";

}

9.Reverse the String
var Reverse_String = (str) => 
{
      return str.split('').reverse().join('');
};
10.Match the Strings
var String_Match = (S1,S2) => 
{
   return ((S1===S2?"YES":"NO"));
};

11.String Replace
var Replace = (S, pattern , text) => 
{
    return S.replace (pattern , text);
};

12.Split the String

var Split_the_string = (S) => 
{
  return S.split (" ");
        
};

13.Count the Vowels and Consonants
ar Count_Vowels= (S) => 
{
     const vowels = S.match(/[aeiou]/gi); 
      return vowels.length;
};
var Count_Consonants= (S) => 
{
        const consonants = S.match(/[^aeiou]/gi);
      return consonants.length;
};
 

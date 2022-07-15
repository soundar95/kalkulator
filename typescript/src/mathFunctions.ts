function sum(...p:number[]):number{
    let sum:number =0; 
    for(let i=0;i<arguments.length;i++){
       sum += arguments[i];
    }
     return sum;
  }
  console.log(sum(1,2));
  console.log(sum(1,5,5,6));

//minimum value
const values:number[] = [2, 3, 1,-1];
console.log('min value'+ " " +Math.min(...values));

function min(...p:number[]):number{
   let min:number =arguments[0]; 

   for(let i=1;i<arguments.length;i++){
      if(min>arguments[i])
      min=arguments[i]
    
   }
    return min;
 }
 console.log(`the minimum value is :${min(100,50,20,200)}`);

//maximum value
const values1:number[] = [50,10,-1,100];
console.log('min value'+" "+ Math.max(...values1));

function max(...p:number[]):number{
   let max:number =arguments[0]; 

   for(let i=1;i<arguments.length;i++){
      if(max<arguments[i])
      max=arguments[i]
    
   }
    return max;
 }
 console.log(`the maximum value is :${max(100,50,20,200)}`);

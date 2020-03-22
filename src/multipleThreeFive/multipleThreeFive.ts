let displayMessage: string;
displayMessage ="hello"; 
console.log( displayMessage)

export default function totalSumDividedByNumbers(from:number, to:number, num1:number, num2:number):number{
    let finalNumberSum: number;
    finalNumberSum= 0; 

    for(let i = from; i<to; i++){
        if(i%num1==0){
           finalNumberSum+=i; 
        }else if(i%num2==0){
            finalNumberSum+=i
        }
    }
    return finalNumberSum; 
}

console.log(totalSumDividedByNumbers(0,1000,3,5))


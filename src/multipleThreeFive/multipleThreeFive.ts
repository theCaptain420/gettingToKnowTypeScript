let displayMessage: string;
displayMessage ="hello"; 
console.log( displayMessage)

export default function totalSumDividedByNumbers(from:number, to:number, num1:number, num2:number):number{
    let finalNumber: number;
    finalNumber= 0; 
    
    for(let i = num1; i<num2; i++){
        if(i%num1==0){
           finalNumber+=i; 
        }
    }
    return 10; 
}


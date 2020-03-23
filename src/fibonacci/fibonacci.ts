//https://projecteuler.net/problem=2

export default function fibonnaciLastNumber(numberOf :number):number{
    let finalNumber: number = 0;
    let seqOne: number = 0;
    let seqTwo: number = 1;

    for(let i = 0; i<numberOf; i++){
        finalNumber= seqOne+seqTwo;

        seqOne= seqTwo;
        seqTwo= finalNumber;
    }

    return finalNumber 
}

console.log(fibonnaciLastNumber(3))
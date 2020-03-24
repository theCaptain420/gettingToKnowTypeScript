
export default function smallestMultipleNumber(numFrom: number, numTo: number): number {
    let i :number = numFrom;
 
    while (i %  2 != 0 || i %  3 != 0 || i %  4 != 0 || i %  5 != 0 ||
             i %  6 != 0 || i %  7 != 0 || i %  8 != 0 || i %  9 != 0 ||
             i % 10 != 0 ){
        i++;
    }


    return i;
}
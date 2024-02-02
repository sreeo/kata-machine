export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpAmount = Math.floor(Math.sqrt(breaks.length));
    
    let val = breaks[jumpAmount];

    do {
        val = breaks[jumpAmount];
        if (val == true) {
            console.log(jumpAmount)
            let prevValue = false;
            let currentValue = false;
            for (let i = jumpAmount - jumpAmount; i < jumpAmount; i++) {
                currentValue = breaks[i];
                if (prevValue != currentValue) {
                    return i;
                }
                prevValue = currentValue;
            }
        }

        jumpAmount += jumpAmount
    } while (val == false)

    return -1;
}
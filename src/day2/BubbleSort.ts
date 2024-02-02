export default function bubble_sort(arr: number[]): void {
    let arr_length = arr.length;
    console.log(arr)
    while (arr_length != 0) {
        
        for (let i = 0; i < arr_length; i++) {

            if (i < arr_length - 1) {

                if (arr[i] > arr[i+1]) {
                    const swap = arr[i+1]
                    arr[i+1] = arr[i]
                    arr[i] = swap
                }
            }
        }

        arr_length = arr_length - 1
    }

    console.log(arr)
}
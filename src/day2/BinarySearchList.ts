export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0
    let high = haystack.length;
    let mid_point = Math.floor((low + high)/2)
    let mid_value = haystack[mid_point]

    if (low == high) {
        return false
    }

    if (mid_value == needle) {
        return true
    } else if (mid_value > needle) {
        return bs_list(haystack.slice(0, mid_point), needle)
    } else if (mid_value < needle) {
        return bs_list(haystack.slice(mid_point + 1), needle)
    }

    return false
}
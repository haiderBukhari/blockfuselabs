var findMedianSortedArrays = function(nums1, nums2) {
    let arrayMerged = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            arrayMerged.push(nums1[i++]);
        } else {
            arrayMerged.push(nums2[j++]);
        }
    }

    while (i < nums1.length) arrayMerged.push(nums1[i++]);
    while (j < nums2.length) arrayMerged.push(nums2[j++]);

    let mid = Math.floor(arrayMerged.length / 2); // find out the mid index
    if (arrayMerged.length % 2 === 0) {
        return (arrayMerged[mid-1] + arrayMerged[mid]) / 2;  //In Case if it is even sum both an divide both by 2
    } else {
        return arrayMerged[mid]; // if odd return the midd one
    }
};


//1st Example

console.log(findMedianSortedArrays([1,2], [3,4]))
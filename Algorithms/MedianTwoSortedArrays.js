const findMedianSortedArrays = function(nums1, nums2) {
  let combinedLength = nums1.length + nums2.length;
  let nums1Idx = 0;
  let nums2Idx = 0;
  let currentNum;

  for (let i = 0; i < combinedLength; i++) {
    let num1 = nums1[nums1Idx];
    let num2 = nums2[nums2Idx];

    if (nums1Idx === nums1.length || num1 > num2) {
      currentNum = num2;
      nums2Idx++;
    } else {
      currentNum = num1;
      nums1Idx++;
    }



    console.log(currentNum)

  }

};


findMedianSortedArrays(nums1 = [1,2,5, 7,12], nums2 = [3,4, 10])




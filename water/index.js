var maxArea = function(height) {
  //暴力法
  // let max = 0;
  // for(let i = 0; i < height.length; i++){
  //     for(let j = i + 1; j < height.length; j++){
  //         let sum = (j - i) * Math.min(height[i], height[j]);
  //         if(sum > max) max = sum;
  //     }
  // }
  // return max;

  let left = 0;//左下标
  let right = height.length - 1;//右下标
  let max = 0;//最大装水量
  while(left < right){
      let now = (right - left) * Math.min(height[right], height[left]);
      max = now > max ? now : max;
      if(height[left] > height[right]){
          right--;
      }else{
          left++;
      }
  }
  return max;
};

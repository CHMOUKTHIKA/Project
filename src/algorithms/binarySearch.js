import { sortBy } from "lodash";

let values = [];
let key=2;
export default function binarySearch(rects2){
    let rects = rects2.slice();
    
    values = [];
    let sz = rects2.length;
    rects=rects.sort();

   // console.log( "fdsfsd",sz );
    sz = sz-1;
    values[0] = recursiveFunction(rects,key,0,sz);
    return values;
}


let recursiveFunction = function (arr,key, start, end) {
      
    // Base Condition
    if (start > end) return false;
  
    // Find the middle index
    let mid=Math.floor((start + end)/2);
  
    // Compare mid with given key x
    if (arr[mid]===key) return true;
         
    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > key)
        return recursiveFunction(arr, key, start, mid-1);
    else
 
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr,key , mid+1, end);
}
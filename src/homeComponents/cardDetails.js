import graph from "./images/graph.jpg";
import primes from "./images/primes.png";
import sort from "./sort.jpeg";
import sorting from "./sorting.jpeg"
import binSearch from "./images/binaryTree.jpg";
import Recursion from './images/Recursion.jpg';
export function getDetails(){
   return [
       
       {
           id:3,
           title:"Sorting Algorithm",
           description:"Compare different sorting algorithms",
           route:"/sort",
           img:sort
       },
       {
           id:4,
           title:"Recursive Sorting",
           description:"Compare different recursive sorting algorithms",
           route:"/recursivesort",
           img:sorting
       },
       {
           id:7,
           title:"Prime Numbers",
           description:"Visualize how Seive is better than brute force",
           route:"/prime",
           img:primes
       },
       {
           id:9,
           title:"Binary Search",
           description:"Binary search is an efficient algorithm for finding an item from a sorted list of item",
           route:"/binarysearch",
           img:binSearch
       },
       {
        id:10,
        title:"Pathfinder",
        description:"Visualize graph algorithms like dijkstra, BFS, DFS",
        route:"/pathfinder",
        img:graph
    }

   ]
}
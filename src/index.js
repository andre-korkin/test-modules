// let {square, cube, avg, digitsSum} = require('./math')
import {square, cube, avg, digitsSum} from './math'
import _ from 'lodash'


// console.log(square(2), cube(3), avg([1,2,3,4,5]), digitsSum(123));
console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
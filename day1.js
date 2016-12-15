// 
// You're airdropped near Easter Bunny Headquarters in a city somewhere. "Near", unfortunately, is as close as you can get - the instructions on the Easter Bunny Recruiting Document the Elves intercepted start here, and nobody had time to work them out further.
//
// The Document indicates that you should start at the given coordinates (where you just landed) and face North. Then, follow the provided sequence: either turn left (L) or right (R) 90 degrees, then walk forward the given number of blocks, ending at a new intersection.
//
// There's no time to follow such ridiculous instructions on foot, though, so you take a moment and work out the destination. Given that you can only walk on the street grid of the city, how far is the shortest path to the destination?
//
// For example:
//
// Following R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.
// R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2 blocks away.
// R5, L5, R5, R3 leaves you 12 blocks away.
// How many blocks away is Easter Bunny HQ?


var input = 'L4, L1, R4, R1, R1, L3, R5, L5, L2, L3, R2, R1, L4, R5, R4, L2, R1, R3, L5, R1, L3, L2, R5, L4, L5, R1, R2, L1, R5, L3, R2, R2, L1, R5, R2, L1, L1, R2, L1, R1, L2, L2, R4, R3, R2, L3, L188, L3, R2, R54, R1, R1, L2, L4, L3, L2, R3, L1, L1, R3, R5, L1, R5, L1, L1, R2, R4, R4, L5, L4, L1, R2, R4, R5, L2, L3, R5, L5, R1, R5, L2, R4, L2, L1, R4, R3, R4, L4, R3, L4, R78, R2, L3, R188, R2, R3, L2, R2, R3, R1, R5, R1, L1, L1, R4, R2, R1, R5, L1, R4, L4, R2, R5, L2, L5, R4, L3, L2, R1, R1, L5, L4, R1, L5, L1, L5, L1, L4, L3, L5, R4, R5, R2, L5, R5, R5, R4, R2, L1, L2, R3, R5, R5, R5, L2, L1, R4, R3, R1, L4, L2, L3, R2, L3, L5, L2, L2, L1, L2, R5, L2, L2, L3, L1, R1, L4, R2, L4, R3, R5, R3, R4, R1, R5, L3, L5, L5, L3, L2, L1, R3, L4, R3, R2, L1, R3, R1, L2, R4, L3, L3, L3, L1, L2'
var input2 = 'L4, L1, R4'

var currentFacing = 'North'
var nowFacing;
//values below are right, left
var directions = [{North: ['East', 'West']},
                  {South: ['West', 'East']},
                  {East: ['South', 'North']},
                  {West: ['North', 'South']}, ]
var turningRorL;
var blocksNumWalk = 0;
var blocksNorth=0;
var blocksSouth =0;
var blocksEast=0;
var blocksWest =0;

function howManyBlocks (stringOfSteps){
 var arrayOfSteps = stringOfSteps.split(',');
arrayOfSteps.forEach(function(newStep){
  newStep = newStep.replace(/\s/g, '');
  turningRorL = newStep.slice(0,1)
blocksNumWalk = newStep.slice(1,newStep.length);
if (turningRorL == 'R'){
  nowFacing = directions.filter(function(dirKey){
    return Object.keys(dirKey)[0] == currentFacing
  })[0]
  currentFacing = nowFacing[Object.keys(nowFacing)[0]][0];
}
else{
  nowFacing = directions.filter(function(dirKey){
    return Object.keys(dirKey)[0] == currentFacing
  })[0]
  currentFacing = nowFacing[Object.keys(nowFacing)[0]][1];
}
if(currentFacing=='North'){blocksNorth+=parseInt(blocksNumWalk)}
  else if(currentFacing=='South'){blocksSouth+=parseInt(blocksNumWalk)}
  else if(currentFacing=='East'){blocksEast+=parseInt(blocksNumWalk)}
  else{blocksWest+=parseInt(blocksNumWalk)}
})
var cancelNorth = blocksSouth*(-1);
var cancelEast = blocksWest*(-1);
var totalNS = (blocksNorth+cancelNorth)
var totalEW =(blocksEast+cancelEast)
totalNS = (totalNS < 0) ? totalNS * -1 : totalNS;
totalEW = (totalEW < 0) ? totalEW * -1 : totalEW;
return totalNS+ totalEW
}

howManyBlocks(input)

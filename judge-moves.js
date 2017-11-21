/**
 * @param {string} moves
 * @return {boolean}
 */

/**
 * Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if
 * this robot makes a circle, which means it moves back to the original place. The move sequence is
 * represented by a string. And each move is represent by a character. The valid robot moves are
 * R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether
 * the robot makes a circle.
 */


var judgeCircle = function(moves) {
    //Possible moves: UD, LR, UPLR, UULLDDRR"
    //There needs to be an even number of U to D and L to R

    var upCount = 0
    var downCount = 0
    var leftCount = 0
    var rightCount = 0

    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === 'U') {
            upCount += 1
        } else if (moves[i] === 'D') {
            downCount += 1
        } else if (moves[i] === 'L') {
            leftCount += 1
        } else if (moves[i] === 'R') {
            rightCount += 1
        }
    }

    if (upCount !== downCount || leftCount !== rightCount) {
        return false
    }

    return true
};

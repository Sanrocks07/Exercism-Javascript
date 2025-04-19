/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  const highScoreBoard = {};

  highScoreBoard["The Best Ever"] = 1000000;

  return highScoreBoard;
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player]

  return scoreBoard;
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {

  // Retrieve age
let currPoints = scoreBoard[player];

// Add 5 to it
let updatedPoints = currPoints + points;

// Update the JSON object
scoreBoard[player] = updatedPoints;
  
  //scoreBoard[player] = scoreBoard[player].value + points

  return scoreBoard
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  for(let key in scoreBoard){
    scoreBoard[key] = scoreBoard[key] + 100;
  }

  return scoreBoard;
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
export function normalizeScore(params) {
    let ans = params.score;
 return params.normalizeFunction(ans);

  // return params['normalizeFunction(params['score'])']
  
}

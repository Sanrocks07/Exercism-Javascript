// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let count = 0;
  for(let i = 0; i < birdsPerDay.length ; i++)
    {
      count = count + birdsPerDay[i];
    }
  return count;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let count = (week-1) * 7;
  let till = week*7;
  let ans = 0;
  for(let i = count; i < till ; i++)
    {
      ans = ans + birdsPerDay[i];
    }
  return ans;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  let count = 0;
  for(let i = 0; i < birdsPerDay.length ; i++)
    {
      count = count + birdsPerDay[i];
      if(i%2 ==0){
        birdsPerDay[i] = birdsPerDay[i] + 1;
      }
    }
  return birdsPerDay;
}

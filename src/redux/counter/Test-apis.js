/**
 * Returns a promise that either resolves or rejects after a specified delay based on the provided method.
 *
 * @param {Object} params - The parameters for the function.
 * @param {boolean} params.method - If true, the promise will resolve; if false, the promise will reject.
 * @param {number} params.time - The delay in milliseconds before the promise resolves or rejects.
 * @returns {Promise} - A promise that either resolves with the string "success" or rejects with the string "error" after the specified delay.
 */
export function TimeConsumerDelay({ method, time }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (method) {
        res("success");
      } else {
        rej("error");
      }
    }, time);
  });
}
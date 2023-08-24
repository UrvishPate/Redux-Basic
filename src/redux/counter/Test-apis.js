export function TimeConsumerDelay({ method, time }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      method ? res("success") : rej("error");
    }, time);
  });
}
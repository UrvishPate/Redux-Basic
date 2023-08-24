export function TimeConsumerDelay({ method, time }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      method ? resolve("success") : reject("error");
    }, time);
  });
}
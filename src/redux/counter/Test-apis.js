import fs from 'fs';
let logStream = fs.createWriteStream("./debug.log", { flags: 'a' });

function logToFile(message) {
    console.log(message);
    logStream.write(message + "\n");
}

export function TimeConsumerDelay({ method, time }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        if (method) {
          logToFile("Success");
          res("success");
        } else {
          throw new Error("Method not provided");
        }
      } catch (error) {
        logToFile('TimeConsumerDelay Error: ' + error)
        rej("error");
      }
    }, time);
  });
}
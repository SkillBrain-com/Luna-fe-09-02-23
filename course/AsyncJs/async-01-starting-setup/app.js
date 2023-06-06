const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (successData) => {
        resolve(successData);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

// async await

async function trackUserHandler() {
  try {
    const posData = await getPosition(); 
    const timerData = await setTimer(2000); 
    console.log(posData, timerData);
  } catch (error) {
    console.log(error);
  }

  // let positionData;
  // getPosition()
  //   .then(
  //     (posData) => {
  //       positionData = posData;
  //       // setTimer(2000).then((data) => {
  //       //   console.log(data, posData);
  //       // });
  //       return setTimer(2000);
  //     }
  //     // (error) => {
  //     //   console.log(error);
  //     // }
  //   )
  //   .then((data) => {
  //     console.log(data, positionData);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  setTimer(1000).then(() => {
    console.log("Timer done!");
  });
  console.log("Getting postion.....");
}

button.addEventListener("click", trackUserHandler);


// Special methods for Promise
// Promise.race([getPosition(), setTimer(1000)]).then(data => {
//   console.log(data);
// }); // will return value of firslty executed promise

// Promise.all([getPosition(), setTimer(1000)]).then(data => {
//   console.log(data);
// }); // it`s returned a array a with value of promise. But if one failed it`s not returned nothing

// Promise.allSettled([getPosition(), setTimer(1000)]).then(data => {
//   console.log(data);
// }); // it`s returned a array with objects with status and value of promise.
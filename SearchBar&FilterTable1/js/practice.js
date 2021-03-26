let data;

const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
  });
};

async function start() {
  await promiseGet("json/AnimalDiseases.json").then((res) => (data = res));
  console.log(data);
  console.log(data[0]);
}

start();

// Basic Promise (Simulating a Delayed API Call)
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // Change to false to test rejection
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data.");
      }
    }, 2000);
  });
};

fetchData()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));






// Promise with async/await/
const downloadFile = (file) => {
  return new Promise((resolve, reject) => {
    console.log(`Starting download: ${file}`);
    setTimeout(() => {
      let success = Math.random() > 0.3; // 70% chance of success
      if (success) {
        resolve(`Download complete: ${file}`);
      } else {
        reject(`Failed to download: ${file}`);
      }
    }, 3000);
  });
};

const startDownload = async () => {
  try {
    const result = await downloadFile("myfile.zip");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

startDownload();





// Chaining Multiple Promises
const placeOrder = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Order placed!"), 1000);
    });
  };
  
  const processPayment = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = Math.random() > 0.2; // 80% chance of success
        success ? resolve("Payment processed!") : reject("Payment failed!");
      }, 2000);
    });
  };
  
  const shipOrder = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Order shipped!"), 1500);
    });
  };
  
  placeOrder()
    .then((msg) => {
      console.log(msg);
      return processPayment();
    })
    .then((msg) => {
      console.log(msg);
      return shipOrder();
    })
    .then((msg) => console.log(msg))
    .catch((error) => console.error(error));
  

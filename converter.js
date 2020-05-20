const csv = require("csvtojson");
const path = require("path");
const fs = require("fs");

const csvFilePath = path.join(__dirname, "customer-data.csv");
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    fs.writeFileSync(
      path.join(__dirname, "customer-data.json"),
      JSON.stringify(jsonObj, null, 2),
      (error) => {
        if (error) return process.exit(1);
        console.log("done");
        process.exit(0);
      }
    );
  });

// Async / await usage example
/* 
const json = async () => {
  const jsonArray = await csv().fromFile(csvFilePath);
  console.log(jsonArray);
};*/
//json();

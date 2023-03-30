const fs = require("fs");
const path = require("path");

function removeExtention(originalString) {
  return originalString.replace("_Downloadly.ir.mp4", "");
}

function scanDir(dirPath) {
  const data = {};

  // Read the contents of the directory
  const files = fs.readdirSync(dirPath);

  // Loop through each file in the directory
  for (const file of files) {
    const filePath = path.join(dirPath, file);

    // Check if the file is a directory
    if (fs.statSync(filePath).isDirectory()) {
      // Recursively scan the subdirectory and add its results to the current data object
      data[file] = scanDir(filePath);
    } else {
      data[removeExtention(file)] = {
        isComplete: false,
      };
    }
  }

  return data;
}

// Example usage:
const dirPath = "./Epic React";
const data = scanDir(dirPath);
// console.log(JSON.stringify(data, null, 2)); // Pretty-print the JSON object

const jsonString = JSON.stringify(data, null, 2);

// Write the JSON string to a file
fs.writeFile("epic-react-lessons.json", jsonString, (err) => {
  if (err) {
    console.log("Error writing file", err);
  } else {
    console.log("Successfully wrote file");
  }
});

const fs = require("fs");

// Define the path to your app.config.ts file
const appConfigPath = "app.config.ts";

// Read the app.config.ts file
fs.readFile(appConfigPath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Define the versionCode increment value
  const versionCodeIncrement = 1;

  // Update the versionCode property in the app.config.ts file
  const updatedAppConfig = data.replace(
    /versionCode: (\d+),/,
    (match, versionCode) => {
      const newVersionCode = parseInt(versionCode) + versionCodeIncrement;
      return `versionCode: ${newVersionCode},`;
    },
  );

  // Write the updated app.config.ts file
  fs.writeFile(appConfigPath, updatedAppConfig, "utf8", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.info(`Incremented versionCode in app.config.ts`);
    }
  });
});

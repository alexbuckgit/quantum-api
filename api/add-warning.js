// @ts-check

import { readFileSync, readdirSync, writeFileSync } from "node:fs";

const apiWarning = `
> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see https://aka.ms/qdk.api for the API documentation for the Modern QDK.
`;

const magicWarning = `
> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> The Modern QDK only supports the '%%qsharp' magic command.
`;

updateFiles("qsharp", apiWarning);
updateFiles("iqsharp-magic", magicWarning);

/**
 * @param {string} dirName 
 * @param {string} warningText 
 */
function updateFiles(dirName, warningText) {
  // loop over all files in the "qsharp" directory
  const files = readdirSync("qsharp");
  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    // read the file
    const content = readFileSync(file, "utf8");

    // Find the location of the second line consistenting of just "---"
    const lines = content.split("\n");
    let dashesFound = 0;
    let insertIndex = 0;
    for (const line of lines) {
      ++insertIndex;
      if (line === "---") {
        dashesFound++;
        if (dashesFound === 2) {
          break;
        }
      }
    }

    // Throw an error if not found
    if (dashesFound !== 2) {
      throw new Error("Could not find the second line of dashes in the file.");
    }

    // Insert a warning message
    lines.splice(insertIndex, 0, "WARNING: This file is not yet complete.");
    // Write the file back to disk
    writeFileSync(file, lines.join("\n"));
  }
}

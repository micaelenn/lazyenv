import fs from "fs";
import path from "path";

export default function getVariableNames() {
  const currentDirPath = process.cwd()
  const variables = new Set();

  const ignoreDirs = new Set([
    "node_modules",
    ".git",
    ".next",
    "dist",
    "build",
    "coverage",
    "out",
    ".turbo"
  ]);

  function scanDirectory(currentPath) {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      if (ignoreDirs.has(file)) continue;

      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        scanDirectory(filePath);
        continue;
      }

      if (!stat.isFile()) continue;

      const content = fs.readFileSync(filePath, "utf8");
      const regex = /process\.env\.([A-Za-z0-9_]+)/g;
      let match;

      while ((match = regex.exec(content)) !== null) {
        variables.add(match[1]);
      }
    }
  }

  // create .env file with all variable names
  scanDirectory(currentDirPath);
  const envVariablesNames = Array.from(variables)
  fs.writeFileSync(".env", envVariablesNames.map(v => `${v}=`).join("\n"));
}

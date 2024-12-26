const { formatLuaCode } = require('./formatter');
const { obfuscateLuaCode } = require('./obfuscator');
const fs = require('fs');

// Function to read the Lua file content
const readLuaFile = (filePath) => {
  return fs.readFileSync(filePath, 'utf-8');
};

// Command-line interface (CLI) handling
const [,, command, filePath] = process.argv;

if (!filePath) {
  console.log("Please provide a Lua file path as the second argument.");
  process.exit(1);
}

const luaCode = readLuaFile(filePath);

switch (command) {
  case 'format':
    const formattedCode = formatLuaCode(luaCode);
    console.log("Formatted Lua Code:\n", formattedCode);
    break;
  case 'obfuscate':
    const obfuscatedCode = obfuscateLuaCode(luaCode);
    console.log("Obfuscated Lua Code:\n", obfuscatedCode);
    break;
  default:
    console.log("Unknown command. Use 'format' or 'obfuscate'.");
    process.exit(1);
}

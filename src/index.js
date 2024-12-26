#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Function to obfuscate Lua code
function obfuscateLua(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const obfuscatedContent = obfuscateCode(fileContent);

  const outputFilePath = filePath.replace('.lua', '.obfuscated.lua');
  fs.writeFileSync(outputFilePath, obfuscatedContent, 'utf8');
  console.log(`Obfuscated Lua file saved as: ${outputFilePath}`);
}

// Simple obfuscation function (remove comments and unnecessary whitespaces)
function obfuscateCode(code) {
  return code
    // Remove single-line comments
    .replace(/--.*$/gm, '')
    // Remove multiline comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove extra whitespace
    .replace(/\s+/g, ' ')
    // Remove leading/trailing spaces
    .trim();
}

// CLI command handling
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'format':
    const fileToFormat = args[1];
    console.log(`Formatting file: ${fileToFormat}`);
    // Add your formatting logic here
    break;
  
  case 'obfuscate':
    const fileToObfuscate = args[1];
    if (!fileToObfuscate) {
      console.log('Please provide a Lua file to obfuscate.');
      process.exit(1);
    }
    obfuscateLua(fileToObfuscate);
    break;

  default:
    console.log('Unknown command. Available commands: format, obfuscate');
    break;
}

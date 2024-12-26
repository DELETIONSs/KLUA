// Function to obfuscate Lua code (remove comments and extra spaces)
const obfuscateLuaCode = (luaCode) => {
    // Regex to remove single-line and multi-line comments
    const obfuscatedCode = luaCode
      .replace(/--[^\n]*\n/g, '')  // Remove single-line comments
      .replace(/\/\*[\s\S]*?\*\//g, '');  // Remove multi-line comments
    
    // Strip excess whitespace
    return obfuscatedCode.replace(/\s+/g, ' ').trim();
  };
  
  module.exports = { obfuscateLuaCode };
  
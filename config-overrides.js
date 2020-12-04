const path = require("path");
const tsConfig = require("./tsconfig.paths.json");

module.exports = function override(config, env) {
  // Resolve alias module
  const paths =
    tsConfig && tsConfig.compilerOptions && tsConfig.compilerOptions.paths;
  const alias = {};
  if (typeof paths === "object") {
    Object.keys(paths).forEach((key) => {
      if (typeof key === "string") {
        let relativePath;
        (Array.isArray((relativePath = paths[key])) &&
          relativePath.length &&
          (relativePath = relativePath[0].replace("/*", ""))) ||
          path.resolve();
        key = key.replace("/*", "");
        alias[key] = relativePath;
      }
    });
  }

  config["resolve"].alias = {
    ...config["resolve"].alias,
    ...alias,
  };
  return config;
};

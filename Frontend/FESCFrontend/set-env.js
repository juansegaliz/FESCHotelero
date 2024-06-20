const fs = require('fs');

const targetPath = './src/environment/environment.ts';

const envConfigFile = `
export const environment = {
  production: false,
  serverUrl: '${process.env.serverUrl}'
};
`;
fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Angular environment file generated at ${targetPath}`);
  }
});

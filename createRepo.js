const fs = require('fs');
const { execSync } = require('child_process');
const name = process.argv[2];
const dirs = ['css', 'sass', 'js', 'img'];
const mainPath = `${process.argv[3]}/${name}`;

fs.mkdirSync(`${mainPath}`);
dirs.forEach(dir => fs.mkdirSync(`${mainPath}/${dir}`));
fs.writeFileSync(`${mainPath}/index.html`, '');
fs.writeFileSync(`${mainPath}/sass/style.scss`, '');
fs.writeFileSync(`${mainPath}/js/app.js`, '');
fs.writeFileSync(`${mainPath}/README.md`, '');

execSync(`cd ${name} && git init`);

execSync(`cd ${name} && git add .`);

execSync(`cd ${name} && git commit -m "Initial commit"`);

execSync(`cd ${name} && code .`);

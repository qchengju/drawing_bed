const fs = require('fs');
const path = require('path');

const targetDir = 'img1';
const outputFile = path.join(__dirname, 'output.md');

fs.readdir(targetDir, (err, files) => {
  if (err) {
    console.error('读取文件夹失败:', err);
    return;
  }
  // 只保留文件（不包括文件夹），并拼接完整路径
  const filePaths = files
    .filter(file => fs.statSync(path.join(targetDir, file)).isFile())
    .map(file => `https://cdn.jsdelivr.net/gh/qchengju/drawing_bed@img-1/${targetDir}/${file}`);

  // 写入 output.md
  fs.writeFile(outputFile, filePaths.join('\n'), err => {
    if (err) {
      console.error('写入 output.md 失败:', err);
    } else {
      console.log('文件路径已写入 output.md');
    }
  });
});
const http = require("http");
const pid = process.pid;
const PORT = 4000;

function getColorRundom() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += `${letters[Math.floor(Math.random() * 16)]}`;
  }
  setTimeout(function () {
    color}, 1000);
  return color;
}


http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        backgroundColor: getColorRundom(),
      })
    );
  })
  .listen(PORT, () => console.log(`server work on ${PORT}, pid:${pid}`));

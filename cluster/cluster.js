const cluster = require('cluster');
const os = require('os');
const { pid } = require('process');
if(cluster.isMaster) {
  const cpus = os.cpus().length;
  console.log(`Master start. Pid:${pid}`);
  for(let i = 0; i < cpus - 1; i++) {
    const worker = cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log(`worker died!, ${worker.process.pid}`);
    cluster.fork();
  });
}

if(cluster.isWorker) {
  require('./worker');
}
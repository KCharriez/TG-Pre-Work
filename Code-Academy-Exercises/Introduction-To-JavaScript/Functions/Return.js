function monitorCount(rows, columns){
  const computers = rows * columns;
  return computers;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);
//Using the return keyword to capture data and produce outputs.

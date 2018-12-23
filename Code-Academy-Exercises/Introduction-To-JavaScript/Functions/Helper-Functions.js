function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors (rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);
//Introduction to the idea of nesting function declarations inside one another to do tasks.

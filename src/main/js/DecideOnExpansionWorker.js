const { Client, logger } = require("camunda-external-task-client-js");
const { Variables } = require("camunda-external-task-client-js");


// configuration for the Client:
//  - 'baseUrl': url to the Workflow Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create a Client instance with custom configuration
const client = new Client(config);

// subscribe to the topic: 'DecideOnExpansion'
client.subscribe("DecideOnExpansion", async function ({ task, taskService }) {
  // business logic
  let threshold = 0.5;
  let direction = Math.random();
  let processVariables = new Variables();

  processVariables.set("direction", direction >= threshold ? "north" : "south");

  // complete the task
  await taskService.complete(task, processVariables);
});

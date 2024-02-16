const options = ["application", "config", "help"];


options.map(item => {
  switch (item) {
    case "application":
      console.log("application true")
      break;
    default:
      console.log("Application false")
      break;
  }
})
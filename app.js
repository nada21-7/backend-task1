const yargs = require("yargs");
const data = require("./data100");

// Add person
yargs.command({
  command: "add",

  describe: "to add a person",

  builder: {
    fname: { demandOption: true, type: "string" },
    lname: { demandOption: true, type: "string" },

  },

  handler: (x) => {
    data.addPerson(
       x.id,
       x.fname,
       x.lname,
       x.age,
       x.city,
    );
  },
});

// View all
yargs.command({
  command: "list",
  describe: "List all people",
  handler() {
    data.listPeople();
  },
});

// View one
yargs.command({
  command: "read",
  describe: "Read one person",
  builder: {
    id: { demandOption: true, type: "number" },
  },
  handler(x) {
    data.readPerson(x.id);
  },
});

// Delete one
yargs.command({
  command: "delete",
  describe: "Delete one person",
  builder: {
    id: { demandOption: true, type: "number" },
  },
  handler(x) {
    data.deletePerson(x.id);
  },
});

// Delete all
yargs.command({
  command: "deleteAll",
  describe: "to Delete all people",
  handler() {
    data.deleteAll();
  },
});

//  full name + city
yargs.command({
  command: "nameCity",
  describe: " to Show full name and city of each person",
  handler() {
    data.showFullNameAndCity();
  },
});

yargs.parse();







   


  




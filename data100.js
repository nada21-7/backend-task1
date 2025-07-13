const fs = require("fs");

// 1
const loadInfo = () => {
  try {
    const data = fs.readFileSync("data10.json").toString();
    return JSON.parse(data);
  } 
  catch {
    return [];
  }
};
//////////////////////////

//  2
const addPerson = (id , fname , lname , age , city ) => {
      const allData = loadInfo()

      allData.push( {
         id : id ,
         fname : fname,
         lname : lname,
         age : age,
         city : city
      })

       saveData(allData)

  }
;

//////////////////////////

// 3
const saveData = (data) => {

   const savingData = JSON.stringify(data)
   fs.writeFileSync("data10.json" , savingData)

};

///////////////////////////////

const listPeople = () => {
  const data = loadInfo();
  console.log("All People:");
  data.forEach((x) => {
    console.log(x);
  });
};
/////////////////////////////////

const readPerson = (id) => {
  const data = loadInfo();

  const person = data.find((obj) => {return obj.id == id });
  if (person) {
    console.log(person);
  } else {
    console.log("Person not found");
  }
};
////////////////////////////////

const deletePerson = (id) => {
  const data = loadInfo();
  const filtered = data.filter((p) => p.id !== id); // لو الاي دي اللي هكتبه موجود فامسحه
  if (filtered.length === data.length) {
    console.log("No person deleted. ID not found.");
  } else {
    saveData(filtered);
    console.log("Person deleted.");
  }
};

/////////////////////////////////////

const deleteAll = () => {
  saveData([]);
  console.log("All people are deleted.");
};

///////////////////////////////////////

const showFullNameAndCity = () => {
  const data = loadInfo();
  data.forEach((obj) => {
    console.log( obj.fname , obj.lname , obj.city );
  });
};

module.exports = {
  addPerson,
  listPeople,
  readPerson,
  deletePerson,
  deleteAll,
  showFullNameAndCity,
};

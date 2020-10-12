const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {

    const cat = JSON.parse(await readFileAsync("cat.json", "utf8"));
    const dog = JSON.parse(await readFileAsync("dog.json", "utf8"));
    const goldfish = JSON.parse(await readFileAsync("goldfish.json", "utf8"));
    const hamster = JSON.parse(await readFileAsync("hamster.json", "utf8"));

    const animals = {cat, dog,goldfish,hamster};
    // const animals = [hamster, dog, cat, goldfish].map(JSON.parse);

    await writeFileAsync("combined.json",JSON.stringify(animals, null, 2),"utf8");
    console.log("Successfully");
  } catch (err) {
    console.log(err);
  }
}

combineAnimals();

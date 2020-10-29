const orm = require("./config/orm.js");

(async () => {
    const data = await orm.selectWhere("parties", "party_type", "grown-up");
    console.log(data); // Data is undefined. Why?
})()
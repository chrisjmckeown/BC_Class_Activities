const orm = require("./config/orm.js");

// orm.selectAll("client_name", "clients");
// orm.selectAll("party_name", "parties");

// orm.selectPartiesByType("parties", "party_type", "grown-up");

orm.selectClientParties(["client_name", "party_name"],"clients", "parties", "client_id");

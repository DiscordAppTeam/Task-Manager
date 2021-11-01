(async () => {

    const database = require("../models/database")
    const Tasks = require("../models/Task")

    await database.sync();
})();

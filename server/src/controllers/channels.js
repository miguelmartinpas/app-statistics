const dbClient = require("../services/DbClient");

class Channels {
  index = async (req, res) => {
    const response = await dbClient.query("SELECT * FROM messages");

    return res.json({
      method: "get",
      rows: response.rows,
    });
  };

  store = async (req, res) => {
    const response = await dbClient.insert(
      "INSERT INTO messages VALUES (NULL, 'channel1', 'user4', 'text 1', NULL);"
    );

    return res.json({
      method: "put",
      response,
    });
  };
}

module.exports = {
  channels: new Channels(),
};

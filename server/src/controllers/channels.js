const mysql = require("mysql2");

class Channels {
  constructor() {
    this.pool = mysql.createPool({
      host: "10.5.0.6",
      user: "root",
      password: "root",
      database: "whatsapp_statistics",
      port: 3306,
    });

    this.promisePool = this.pool.promise();
  }

  index = async (req, res) => {
    const [rows, fields] = await this.promisePool.query(
      "SELECT * FROM messages"
    );

    console.log("rows", rows);
    return res.json({
      get: "get",
      rows,
    });

    // await connection.commit()
    // await connection.end()

    // await connection.rollback()
    // await connection.end()
  };
}

module.exports = {
  channels: new Channels(),
};

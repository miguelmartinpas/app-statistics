const mysql = require("mysql2");

class DbClient {
  constructor() {
    this.pool = mysql.createPool({
      host: "10.5.0.6",
      user: "whatsapp_user",
      password: "whatsapp_user00",
      database: "whatsapp_statistics",
      port: 3306,
    });

    this.promisePool = this.pool.promise();
  }

  static getInstance() {
    if (!DbClient.instance) {
      DbClient.instance = new DbClient();
    }
    return DbClient.instance;
  }

  query = async ($query) => {
    const [rows, fields] = await this.promisePool.query($query);

    return { rows, fields };

    // await connection.commit()
    // await connection.end()

    // await connection.rollback()
    // await connection.end()
  };

  insert = async ($query) => {
    try {
      const response = await this.promisePool.query($query);
      return response[0].insertId;
    } catch (error) {
      console.error(`Error on insert ${$query} ${error.message}`);
      return false;
    }
  };
}

module.exports = DbClient.getInstance();

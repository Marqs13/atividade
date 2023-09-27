const db = require("../../../database/databaseconfig");

class Salasdeaula {
  salasdeaulaid;
  descricao;
  localizacao;
  capacidade;
  removido;
}

module.exports = {
  async GetAllSalasDeAula() {
    return (await db.query("SELECT * FROM salasdeaula WHERE removido = false"))
      .rows;
  },

  async GetSalasDeAulaByID(saladeaulaid) {
    return (
      await db.query(
        "SELECT * FROM salasdeaula WHERE saladeaulaid = $1 AND removido = false",
        [saladeaulaid]
      )
    ).rows;
  },

  async InsertSalasDeAula(salaDeAulaInput) {
    let linhasAfetadas;
    let msg = "ok";
    const salaDeAulaKeys = Object.keys(new Salasdeaula());

    try {
      linhasAfetadas = (
        await db.query(
          `INSERT INTO salasdeaula VALUES (${salaDeAulaKeys
            .map((el, i) => `$${i + 1}`)
            .join(", ")})`,
          salaDeAulaKeys.map((key) => salaDeAulaInput[key])
        )
      ).rowCount;
    } catch (err) {
      msg = "[mdlSalasDeAula|InsertSalasDeAula] " + err.detail;
      linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
  },

  async UpdateSalasDeAula(salaDeAulaInput) {
    let linhasAfetadas;
    let msg = "ok";
    const salaDeAulaKeys = Object.keys(new Salasdeaula());

    try {
      linhasAfetadas = (
        await db.query(
          "UPDATE salasdeaula SET " +
            "descricao = $2, " +
            "localizacao = $3, " +
            "capacidade = $4, " +
            "removido = $5 " +
            "WHERE salasdeaulaid = $1",
          salaDeAulaKeys.map((key) => salaDeAulaInput[key])
        )
      ).rowCount;
    } catch (error) {
      msg = "[mdlSalasDeAula|UpdateSalasDeAula] " + error.detail;
      linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
  },

  async DeleteSalasDeAula(saladeaulaid) {
    let linhasAfetadas;
    let msg = "ok";

    try {
      linhasAfetadas = (
        await db.query(
          "UPDATE salasdeaula SET " +
            "removido = true " +
            "WHERE saladeaulaid = $1",
          [saladeaulaid]
        )
      ).rowCount;
    } catch (error) {
      msg = "[mdlSalasDeAula|DeleteSalasDeAula] " + error.detail;
      linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
  },
};

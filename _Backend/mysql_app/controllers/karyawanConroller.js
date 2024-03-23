const { db } = require("../database/index");

module.exports = {
  getData: (req, res) => {
    let scriptQuery = `SELECT * FROM karyawan`;
    if (req.query.nama) {
      scriptQuery = `SELECT * FROM karyawan WHERE nama = ${db.escape(
        req.query.nama
      )}`;
    }
    db.query(scriptQuery, (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(200).send(result);
      }
    });
  },
  addData: (req, res) => {
    const { nama, usia, email, berat, kota, tahun, id_posisi } = req.body;
    let insertQuery = `INSERT INTO karyawan VALUES(null,
        ${db.escape(nama)}, 
        ${db.escape(usia)}, 
        ${db.escape(email)}, 
        ${db.escape(berat)}, 
        ${db.escape(kota)}, 
        ${db.escape(tahun)}, 
        ${db.escape(id_posisi)})`;
    db.query(insertQuery, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        db.query(
          `SELECT * FROM karyawan WHERE nama = ${db.escape(nama)}`,
          (err, result) => {
            err
              ? res.status(500).send(err)
              : res
                  .status(200)
                  .send({ message: "add  karyawan sucsesfuly", result });
          }
        );
      }
    });
  },
  editData: (req, res) => {
    let dataUpdate = [];
    for (let prop in req.body) {
      dataUpdate.push(`${prop} = ${db.escape(req.body[prop])}`);
    }
    let updateQuery = `UPDATE karyawan SET ${dataUpdate} WHERE id_karyawan = ${db.escape(
      req.params.id
    )}`;
    console.log(updateQuery);
    db.query(updateQuery, (err, result) => {
      err
        ? res.status(500).send(err)
        : db.query(
            `SELECT * FROM karyawan WHERE id_karyawan = ${db.escape(
              req.params.id
            )}`,
            (err, result) => {
              err
                ? res.status(500).send(err)
                : res
                    .status(200)
                    .send({ message: "update  karyawan sucsesfuly", result });
            }
          );
    });
  },
  deleteData: (req, res) => {
    let deleteQuery = `DELETE FROM karyawan WHERE id_karyawan = ${db.escape(
      req.params.id
    )}`;
    db.query(deleteQuery, (err, result) => {
      err
        ? res.status(500).send(err)
        : res
            .status(200)
            .send({ message: `delete sucsesfuly ${req.params.id}` });
    });
  },
};

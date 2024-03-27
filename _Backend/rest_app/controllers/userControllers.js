const { db } = require("../database");
const { createToken } = require("../helper/createToken");
const Crypto = require("crypto");
const transporter = require("../helper/nodeMailer");

module.exports = {
  getData: (req, res) => {
    let scripQuery = "SELECT * FROM users";
    db.query(scripQuery, (err, results) => {
      if (err) res.status(500).send(err);
      res.status(200).send(results);
    });
  },
  addData: (req, res) => {
    let { username, email, password } = req.body.values;
    password = Crypto.createHmac("sha1", "hash123")
      .update(password)
      .digest("hex");
    let insertQuery = `INSERT INTO users VALUES (
        NULL,
        ${db.escape(username)}, 
        ${db.escape(email)}, 
        ${db.escape(password)}, 
        "user",
        "unverified")`;
    db.query(insertQuery, (err, results) => {
      if (err) {
        console.log(err, "Error inserting");
        res.status(500).send(err);
      }
      if (results.insertId) {
        let sqlGet = `SELECT * FROM users WHERE idusers = ${results.insertId}`;
        db.query(sqlGet, (err2, results2) => {
          if (err2) {
            console.log(err2);
            res.status(500).send(err2);
          }
          console.log(results2, "ini getSql");

          // bahan data untuk membuat token
          let { idusers, username, email, role, status } = results2[0];
          //  membuat token
          let token = createToken({ idusers, username, email, role, status });
          let mail = {
            from: "admi0n <rizalfikri852@gmail.com>",
            to: `${email}`,
            subject: "Account Verification",
            html: `<a href='http://localhost:3000/authentication/${token}' >Click here to verify your account</a>`,
          };
          transporter.sendMail(mail, (errMail, resMail) => {
            console.log(errMail, resMail, "INI EMAIL");
            if (errMail) {
              console.log(errMail, "Error");
              res.status(200).send({
                message: "Registration Failure",
                succes: false,
                error: errMail,
              });
            }
            res.status(200).send({
              message: "Registration Successfully, Check your email",
              succes: true,
            });
          });
        });
      }
    });
  },
  verification: (req, res) => {
    let updateQuery = `UPDATE users set status = 'verified' WHERE idusers = ${req.user.idusers}`;
    db.quey(updateQuery, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      res.status(200).send({ message: "verified account", success: true });
    });
  },
  editData: (req, res) => {
    let dataUpdate = [];
    for (let prop in req.body) {
      dataUpdate.push(`${prop} = ${db.escape(req.body[prop])}`);
    }
    let updateQuery = `UPDATE users SET ${dataUpdate} WHERE idusers  = ${req.params.id}`;
    console.log(updateQuery);
    db.query(updateQuery, (err, results) => {
      if (err) res.status(500).send(err);
      res.status(200).send(results);
    });
  },
};

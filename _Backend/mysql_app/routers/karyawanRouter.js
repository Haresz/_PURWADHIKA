const express = require("express");
const { karyawanController } = require("../controllers");
const router = express.Router();

router.get("/karyawan", karyawanController.getData);
router.post("/karyawan", karyawanController.addData);
router.patch("/karyawan/:id", karyawanController.editData);
router.delete("/karyawan/:id", karyawanController.deleteData);

module.exports = router;

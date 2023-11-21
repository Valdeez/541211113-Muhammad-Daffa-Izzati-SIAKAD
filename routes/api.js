import express from "express";
import siswaController from "../controller/siswaController.js";
const router = express.Router();

// GET
router.get("/siswas", siswaController.index);
// GET BY NIS
router.get("/siswa/:nis", siswaController.show);
// POST
router.post("/siswa", siswaController.store);
// PUT
router.put("/siswa/:nis", siswaController.update);
// DELETE
router.delete("/siswa/:nis", siswaController.remove);

export default router;

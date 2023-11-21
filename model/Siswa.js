import mongoose from "mongoose";

const siswaSchema = new mongoose.Schema({
	nis: {
		type: String,
		required: [true, "Isikan nis terlebih dahulu"],
		unique: true,
	},
	nama: {
		type: String,
		required: [true, "Isikan nama terlebih dahulu"],
	},
	absen: {
		type: String,
		required: [true, "Isikan absen terlebih dahulu"],
	},
	kelas: {
		type: String,
		required: [true, "Isikan kelas terlebih dahulu"],
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Isikan email valid",
		],
	},
});

export default mongoose.model("siswas", siswaSchema);

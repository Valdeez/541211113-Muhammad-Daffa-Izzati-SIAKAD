import siswas from "../model/Siswa.js";

export default {
	// Menampilkan seluruh data
	index: async (req, res) => {
		try {
			const siswa = await siswas.find();
			if (siswa.length > 0) {
				res.status(200).json({
					status: true,
					data: siswa,
					method: req.method,
					url: req.url,
				});
			} else {
				res.json({
					status: false,
					message: "Data tidak ditemukan",
				});
			}
		} catch (error) {
			res.status(400).json({
				success: false,
				error: error,
			});
		}
	},
	// Menampilkan data berdasarkan NIS
	show: async (req, res) => {
		try {
			const siswa = await siswas.find({ nis: req.params.nis }).exec();
			res.status(200).json({
				status: true,
				data: siswa,
				method: req.method,
				url: req.url,
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				error: error,
			});
		}
	},
	// Menambahkan data
	store: async (req, res) => {
		try {
			const siswa = await siswas.create(req.body);
			res.status(200).json({
				status: true,
				data: siswa,
				method: req.method,
				url: req.url,
				message: "Data berhasil ditambahkan",
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				error: error,
			});
		}
	},
	// Mengubah data menggunakan ID
	update: async (req, res) => {
		try {
			const siswa = await siswas.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
				runValidators: true,
			});
			res.json({
				status: true,
				data: siswa,
				method: req.method,
				url: req.url,
				message: "Data berhasil diedit",
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				error: error,
			});
		}
	},
	// Menghapus data menggunakan ID
	remove: async (req, res) => {
		try {
			await siswas.findByIdAndDelete(req.params.id);
			res.json({
				status: true,
				method: req.method,
				url: req.url,
				message: "Data berhasil dihapus",
			});
		} catch (error) {
			res.status(400).json({
				success: false,
				error: error,
			});
		}
	},
};

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/db_buku");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Koneksi database gagal..."));

db.once("open", () => {
  console.log("Koneksi database berhasil!");
});

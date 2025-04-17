const CONFIG = {
  port: 3000,
  apiBaseURL: "https://api.digtri.com",

  endpointApi: {
    admin: "/api/admin",
    gallery: "/api/gallery",
    upload: "/api/upload"
  },

  sqlTabel: "konten",
  dbPath: "./data/konten.db",
  uploadsDir: "uploads",
  label: "Label ini ganti aja di config",
  tambahData: "Tambah Data",
  editData: "Edit Data",

  judulPlaceholder: "Masukkan Judul Konten",
  kategoriPlaceholder: "Pilih Kategori",
  gambarPlaceholder: "Masukkan URL Gambar",
  deskripsiPlaceholder: "Tuliskan deskripsi singkat...",

  formLabel: {
    judul: "Judul Konten",
    deskripsi: "Deskripsi"
  },
  
  buttonLabel: {
    submit: "Simpan",
    back: "Kembali"
  }
};

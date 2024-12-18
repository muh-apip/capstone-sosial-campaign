# Frontend Relawanku - Capstone Project MSIB 7 Alterra Academy

## **Deskripsi**
Relawanku adalah API yang dirancang sebagai bentuk kampanye sosial guna mengajak masyarakat untuk saling membantu sesama dengan cara menjadi relawan untuk beberapa program sosial kemanusiaan yang tersedia. Aplikasi ini menyediakan beberapa fitur interaktif bagi pengguna seperti:

- Melihat semua program relawan yang ada.
- Melihat artikel terkait kegiatan sosial maupun lingkungan.
- Mendaftar ke program yang disediakan.
- Melakukan donasi untuk korban bencana maupun pelestarian lingkungan.

Aplikasi ini juga menyediakan berita serta informasi terkait kegiatan sosial lingkungan dengan harapan dapat menumbuhkan rasa kepedulian masyarakat terhadap kondisi sekitarnya lebih baik lagi.

---

## **Fitur Frontend**

### **Fitur Umum (Public Area):**
1. **Landing Page:**
   - Hero section dengan CTA (Call to Action) untuk login, registrasi, dan eksplorasi program relawan.
   - Carousel slider menggunakan **Swiper** untuk menampilkan artikel unggulan atau program sosial terbaru.
   - Informasi singkat mengenai tujuan Relawanku dan statistik seperti total program, jumlah relawan, serta jumlah donasi.

2. **Halaman Artikel:**
   - Daftar artikel terbaru dengan kategori sosial atau lingkungan.
   - Pencarian dan filter berdasarkan kategori.
   - Detail artikel dengan tampilan konten yang rapi, termasuk gambar pendukung.

3. **Halaman Program Relawan:**
   - Daftar program relawan yang tersedia, lengkap dengan kategori, tanggal, lokasi, dan jumlah peserta.
   - Fitur filter dan pencarian untuk mempermudah eksplorasi program.
   - Halaman detail program dengan deskripsi, persyaratan, dan tombol "Daftar".

4. **Halaman Event Donasi:**
   - Daftar event donasi yang tersedia, mencakup informasi seperti target dana, deskripsi singkat, dan progress donasi.
   - Halaman detail event dengan opsi donasi, integrasi API Payment Gateway, dan kalkulasi real-time.

5. **Registrasi & Login:**
   - Formulir registrasi sederhana dengan validasi input (username, email, password, dsb.).
   - Form login dengan dukungan JWT untuk autentikasi aman.

---

### **Fitur Setelah Login (User Area):**
1. **Dashboard User:**
   - Tampilan ringkasan program yang diikuti, status donasi, dan artikel favorit.
   - Shortcut untuk mengakses profil pengguna, daftar donasi, dan program yang diikuti.

2. **Profil Pengguna:**
   - Edit data diri (nama, email, dll.) dan ubah password.
   - Menampilkan riwayat program relawan dan donasi yang telah dilakukan.

3. **Halaman Program yang Diikuti:**
   - Daftar program relawan yang telah didaftarkan dengan status (aktif/selesai).
   - Opsi untuk membatalkan pendaftaran jika program belum dimulai.

---

### **Fitur Admin Area:**
1. **Manajemen Artikel:**
   - CRUD artikel dengan form editor yang mendukung gambar dan format teks.
   - Tabel daftar artikel dengan opsi pencarian dan filter kategori.

2. **Manajemen Program Relawan:**
   - CRUD program relawan dengan informasi lengkap seperti deskripsi, tanggal, lokasi, dan kategori.
   - Tampilan tabel dengan indikator status (aktif/selesai).

3. **Manajemen Event Donasi:**
   - CRUD event donasi dengan target dana, deskripsi, kategori, dan status.
   - Pemantauan transaksi donasi real-time, termasuk detail pembayaran dan status.

4. **Manajemen Pengguna:**
   - Tabel daftar user dengan opsi pencarian, filter, dan penghapusan akun.

---

## **Teknologi Frontend yang Digunakan**

| Teknologi          | Deskripsi                                                                                   |
|--------------------|-------------------------------------------------------------------------------------------|
| **React**          | Library untuk membangun antarmuka pengguna berbasis komponen.                             |
| **Vite**           | Build tool modern untuk proyek React yang lebih cepat.                                     |
| **Tailwind CSS**   | Framework CSS untuk membuat desain responsif dengan cepat.                                 |
| **react-router-dom** | Routing aplikasi untuk navigasi multi-halaman.                                            |
| **Zustand**        | State management yang ringan dan mudah diintegrasikan.                                     |
| **swiper**         | Library untuk membuat slider interaktif, digunakan pada landing page dan halaman artikel. |
| **MUI Icons**      | Ikon modern untuk menambah estetika dan kegunaan UI.                                       |
| **Axios**          | Library untuk melakukan request API (GET, POST, PUT, DELETE).                              |
| **Generative AI**  | Membantu pembuatan konten interaktif seperti saran donasi atau rekomendasi artikel.         |

---

## **Komponen UI Utama**

1. **Navbar & Sidebar:**
   - Navigasi utama untuk berpindah antara halaman.
   - Sidebar dengan opsi tambahan untuk admin.

2. **Card Component:**
   - Digunakan untuk menampilkan program, artikel, dan event donasi dalam bentuk daftar.

3. **Form Component:**
   - Untuk registrasi, login, pengeditan data, dan pendaftaran program.

4. **Table Component:**
   - Digunakan pada dashboard admin untuk memantau data (artikel, program, event donasi, dll.).

5. **Modal Component:**
   - Untuk konfirmasi aksi seperti penghapusan data atau donasi.


---

![Relawanku Logo](public/img/background/RelawanKu.png)

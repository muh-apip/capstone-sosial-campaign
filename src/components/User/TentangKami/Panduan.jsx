import React from "react";

const Panduan = () => (
  <div
    style={{
      backgroundColor: "#FFFFFF",
      padding: "30px",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.8",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    }}
  >
    <h1
      style={{
        fontSize: "28px",
        fontWeight: "900",
        color: "#333",
        marginBottom: "10px",
      }}
    >
      Panduan Donasi dan Pendaftaran Relawan di
    </h1>
    <h2
      style={{
        fontSize: "24px",
        fontWeight: "800",
        color: "#007BFF",
        marginBottom: "30px",
      }}
    >
      Relawanku.com
    </h2>

    <section style={{ marginBottom: "30px" }}>
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#444",
          marginBottom: "15px",
        }}
      >
        Cara berdonasi di Relawanku.com
      </h3>
      <ol style={{ paddingLeft: "20px", color: "#555" }}>
        <li>1. Buka situs web aplikasi/organisasi.</li>
        <li>2. Temukan dan klik menu “Pendaftaran Relawan.”</li>
        <li>3. Isi formulir pendaftaran (nama, email, nomor telepon, dll.).</li>
        <li>4. Pilih program atau kegiatan yang diminati.</li>
        <li>5. Unggah dokumen pendukung (jika diperlukan).</li>
        <li>6. Setujui syarat dan ketentuan.</li>
        <li>7. Klik “Submit” atau “Daftar Sekarang.”</li>
        <li>8. Tunggu konfirmasi pendaftaran.</li>
      </ol>
    </section>

    <section>
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#444",
          marginBottom: "15px",
        }}
      >
        Cara Pendaftaran Menjadi Relawan di Relawanku.com
      </h3>
      <ol style={{ paddingLeft: "20px", color: "#555" }}>
        <li>1. Buka situs web atau aplikasi organisasi.</li>
        <li>2. Klik menu “Pendaftaran Relawan.”</li>
        <li>3. Isi formulir pendaftaran (nama, email, dll.).</li>
        <li>4. Pilih program atau kegiatan relawan yang diminati.</li>
        <li>5. Unggah dokumen pendukung (jika diminta).</li>
        <li>6. Pilih jadwal ketersediaan.</li>
        <li>7. Setujui syarat dan ketentuan.</li>
        <li>8. Klik “Submit” atau “Daftar Sekarang.”</li>
        <li>9. Tunggu konfirmasi pendaftaran.</li>
      </ol>
    </section>
  </div>
);

export default Panduan;

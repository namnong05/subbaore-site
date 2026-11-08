
"use client";

import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState("Trang chủ");

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f3f5f9",
      color: "#172033",
      fontFamily: "Arial",
      padding: "20px"
    }}>
      <header style={{
        background: "#111827",
        color: "white",
        padding: "25px",
        borderRadius: "14px"
      }}>
        <h1>SUBBAORE.SITE</h1>
        <p>HỆ THỐNG DỊCH VỤ MẠNG XÃ HỘI</p>
        <button onClick={() => setMenu("Đăng nhập")}>
          Đăng nhập
        </button>
        {" "}
        <button onClick={() => setMenu("Đăng ký")}>
          Đăng ký
        </button>
      </header>

      <h2 style={{ marginTop: 30 }}>Bảng điều khiển</h2>

      <section style={{
        background: "white",
        padding: 20,
        borderRadius: 12,
        marginTop: 15
      }}>
        <h3>Số dư tài khoản</h3>
        <h1>0đ</h1>
        <button onClick={() => setMenu("Nạp tiền")}>
          Nạp tiền
        </button>
      </section>

      <h2>Dịch vụ nổi bật</h2>

      {["Facebook", "TikTok", "Instagram", "YouTube"].map(item => (
        <button
          key={item}
          onClick={() => setMenu(item)}
          style={{
            display: "block",
            width: "100%",
            padding: 18,
            marginBottom: 12,
            background: "white",
            border: "1px solid #ddd",
            borderRadius: 10,
            textAlign: "left",
            fontSize: 17
          }}
        >
          {item} - Xem dịch vụ →
        </button>
      ))}

      <section style={{
        background: "white",
        padding: 20,
        borderRadius: 12,
        marginTop: 20
      }}>
        <h3>{menu}</h3>
        <p>Chào mừng đến với SUBBAORE.SITE</p>
      </section>

      <footer style={{ marginTop: 40, textAlign: "center" }}>
        © 2026 SUBBAORE.SITE
      </footer>
    </main>
  );
}

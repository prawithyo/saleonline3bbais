"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
     

<header
  style={{
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "#ffffff",
    boxShadow: "0 2px 12px rgba(0,0,0,.08)",
  }}
>
  <div
    style={{
      maxWidth: "1400px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 40px",
    }}
  >
    {/* Logo */}
    <a href="#" style={{ display: "flex", alignItems: "center" }}>
      <Image
        src="/logo.jpg"
        alt="AIS 3BB"
        width={120}
        height={60}
        style={{
          width: "150px",
          height: "auto",
        }}
      />
    </a>
<button
  onClick={() => setMenuOpen(!menuOpen)}
  style={{
    fontSize: "30px",
    background: "none",
    border: "none",
    cursor: "pointer",
  }}
  className="mobileMenuButton"
>
  ☰
</button>
    {/* Menu */}
    <nav
    className={menuOpen ? "mobileNav open" : "mobileNav"}
      style={{
       gap: "35px",
        alignItems: "center",
        fontSize: "17px",
        fontWeight: "600",
      }}
    >
      <a href="#hero" style={{ color: "#222", textDecoration: "none" }}>
        หน้าแรก
      </a>

      <a href="#packages" style={{ color: "#222", textDecoration: "none" }}>
        แพ็กเกจ
      </a>

      <a
        href="https://www.ais.th/consumers/package/internet/coverage"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#222", textDecoration: "none" }}
      >
        เช็กพื้นที่บริการ
      </a>

      <a
        href="tel:1530"
        className="serviceCard"
        style={{
          color: "#d62828",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        แจ้งเน็ตเสีย
      </a>

      <a
        href="#contact"
        style={{ color: "#222", textDecoration: "none" }}
      >
        ติดต่อเรา
      </a>
    </nav>

    {/* LINE Button */}
    <a
    className="desktopLineButton"
      href="https://lin.ee/Uc3LJUW"
      
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "#06C755",
        color: "#fff",
        padding: "14px 24px",
        borderRadius: "999px",
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0 8px 20px rgba(6,199,85,.35)",
      }}
    >
      <Image
        src="/logoline.png"
        alt="LINE"
        width={28}
        height={28}
      />
      สมัครผ่าน LINE
    </a>
  </div>
</header>
      
      <section
       id="hero"
        style={{
          background: "#eef9ee",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 10%",
        }}
      >
        <div
         className="heroGrid"
          style={{
    
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {/* ฝั่งซ้าย */}
          <div>
            <h1
              style={{
                fontSize: "64px",
                color: "#009845",
                marginBottom: "20px",
                lineHeight: 1.1,
              }}
            >
              สมัคร AIS 3BB
              <br />
              FIBRE3
            </h1>

            <p
              style={{
                fontSize: "26px",
                color: "#444",
                marginBottom: "15px",
              }}
            >
              อินเทอร์เน็ตบ้านความเร็วสูง
            </p>

            <p
              style={{
                fontSize: "22px",
                color: "#555",
                marginBottom: "40px",
              }}
            >
              สมัครออนไลน์ ติดตั้งฟรีทั่วประเทศไทย
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <a
               className="desktopLineButton"
                href="https://lin.ee/Uc3LJUW"
                target="_blank"
                style={{
                  background: "#00c853",
                  color: "#fff",
                  padding: "18px 40px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                สมัครผ่าน LINE
              </a>

              <a
                href="tel:020000000"
                style={{
                  border: "2px solid #009845",
                  color: "#009845",
                  padding: "18px 40px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                โทรหาเรา
              </a>
            </div>
          </div>

          {/* ฝั่งขวา */}
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Image
              src="/hero-banner.png"
              alt="AIS 3BB"
              width={1000}
              height={900}
              style={{
                width: "100%",
                maxWidth: "1000px",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section
  style={{
    background: "#f8fff8",
    padding: "60px 20px",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "40px",
        color: "#009845",
        marginBottom: "15px",
      }}
    >
      ทำไมต้องสมัครกับเรา
    </h2>

    <p
      style={{
        color: "#666",
        marginBottom: "40px",
        fontSize: "18px",
      }}
    >
      สมัครง่าย ดูแลหลังการขาย และติดตั้งโดยทีมงานมาตรฐาน AIS 3BB
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
      }}
    >
      {[
        {
          icon: "🚀",
          title: "ติดตั้งฟรี",
          text: "ไม่มีค่าใช้จ่ายในการติดตั้ง",
        },
        {
          icon: "⚡",
          title: "อินเทอร์เน็ตเสถียร",
          text: "เหมาะทั้งเล่นเกม ดูหนัง และทำงาน",
        },
        {
          icon: "💬",
          title: "สมัครออนไลน์",
          text: "สมัครผ่าน LINE ได้ตลอดเวลา",
        },
        {
          icon: "🛠️",
          title: "ดูแลหลังการขาย",
          text: "แจ้งเสียผ่าน 1530 ได้ 24 ชั่วโมง",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="serviceCard"
          style={{
            background: "#fff",
            borderRadius: "18px",
            padding: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          }}
        >
          <div style={{ fontSize: "42px", marginBottom: "15px" }}>
            {item.icon}
          </div>

          <h3 style={{ marginBottom: "10px" }}>
            {item.title}
          </h3>

          <p style={{ color: "#666" }}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* =================== Service Cards =================== */}

<section
  style={{
    maxWidth: "1400px",
    margin: "-40px auto 70px",
    padding: "0 20px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
      gap: "20px",
    }}
  >
    {/* เช็กพื้นที่ */}
    <a
      href="https://www.ais.th/consumers/package/internet/coverage"
      target="_blank"
      rel="noopener noreferrer"
      className="serviceCard"
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "24px",
        textDecoration: "none",
        color: "#222",
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <div style={{ fontSize: "34px" }}>📍</div>

      <h3>เช็กพื้นที่บริการ</h3>

      <p style={{ color: "#666" }}>
        ตรวจสอบก่อนติดตั้งอินเทอร์เน็ต
      </p>
    </a>

    {/* แจ้งเน็ตเสีย */}
    <a
      href="tel:1530"
        className="serviceCard"
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "24px",
        textDecoration: "none",
        color: "#222",
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
        cursor: "pointer",
transition: "transform .25s ease, box-shadow .25s ease",
      }}
    >
      <div style={{ fontSize: "34px" }}>❌</div>

      <h3>แจ้งเน็ตเสีย</h3>

      <p style={{ color: "#666" }}>
        โทร 1530 ตลอด 24 ชั่วโมง
      </p>
    </a>

    {/* ติดต่อฝ่ายขาย */}
    <a
      href="tel:0982799863"
      className="serviceCard"
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "24px",
        textDecoration: "none",
        color: "#222",
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <div style={{ fontSize: "34px" }}>☎️</div>

      <h3>ติดต่อฝ่ายขาย</h3>

      <p style={{ color: "#666" }}>
        098-279-9863
      </p>
    </a>

    {/* LINE */}
    <a
      href="https://lin.ee/Uc3LJUW"
      target="_blank"
      rel="noopener noreferrer"
      className="serviceCard"
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "24px",
        textDecoration: "none",
        color: "#222",
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <div style={{ fontSize: "34px" }}>💬</div>

      <h3>สมัครผ่าน LINE</h3>

      <p style={{ color: "#666" }}>
        เพิ่มเพื่อนและสมัครออนไลน์
      </p>
    </a>
  </div>
</section>
      {/* =================== Net & Entertainment =================== */}

<section
  id="packages"
  style={{
    padding: "80px 20px",
    background: "#ffffff",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#009845",
      marginBottom: "40px",
      fontWeight: "bold",
    }}
  >
    แพ็กเกจ Net & Entertainment
  </h2>

  <Image
  src="/NetEntertainmentGang.png"
  alt="Net & Entertainment"
  width={1600}
  height={900}
  style={{
  display: "block",
  margin: "50px auto",
  width: "100%",
  maxWidth: "900px",
  height: "auto",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
}}
  
/>
    <div

  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    marginBottom: "60px",
    flexWrap: "wrap",
  }}
>
  <a
    href="https://lin.ee/Uc3LJUw"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#06C755",
      color: "#fff",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    🟢 สมัครแพคเกจนี้ช่องทาง LINE
  </a>

  <a
    href="tel:0982799863"
    style={{
      display: "inline-block",
      background: "#fff",
      color: "#009845",
      border: "2px solid #009845",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    📞 โทร 098-279-9863
  </a>
</div>
</section>

{/* =================== Internet Only =================== */}

<section
  style={{
    padding: "80px 20px",
    background: "#eef9ee",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#009845",
      marginBottom: "40px",
      fontWeight: "bold",
    }}
  >
    แพ็กเกจ InternetOnly
  </h2>

  <Image
    src="/internetonly.jpg"
    alt="Internet Only"
    width={1600}
    height={900}
    style={{
  display: "block",
  margin: "50px auto",
  width: "100%",
  maxWidth: "900px",
  height: "auto",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
}}
></Image>
  <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    marginBottom: "60px",
    flexWrap: "wrap",
  }}
>
  <a
    href="https://lin.ee/Uc3LJUw"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#06C755",
      color: "#fff",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    🟢 สมัครแพคเกจนี้ช่องทาง LINE
  </a>

  <a
    href="tel:0982799863"
    style={{
      display: "inline-block",
      background: "#ffffff",
      color: "#009845",
      border: "2px solid #009845",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    📞 โทร 098-279-9863
  </a>
</div>
</section>

{/* =================== Power4 ครบคุ้มในแพ็กเดียว =================== */}

<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#009845",
      marginBottom: "40px",
      fontWeight: "bold",
    }}
  >
    Power4 ครบคุ้มในแพ็กเดียว
  </h2>

  <Image
  src="/power4.png"
  alt="Power4 ครบคุ้มในแพ็กเดียว"
  width={1600}
  height={900}
  style={{
  display: "block",
  margin: "50px auto",
  width: "100%",
  maxWidth: "900px",
  height: "auto",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
}}
  
/>
    <div

  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    marginBottom: "60px",
    flexWrap: "wrap",
  }}
>
  <a
    href="https://lin.ee/Uc3LJUw"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#06C755",
      color: "#fff",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    🟢 สมัครแพคเกจนี้ช่องทาง LINE
  </a>

  <a
    href="tel:0982799863"
    style={{
      display: "inline-block",
      background: "#fff",
      color: "#009845",
      border: "2px solid #009845",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    📞 โทร 098-279-9863
  </a>
</div>
</section>
{/* =================== Net SmartBackup เล่นเน็ตต่อเนื่องไม่มีสะดุด =================== */}

<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#009845",
      marginBottom: "40px",
      fontWeight: "bold",
    }}
  >
    Net SmartBackup เล่นเน็ตต่อเนื่องไม่มีสะดุด
  </h2>

  <Image
  src="/netsmart.png"
  alt="Net SmartBackup เล่นเน็ตต่อเนื่องไม่มีสะดุด"
  width={1600}
  height={900}
  style={{
  display: "block",
  margin: "50px auto",
  width: "100%",
  maxWidth: "900px",
  height: "auto",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
}}
  
/>
    <div

  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    marginBottom: "60px",
    flexWrap: "wrap",
  }}
>
  <a
    href="https://lin.ee/Uc3LJUw"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#06C755",
      color: "#fff",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    🟢 สมัครแพคเกจนี้ช่องทาง LINE
  </a>

  <a
    href="tel:0982799863"
    style={{
      display: "inline-block",
      background: "#fff",
      color: "#009845",
      border: "2px solid #009845",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    📞 โทร 098-279-9863
  </a>
</div>
</section>
{/* =================== แพ็กเกจ Netflix Lover =================== */}

<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#009845",
      marginBottom: "40px",
      fontWeight: "bold",
    }}
  >
    แพ็กเกจ Netflix Lover 
  </h2>

  <Image
  src="/netflix.jpg"
  alt="แพ็กเกจ Netflix Lover "
  width={1600}
  height={900}
  style={{
  display: "block",
  margin: "50px auto",
  width: "100%",
  maxWidth: "900px",
  height: "auto",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
}}
  
/>
    <div

  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    marginBottom: "60px",
    flexWrap: "wrap",
  }}
>
  <a
    href="https://lin.ee/Uc3LJUw"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#06C755",
      color: "#fff",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    🟢 สมัครแพคเกจนี้ช่องทาง LINE
  </a>

  <a
    href="tel:0982799863"
    style={{
      display: "inline-block",
      background: "#fff",
      color: "#009845",
      border: "2px solid #009845",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    📞 โทร 098-279-9863
  </a>
</div>
</section>
{/* =================== ปลอดภัยครบวงจรเพื่อบ้านคุณ Home insurance =================== */}

<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#009845",
      marginBottom: "40px",
      fontWeight: "bold",
    }}
  >
    แพ็กเกจ ปลอดภัยครบวงจรเพื่อบ้านคุณ Home insurance
  </h2>

  <Image
  src="/homein.png"
  alt="ปลอดภัยครบวงจรเพื่อบ้านคุณ Home insurance "
  width={1600}
  height={900}
  style={{
  display: "block",
  margin: "50px auto",
  width: "100%",
  maxWidth: "900px",
  height: "auto",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
}}
  
/>
    <div

  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    marginBottom: "60px",
    flexWrap: "wrap",
  }}
>
  <a
    href="https://lin.ee/Uc3LJUw"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#06C755",
      color: "#fff",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    🟢 สมัครแพคเกจนี้ช่องทาง LINE
  </a>

  <a
    href="tel:0982799863"
    style={{
      display: "inline-block",
      background: "#fff",
      color: "#009845",
      border: "2px solid #009845",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    📞 โทร 098-279-9863
  </a>
</div>
</section>
{/* =================== SME Choice สำหรับ SME ตอบโจทย์ทุกการเติบโตของธุรกิจ =================== */}

<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#009845",
      marginBottom: "40px",
      fontWeight: "bold",
    }}
  >
    แพ็กเกจ SME Choice สำหรับ SME ตอบโจทย์ทุกการเติบโตของธุรกิจ
  </h2>

  <Image
  src="/sme.jpg"
  alt="SME Choice สำหรับ SME ตอบโจทย์ทุกการเติบโตของธุรกิจ "
  width={1600}
  height={900}
  style={{
  display: "block",
  margin: "50px auto",
  width: "100%",
  maxWidth: "900px",
  height: "auto",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
}}
  
/>
    <div

  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    marginBottom: "60px",
    flexWrap: "wrap",
  }}
>
  <a
    href="https://lin.ee/Uc3LJUw"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#06C755",
      color: "#fff",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    🟢 สมัครแพคเกจนี้ช่องทาง LINE
  </a>

  <a
    href="tel:0982799863"
    style={{
      display: "inline-block",
      background: "#fff",
      color: "#009845",
      border: "2px solid #009845",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    📞 โทร 098-279-9863
  </a>
</div>
</section>
{/* =================== SuperFastPlus7ติดปีกให้ชีวิตเต็มสปีดพลัสขั้นสุด =================== */}

<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#009845",
      marginBottom: "40px",
      fontWeight: "bold",
    }}
  >
    แพ็กเกจ SuperFastPlus7ติดปีกให้ชีวิตเต็มสปีดพลัสขั้นสุด
  </h2>

  <Image
  src="/super.png"
  alt="SuperFastPlus7ติดปีกให้ชีวิตเต็มสปีดพลัสขั้นสุด "
  width={1600}
  height={900}
  style={{
  display: "block",
  margin: "50px auto",
  width: "100%",
  maxWidth: "900px",
  height: "auto",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
}}
  
/>
    <div

  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    marginBottom: "60px",
    flexWrap: "wrap",
  }}
>
  <a
    href="https://lin.ee/Uc3LJUw"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#06C755",
      color: "#fff",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    🟢 สมัครแพคเกจนี้ช่องทาง LINE
  </a>

  <a
    href="tel:0982799863"
    style={{
      display: "inline-block",
      background: "#fff",
      color: "#009845",
      border: "2px solid #009845",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    📞 โทร 098-279-9863
  </a>
</div>
</section>
{/* =================== Home FiberLan Plus เน็ตแรง 1Gbps เท่ากันทุกห้อง ทุกชั้น ทุกบ้าน  =================== */}

<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#009845",
      marginBottom: "40px",
      fontWeight: "bold",
    }}
  >
    แพ็กเกจ Home FiberLan Plus เน็ตแรง 1Gbps เท่ากันทุกห้อง ทุกชั้น ทุกบ้าน
  </h2>

  <Image
  src="/Fiberlan.png"
  alt="Home FiberLan Plus เน็ตแรง 1Gbps เท่ากันทุกห้อง ทุกชั้น ทุกบ้าน "
  width={1600}
  height={900}
  style={{
  display: "block",
  margin: "50px auto",
  width: "100%",
  maxWidth: "900px",
  height: "auto",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
}}
  
/>
    <div

  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    marginBottom: "60px",
    flexWrap: "wrap",
  }}
>
  <a
    href="https://lin.ee/Uc3LJUw"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#06C755",
      color: "#fff",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
      boxShadow: "0 8px 20px rgba(6,199,85,.35)",
transition: "0.25s",
    }}
  >
    🟢 สมัครแพคเกจนี้ช่องทาง LINE
  </a>

  <a
    href="tel:0982799863"
    style={{
      display: "inline-block",
      background: "#fff",
      color: "#009845",
      border: "2px solid #009845",
      padding: "18px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    📞 โทร 098-279-9863
  </a>
</div>
</section>
<a
  href="https://lin.ee/Uc3LJUW"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    animation: "lineFloat 1.2s ease-in-out infinite",
    position: "fixed",
    right: "25px",
    bottom: "25px",
    zIndex: 999999,

    display: "flex",
    alignItems: "center",
    gap: "14px",

    background: "linear-gradient(135deg,#06C755,#00A63F)",
    color: "#fff",
    textDecoration: "none",

    padding: "18px 28px",
    borderRadius: "999px",

    fontSize: "18px",
    fontWeight: "700",

    boxShadow: "0 12px 30px rgba(6,199,85,.35)",

    transition: "all .25s ease",
  }}
>
  <Image
  src="/logoline.png"
  alt="LINE"
  width={36}
  height={36}
/>
   สมัครเลย
</a>
{/* =================== Footer =================== */}

<footer
  id="contact"
  style={{
    background: "#0b1d16",
    color: "#fff",
    padding: "60px 30px",
    marginTop: "80px",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "40px",
    }}
  >
    <div>
      <h2 style={{ color: "#06C755" }}>
        AIS 3BB FIBRE3
      </h2>

      <p>
        สมัครอินเทอร์เน็ตบ้านออนไลน์
        <br />
        ติดตั้งฟรีทั่วประเทศไทย
      </p>
    </div>

    <div>
      <h3>ติดต่อเรา</h3>

      <p>📞 098-279-9863</p>

      <p>☎️ Call Center 1530</p>

      <p>💬 LINE Official</p>
    </div>

    <div>
      <h3>เวลาทำการ</h3>

      <p>ทุกวัน</p>

      <p>08:00 - 20:00 น.</p>
    </div>
  </div>

  <hr
    style={{
      margin: "40px 0 20px",
      borderColor: "#333",
    }}
  />

  <p
    style={{
      textAlign: "center",
      color: "#bbb",
    }}
  >
    © 2026 AIS 3BB FIBRE3 | เว็บไซต์สมัครอินเทอร์เน็ตบ้าน
  </p>
</footer>
</main>
);
}
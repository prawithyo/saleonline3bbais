import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section
        style={{
          background: "#eef9ee",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 10%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
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
              src="/logo.jpg"
              alt="AIS 3BB"
              width={600}
              height={600}
              style={{
                width: "100%",
                maxWidth: "520px",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      {/* =================== Net & Entertainment =================== */}

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
    🟢 สมัครผ่าน LINE
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
    🟢 สมัครผ่าน LINE
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
    </main>
  );
}
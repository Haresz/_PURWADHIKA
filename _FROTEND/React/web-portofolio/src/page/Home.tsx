import React from "react";

export default function Home() {
  return (
    <div style={{ scrollMargin: "0px" }}>
      <section>
        <div className="secsion-container">
          <h1
            style={{
              paddingTop: "200px",
              marginLeft: "124px",
              fontSize: "5rem",
            }}
          >
            Endless your Creativity!
          </h1>
          <h2
            style={{
              width: "50%",
              paddingTop: "40px",
              marginLeft: "124px",
              fontWeight: "600",
            }}
          >
            I will create something that will exceeding your expectation
          </h2>
          <div
            style={{
              width: "28%",
              marginTop: "60px",
              marginLeft: "124px",
              padding: "12px 18px",
              fontWeight: "600",
              borderRadius: "30px",
              textAlign: "center",
            }}
            className="contact-nav-menu"
          >
            <a style={{ color: "white" }} href="/contact">
              <h2>Go To Portofolio</h2>
            </a>
          </div>
        </div>
        <img src="icon.jpeg" alt="" />
      </section>
      <section>
        <img
          style={{ marginLeft: "124px", width: "40%", paddingRight: "0" }}
          src="icon.jpeg"
          alt=""
        />
        <div
          style={{
            display: "flex",
            width: "60%",
            flexDirection: "column",
            alignItems: "end",
            textAlign: "right",
          }}
          className="secsion-container"
        >
          <h1
            style={{
              paddingTop: "200px",
              marginRight: "124px",
              fontSize: "5rem",
            }}
          >
            Your Satisfaction Our Priority
          </h1>
          <h2
            style={{
              width: "50%",
              paddingTop: "40px",
              marginRight: "124px",
              fontWeight: "600",
            }}
          >
            What do you waiting for? let the result approve your doubt
          </h2>
          <div
            style={{
              width: "28%",
              marginTop: "60px",
              marginRight: "124px",
              padding: "12px 0px",
              fontWeight: "600",
              borderRadius: "30px",
              textAlign: "center",
            }}
            className="contact-nav-menu"
          >
            <a style={{ color: "white" }} href="/contact">
              <h2>Contact me!</h2>
            </a>
          </div>
        </div>
      </section>
      <div>
        <div
          className="container"
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              borderBottom: "1px solid #D9D9D9",
              paddingBottom: "80px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="client"
          >
            <h1 style={{ fontSize: "4rem" }}>Our Happy Clients</h1>
            <h3
              style={{
                marginTop: "20px",
                fontWeight: "600",
                fontSize: "1.3rem",
              }}
            >
              See their happy stories after working with us
            </h3>
            <div
              style={{
                width: "fit-content",
                marginTop: "20px",
                padding: "12px 26px",
                fontWeight: "600",
                borderRadius: "30px",
                textAlign: "center",
                justifySelf: "center",
              }}
              className="contact-nav-menu"
            >
              <a style={{ color: "white" }} href="/contact">
                <h2>Contact me!</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section
        className="section-container-card"
        style={{ justifyContent: "space-evenly" }}
      >
        <div className="card-container">
          <img
            style={{
              width: "240px",
              marginTop: "-120px",
              borderRadius: "50%",
              padding: "0",
            }}
            src="https://yt3.googleusercontent.com/9cI6CQSG-5ml7pDyd9py4Na2Vsm9HcyhAzg84K9wLCX17VhI1A9DLB2ef_9Li7AMXk0nkLLTqQ=s176-c-k-c0x00ffffff-no-rj"
            alt="pp"
          />
          <h2>Surename Two</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="name">CEO Building Two</p>
        </div>
        <div className="card-container">
          <img
            style={{
              width: "240px",
              marginTop: "-120px",
              borderRadius: "50%",
              padding: "0",
            }}
            src="https://yt3.googleusercontent.com/9cI6CQSG-5ml7pDyd9py4Na2Vsm9HcyhAzg84K9wLCX17VhI1A9DLB2ef_9Li7AMXk0nkLLTqQ=s176-c-k-c0x00ffffff-no-rj"
            alt="pp"
          />
          <h2>Surename Two</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="name">CEO Building Two</p>
        </div>
        <div className="card-container">
          <img
            style={{
              width: "240px",
              marginTop: "-120px",
              borderRadius: "50%",
              padding: "0",
            }}
            src="https://yt3.googleusercontent.com/9cI6CQSG-5ml7pDyd9py4Na2Vsm9HcyhAzg84K9wLCX17VhI1A9DLB2ef_9Li7AMXk0nkLLTqQ=s176-c-k-c0x00ffffff-no-rj"
            alt="pp"
          />
          <h2>Surename Two</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="name">CEO Building Two</p>
        </div>
      </section>
    </div>
  );
}

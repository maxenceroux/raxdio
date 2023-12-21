import React, { useState, useEffect } from "react";
import Header from "./Header";
import "../top.css";
import { useNavigate } from "react-router-dom";

const Top = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      console.log("resize", window.innerWidth, window.innerHeight);
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Background image dimensions
  const backgroundImageWidth = 1730;
  const backgroundImageHeight = 2230;

  // Desired relative position on the background image
  const relativeTop = 0.8; // 60% from the top
  const relativeLeft = 0.8; // 60% from the left

  // Calculate the position of .sp relative to the background image
  const calculatedTop =
    backgroundImageHeight * relativeTop - windowDimensions.width * 0.2; // Adjust according to your design
  const calculatedLeft =
    backgroundImageWidth * relativeLeft - windowDimensions.width * 0.2; // Adjust according to your design

  return (
    <div className="top">
      {/* <BI className="bi"></BI> */}
      <img src={require("../assets/top50.jpg")} alt="album" className="bi" />
      <iframe
        id="modern-cosmology"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/2uM4EXwzl5u57r2RTv4DeF?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="holy-tongue"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/1AfM1mYwdvA6mUatRtpGqx?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="rainy"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/0GBxJFUeukK1vriHac0vH8?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="trees"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/2UZ8ZMvtPXJwLDy8GCpjmu?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="tct"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/7GAK47rAg2VuMb47HOXdK2?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="dc"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/0K8ilc4W64ufB4mF1gorrU?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="cd"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/6AqOztIc5TIkuzMCKJGQMz?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="ziur"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/1qf4KAasBvFxiwsspl22WZ?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="pmx"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/7j3MhV070D35w53WSqvtLI?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="groupo"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/5sAKqIzPYQHmTPkMQNE0TI?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="dqnmm"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/7g0kxl7mi7E5YLKiDd1f5t?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="king"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/36tUlc8fGxaUTv4cLmC9UJ?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="exek"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/7Azpka2S3kSFHomalBZ0gj?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="hand"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/3tgPJNQ9mSKu8coHFbWQ1K?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="fp"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/59aHWd99RJNYovZdD1VMsm?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="bi"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/0Ihb9szHztEdXpHU7C40Qn?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="as"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/0JuR1CFbJDfGLdbqF5yc1o?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="tn"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/2onl84mqt63gcfmMeSGZPX?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="lh"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/3VaVfO7eUl24zzrtuayksx?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="lrain"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/2O01P3dwp47dyImCnTdfyo?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="jo"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/1cgPSwXdOm7k8TjJ1tJx5m?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="jb"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/5ZsaI40anT5k996hefFl51?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="rahill"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/2SAtIfz2jFRAn36xCUT8xd?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="sb"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/2jkSHAp9JNALyYXg9WQRfr?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="dnfb"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/5rbfKGLMRGjVVg2SIev0oi?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="tir"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/0kgD4sTUloCGUbDGyTxqV7?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="ftd"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/6YbDKbYLht2e5y3fXGfPyN?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="ale"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/7bPCjRsVo3sCZ2zMEPPkoA?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="tita"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/0fkpb1L4tISjGSYzjRkWOv?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="vz"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/4dxsHCE1N9S5CTHApseLiG?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="ea"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/0A9ESFH041eB4nKOh4JCJ0?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="sc"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/4z8dCJk0K0wWjE62iYAcHl?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="serg"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/5Tp8B33m8WrgInMpt9KCbO?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="scq"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/770XvZzNgIz4wGT4gUTrOW?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="lg"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/0lvtaVoxX5lGgRXmOCjS6p?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="mr"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/3q1hEZct2ZR75qQMbLTW1d?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="oo"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/2tr2kXZrYu5OcCwZ98jXSP?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="opn"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/2zz6j2mGH5JHk0ihNvy6KM?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="desca"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/7jhSHFst3jCbRlxwvWa7AX?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="com"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/7fP15oT6e3EY6f66cPWw6Q?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="nihil"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/0WKxwgv5fWKbPkNMyKU6gH?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="h31r"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/2YvlxeYiispMhbKHsrncK8?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="ar"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/2vCgya8b3OHWzQ3kPTod51?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="loop"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/2GlsG8Fp2byD9t4Nx3Xxw9?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="pj"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/7cXNHHYqe7HTSlxetc4faR?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="ie"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/1fBLeeAMPcrByMMDCKCcYB?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="fr"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/0GSARUUhweinQufLR663b4?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="mh"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/6XcMW80zSX5vkajVvesd87?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="mtts"
        className="sp sp-right"
        src="https://open.spotify.com/embed/album/4oqNidSgmpDNdm0XbRZuWu?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="bg"
        className="sp sp-left"
        src="https://open.spotify.com/embed/album/3ikz1DrVuK3gp5vanMKHR1?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Top;

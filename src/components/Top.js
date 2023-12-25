import React, { useState, useEffect } from "react";
import "../top.css";
import { Link } from "react-router-dom";

const Top = () => {
  const [isMobile, setIsMobile] = useState(false);
  const playerOptions = isMobile
    ? "size=small/bgcol=333333/linkcol=E3DFCF/transparent=true/"
    : "size=large/bgcol=333333/linkcol=E3DFCF/tracklist=false/artwork=small/transparent=true/";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define your mobile width breakpoint here
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for mobile view on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="top">
      {/* <BI className="bi"></BI> */}
      <img
        src={
          isMobile
            ? require("../assets/top50-mobile.jpg")
            : require("../assets/top50.jpg")
        }
        alt="album"
        className="bi"
      />
      <Link to="/">
        <div className={`raxdio up ${isMobile ? "mobile" : ""}`}>&lt;&lt;</div>
      </Link>
      <Link to="/">
        <div className={`raxdio bottom ${isMobile ? "mobile" : ""}`}>
          &lt;&lt;
        </div>
      </Link>

      <iframe
        id="modern-cosmology"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src="https://open.spotify.com/embed/album/2uM4EXwzl5u57r2RTv4DeF?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="holy-tongue"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=3846504640/${playerOptions}`}
      >
        <a href="https://amidahrecords.bandcamp.com/album/deliverance-and-spiritual-warfare">
          Deliverance And Spiritual Warfare de Holy Tongue
        </a>
      </iframe>
      <iframe
        id="rainy"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=932418145/${playerOptions}`}
      >
        <a href="https://rainymiller.bandcamp.com/album/a-grisaille-wedding-2">
          A Grisaille Wedding de Rainy Miller x Space Afrika
        </a>
      </iframe>

      <iframe
        id="trees"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src="https://open.spotify.com/embed/album/2UZ8ZMvtPXJwLDy8GCpjmu?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="tct"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=2716304609/${playerOptions}`}
      >
        <a href="https://taraclerkintrio.bandcamp.com/album/on-the-turning-ground">
          On The Turning Ground de Tara Clerkin Trio
        </a>
      </iframe>
      <iframe
        id="dc"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=1932747763/${playerOptions}`}
      >
        <a href="https://donnacandy.bandcamp.com/album/blooming">
          Blooming de Donna Candy
        </a>
      </iframe>
      <iframe
        id="cd"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=4192968985/${playerOptions}`}
      >
        <a href="https://charlenedarling.bandcamp.com/album/la-porte">
          La Porte de Charlène Darling
        </a>
      </iframe>
      <iframe
        id="ziur"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=836530939/${playerOptions}`}
      >
        <a href="https://hakunakulala.bandcamp.com/album/eyeroll">
          Eyeroll de Ziúr
        </a>
      </iframe>
      <iframe
        id="pmx"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=1464329498/${playerOptions}`}
      >
        <a href="https://perilazone.bandcamp.com/album/pmxper">
          pmxper de pmxper
        </a>
      </iframe>

      <iframe
        id="groupo"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src="https://open.spotify.com/embed/album/5sAKqIzPYQHmTPkMQNE0TI?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="dqnmm"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=1233627636/${playerOptions}`}
      >
        <a href="https://dilesquenomematen.bandcamp.com/album/obrigaggi">
          Obrigaggi de Diles Que No Me Maten
        </a>
      </iframe>
      <iframe
        id="king"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=2389977609/${playerOptions}`}
      >
        <a href="https://kingkrule.bandcamp.com/album/space-heavy">
          Space Heavy de King Krule
        </a>
      </iframe>
      <iframe
        id="exek"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=2287895171/${playerOptions}`}
      >
        <a href="https://exek.bandcamp.com/album/the-map-and-the-territory">
          The Map and the Territory de EXEK
        </a>
      </iframe>
      <iframe
        id="hand"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=2863083553/${playerOptions}`}
      >
        <a href="https://hand-model.bandcamp.com/album/will-life-reign-supreme-even-in-death">
          Will Life Reign Supreme Even In Death de hand model
        </a>
      </iframe>
      <iframe
        id="fp"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=2855837440/${playerOptions}`}
      >
        <a href="https://foreverpavot.bandcamp.com/album/lidiophone">
          L&#39;Idiophone de Forever Pavot
        </a>
      </iframe>
      <iframe
        id="bi"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=3372220128/${playerOptions}`}
      >
        <a href="https://baritalia.bandcamp.com/album/tracey-denim">
          Tracey Denim de bar italia
        </a>
      </iframe>
      <iframe
        id="as"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=2813601825/${playerOptions}`}
      >
        <a href="https://ahossan.bandcamp.com/album/rhizomes">
          Rhizomes de Aho Ssan
        </a>
      </iframe>
      <iframe
        id="tn"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=3643028464/${playerOptions}`}
      >
        <a href="https://telenovella.bandcamp.com/album/poets-tooth">
          Poet&#39;s Tooth de Tele Novella
        </a>
      </iframe>
      <iframe
        id="lh"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=4186401639/${playerOptions}`}
      >
        <a href="https://laurelhalo.bandcamp.com/album/atlas">
          Atlas de Laurel Halo
        </a>
      </iframe>
      <iframe
        id="lrain"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=1476236423/${playerOptions}`}
      >
        <a href="https://lrain.bandcamp.com/album/i-killed-your-dog">
          I Killed Your Dog de L&#39;Rain
        </a>
      </iframe>
      <iframe
        id="jo"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=2239254614/${playerOptions}`}
      >
        <a href="https://jonnine.bandcamp.com/album/maritz">
          Maritz de Jonnine
        </a>
      </iframe>
      <iframe
        id="jb"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=1266839691/${playerOptions}`}
      >
        <a href="https://intlanthem.bandcamp.com/album/fly-or-die-fly-or-die-fly-or-die-world-war">
          Fly or Die Fly or Die Fly or Die ((world war)) de jaimie branch
        </a>
      </iframe>
      <iframe
        id="rahill"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=456750992/${playerOptions}`}
      >
        <a href="https://rahill.bandcamp.com/album/flowers-at-your-feet">
          Flowers At Your Feet de Rahill
        </a>
      </iframe>
      <iframe
        id="sb"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=1535745321/${playerOptions}`}
      >
        <a href="https://stanleybrinks.bandcamp.com/album/good-moon">
          GOOD MOON de Stanley Brinks
        </a>
      </iframe>
      <iframe
        id="dnfb"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=862815257/${playerOptions}`}
      >
        <a href="https://prohibitedrecords.bandcamp.com/album/cover-songs-in-inferno">
          Cover Songs In Inferno de DON &amp; FRANÇOIZ
        </a>
      </iframe>
      <iframe
        id="tir"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=1570951667/${playerOptions}`}
      >
        <a href="https://tirzah.bandcamp.com/album/trip9love">
          trip9love...??? de Tirzah
        </a>
      </iframe>
      <iframe
        id="ftd"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=3311858024/${playerOptions}`}
      >
        <a href="https://fleshandthedream.bandcamp.com/album/choose-mortality">
          Choose Mortality de Flesh &amp; The Dream
        </a>
      </iframe>
      <iframe
        id="ale"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=3477019517/${playerOptions}`}
      >
        <a href="https://alehop.bandcamp.com/album/agua-dulce">
          Agua dulce de Ale Hop &amp; Laura Robles
        </a>
      </iframe>
      <iframe
        id="tita"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=3799908932/${playerOptions}`}
      >
        <a href="https://tinangelrecords.bandcamp.com/album/vidrio">
          Vidrio de Titanic
        </a>
      </iframe>
      <iframe
        id="vz"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=3680852569/${playerOptions}`}
      >
        <a href="https://ad93.bandcamp.com/album/suono-assente">
          Suono Assente de V/Z
        </a>
      </iframe>
      <iframe
        id="ea"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=1434000997/${playerOptions}`}
      >
        <a href="https://emilamos.bandcamp.com/album/zone-black">
          Zone Black de Emil Amos
        </a>
      </iframe>
      <iframe
        id="sc"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=1179411620/${playerOptions}`}
      >
        <a href="https://simocell.bandcamp.com/album/cuspide-des-sir-nes-album">
          Cuspide Des Sirènes (album) de Simo Cell
        </a>
      </iframe>
      <iframe
        id="serg"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=3213120926/${playerOptions}`}
      >
        <a href="https://stroomtv.bandcamp.com/album/sergeant">
          Sergeant de Sergeant
        </a>
      </iframe>
      <iframe
        id="scq"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=1746786823/${playerOptions}`}
      >
        <a href="https://speakerscornerquartet.bandcamp.com/album/further-out-than-the-edge-deluxe">
          Further Out Than The Edge (Deluxe) de Speakers Corner Quartet
        </a>
      </iframe>
      <iframe
        id="lg"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=572405158/${playerOptions}`}
      >
        <a href="https://lostgirls1000.bandcamp.com/album/selvutsletter">
          Selvutsletter de Lost Girls
        </a>
      </iframe>
      <iframe
        id="mr"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=3789585353/${playerOptions}`}
      >
        <a href="https://marleneribeiro.bandcamp.com/album/toquei-no-sol">
          Toquei no Sol de Marlene Ribeiro
        </a>
      </iframe>
      <iframe
        id="oo"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=4077541325/${playerOptions}`}
        seamless
      >
        <a href="https://otayonii.bandcamp.com/album/dream-hacker">
          夢之駭客 Dream Hacker de otay:onii
        </a>
      </iframe>
      <iframe
        id="opn"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=2963697263/${playerOptions}`}
        seamless
      >
        <a href="https://oneohtrixpointnever.bandcamp.com/album/again">
          Again de Oneohtrix Point Never
        </a>
      </iframe>
      <iframe
        id="desca"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=2947272894/${playerOptions}`}
      >
        <a href="https://descartesakant.bandcamp.com/album/after-destruction">
          After Destruction de Descartes a Kant
        </a>
      </iframe>
      <iframe
        id="com"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=3073047122/${playerOptions}`}
      >
        <a href="https://comfort-band.bandcamp.com/album/what-s-bad-enough">
          What’s Bad Enough? de comfort
        </a>
      </iframe>
      <iframe
        id="nihil"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=4073007018/${playerOptions}`}
      >
        <a href="https://nihiloxica.bandcamp.com/album/source-of-denial">
          Source of Denial de Nihiloxica
        </a>
      </iframe>
      <iframe
        id="h31r"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=4066732360/${playerOptions}`}
      >
        <a href="https://h31r.bandcamp.com/album/headspace">
          HeadSpace de H31R
        </a>
      </iframe>
      <iframe
        id="ar"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=504739552/${playerOptions}`}
      >
        <a href="https://hakunakulala.bandcamp.com/album/viral-wreckage">
          Viral Wreckage de Aunty Rayzor
        </a>
      </iframe>
      <iframe
        id="loop"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=1586426527/${playerOptions}`}
      >
        <a href="https://loopsel.bandcamp.com/album/ga-f-r-ga-eye-for-an-eye">
          Öga för Öga / Eye for an Eye de Loopsel
        </a>
      </iframe>
      <iframe
        id="pj"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=1636856067/${playerOptions}`}
      >
        <a href="https://disquesdelaspirale.bandcamp.com/album/parasite-jazz">
          Parasite Jazz de Parasite Jazz
        </a>
      </iframe>

      <iframe
        id="ie"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src="https://open.spotify.com/embed/album/1fBLeeAMPcrByMMDCKCcYB?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      ></iframe>
      <iframe
        id="fr"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=3218843639/${playerOptions}`}
      >
        <a href="https://feverray.bandcamp.com/album/radical-romantics">
          Radical Romantics de Fever Ray
        </a>
      </iframe>
      <iframe
        id="mh"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=2474763857/${playerOptions}`}
      >
        <a href="https://marinaherlop.bandcamp.com/album/nekkuja">
          Nekkuja de Marina Herlop
        </a>
      </iframe>
      <iframe
        id="mtts"
        className={`sp sp-right ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=710614797/${playerOptions}`}
      >
        <a href="https://missiontothesun.bandcamp.com/album/sophia-oscillations">
          Sophia Oscillations de Mission to the Sun
        </a>
      </iframe>
      <iframe
        id="bg"
        className={`sp sp-left ${isMobile ? "mobileImage" : ""}`}
        src={`https://bandcamp.com/EmbeddedPlayer/album=214373335/${playerOptions}`}
      >
        <a href="https://bendikgiske.bandcamp.com/album/bendik-giske">
          Bendik Giske de Bendik Giske
        </a>
      </iframe>
      <iframe
        id="sp_top_playlist"
        className={`${isMobile ? "mobileImage" : ""}`}
        src="https://open.spotify.com/embed/playlist/7Ftnk1Aes2BXDFRepiAbF7?utm_source=generator&theme=0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Top;

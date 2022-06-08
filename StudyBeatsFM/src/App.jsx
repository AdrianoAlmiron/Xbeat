import "./styles/index.css";
import "./styles/audioControl.css";
import { useState } from "react";
import AdditionSettings from "./components/additionalInfo";
import PauseImage from "./components/pauseImage";
import Loading from "./components/loadingImage";
import RadioStations from "./components/radioStations";
import github from "./images/github.png";
import play from "./images/playBtn.png";
import AudioControls from "./components/audioControl";
import pauseImg from "./images/pause.png";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";


function App() {
  const [BtnClass, setBtnClass] = useState("PlayPause"); //pause play change
  const [BtnClass2, setBtnClass2] = useState("playBtn");
  const [playPauseImg, setPlayPause] = useState(play);

  const [livestream, playLiveStream] = useState(false);
  const [pauseScreen, setPauseScreen] = useState("pauseScreen");
  const [currentLivestream, setLivestream] = useState(
    "https://www.youtube.com/watch?v=oIX2hzMndi8"
  );

  const [stationName, setStationName] = useState("lo ultimo");


  const [youtubeChannal, setYoutubeChannal] = useState("");

  const handlePausePlaySwitch = (e) => {
    let className = e.target.className;

    if (className === "PlayPause" || className === "playBtn") {
      setPlayPause(pauseImg);
      setBtnClass("PlayPause2");
      setBtnClass2("playBtn2");
      start();
    } else if (className === "PlayPause2" || className === "playBtn2") {
      setPlayPause(play);
      setBtnClass("PlayPause");
      setBtnClass2("playBtn");
      pause();
    }
  };

   

  const start = () => {
    playLiveStream(false);
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
  };

  const pause = () => {
    setPauseScreen("pauseScreen");
    playLiveStream(false);
  };

  const [video, setVideo] = useState(
    `//https://www.youtube.com/watch?v=V8Zm9RalKYs`
  );

  // <------------- Radio Change section -------------->

  const LofiGirlVideo = () => {
    setVideo("//https://www.youtube.com/watch?v=aIIq_BK-ovE");
    setStationName("Hip hop 90/00");
    setYoutubeChannal(
      "https://www.youtube.com/watch?v=aIIq_BK-ovE"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=aIIq_BK-ovE"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const AmbientRenders = () => {
    setVideo("https://www.youtube.com/watch?v=fOW8Y09GVek");
    setStationName("Lo mas Nuevo");
    setYoutubeChannal(
      "https://www.youtube.com/watch?v=j_iiXf45soY0"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=j_iiXf45soY"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const IvyRecords = () => {
    setVideo("//https://www.youtube.com/watch?v=GfPaK3XTWp0");
    setStationName("trap argentino");
    setYoutubeChannal(
      "https://www.youtube.com/watch?v=l_o8LvcSEto"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=l_o8LvcSEto"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const ChillHiphop = () => {
    setVideo("//https://www.youtube.com/watch?v=kn8rFNTH48c");
    setStationName("Cumbia clasicos");
    setYoutubeChannal("https://www.youtube.com/watch?v=PKaP9Pijpm8");
    setLivestream(
      "https://www.youtube.com/watch?v=https://www.youtube.com/watch?v=PKaP9Pijpm8&ab_channel=ChillhopMusic"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const HFiveGOneFunc = () => {
    setVideo("//https://www.youtube.com/watch?v=SlupDrydpK8");
    setStationName("Trap international");
    setYoutubeChannal(
      "https://www.youtube.com/watch?v=CR-SzHNTpsE"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=CR-SzHNTpsE"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const StudyMD = () => {
    setVideo("//https://www.youtube.com/watch?v=wHn1_QVoXGM");
    setStationName("Tn Noticias");
    setYoutubeChannal(
      "https://www.youtube.com/watch?v=wHn1_QVoXGMg"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=wHn1_QVoXGM"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const astralThrob = () => {
    setVideo("//https://www.youtube.com/watch?v=Wjt6yyNDWmc");
    setStationName("reggaeton clasicos");
    setYoutubeChannal("https://www.youtube.com/watch?v=n9TBm8L909U");
    setLivestream(
      "https://www.youtube.com/watch?v=n9TBm8L909U"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const chilledCow = () => {
    setVideo("//https://www.youtube.com/watch?v=gQlUknjUX0I");
    setStationName("Electro house");
    setYoutubeChannal("https://www.youtube.com/watch?v=gQlUknjUX0I");
    setLivestream(
      "https://www.youtube.com/watch?v=gQlUknjUX0Il"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const theJazzHopCafe = () => {
    setVideo("//https://www.youtube.com/watch?v=2ZeafVW_r6A");
    setStationName("FMS EN VIVO");
    setYoutubeChannal("https://www.youtube.com/watch?v=2ZeafVW_r6A");
    setLivestream(
      "https://www.youtube.com/watch?v=2ZeafVW_r6A"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const Spinnin = () => {
    setVideo("//www.youtube.com/embed/N65Jb683pXQ?autoplay=1&mute=1&start=0");
    setStationName("Spinnin' Records");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCpDJl2EmP7Oh90Vylx0dZtA"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=N65Jb683pXQ&ab_channel=Spinnin%27Records"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const NiceGuys = () => {
    setVideo("//www.youtube.com/embed/3n1aC2TYXIA?autoplay=1&mute=1&start=1");
    setStationName("Nice Guys");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCMmt12UKW571UWtJAgWkWqg"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=oVi5gtzTDx0&ab_channel=NiceGuys"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const animeVibe = () => {
    setVideo("//https://www.youtube.com/watch?v=5shZONnYHcw");
    setStationName("Rkt turreo");
    setYoutubeChannal("https://www.youtube.com/watch?v=5shZONnYHcw");
    setLivestream(
      "https://www.youtube.com/watch?v=xivcHN2hxaM"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  return (
    <div className="interfaceContainer">
      <div className="radioContainer">
        <div className="logo">xbeat studio</div>
        <div className="subHeading"></div>
        <div className="radioStationsContainer">
          <RadioStations
            Ambient={AmbientRenders}
            Anime={animeVibe}
            Astral={astralThrob}
            ChillHop={ChillHiphop}
            Cow={chilledCow}
            Spinnin={Spinnin}
            Ivy={IvyRecords}
            High={HFiveGOneFunc}
            Lofi={LofiGirlVideo}
            Study={StudyMD}
            Jazz={theJazzHopCafe}
            Nice={NiceGuys}
          />
        </div>
        <div className="socialsContainer2">
          <div className="socials">
            
          </div>
        </div>
      </div>
      <div className="audioControlContainer">
        <AudioControls
        plauPause={handlePausePlaySwitch}
        buttonClass={BtnClass}
        playPauseImage={playPauseImg}
        buttonClass2={BtnClass2}
        LiveStreamAudio={currentLivestream}
        LiveStreamPlayPause={livestream}
        />
      </div>
      <div className={pauseScreen}>
        <PauseImage />
        <p style={{ marginTop: "0rem" }}>Music Paused</p>
      </div>
      <AdditionSettings youtube={youtubeChannal} radio={stationName} />
      <div class="videoContainer">
        <ReactPlayer
          className="vid"
          width="140%"
          height="140%"
          loop="true"
          playing={livestream}
          volume="mute"
          url={video}
        />
      </div>

      

      <Loading />
    </div>
  );
}

export default App;

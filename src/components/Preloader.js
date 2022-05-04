import "../styles/Preloader.css";
import PreloaderImg from "../images/preloader-img.png";
const Preloader = () => {
  return (
    <div className="preloader-container">
      <img src={PreloaderImg} alt="preloader-img" />
    </div>
  );
};

export default Preloader;

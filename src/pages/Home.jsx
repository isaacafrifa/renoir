import "../assets/css/home.css";
import logo from "../../public/brand.svg";


const Home = () => {
  return (
    <div className="background-container">
      
      <div className="text-overlay">
        <img src={logo} 
        width="80" height="80" 
        alt="Restaurant Logo" />
        <h1 className="animate__animated animate__fadeInDown">Renoir</h1>
        <p className="animate__animated animate__fadeInDown">
          Renoir is an afro-french restaurant that serves authentic and
          delicious local and continental dishes.
        </p>
      </div>
    </div>
  );
};

export default Home;

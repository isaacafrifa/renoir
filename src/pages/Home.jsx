import logo from "../assets/images/brand.svg";
import useShowBackground from "../hooks/useShowBackground";

const Home = () => {
  const showBackground = useShowBackground();

  return (
    <div
      className={
        showBackground ? "background-container show" : "background-container"
      }>
      <div className="text-overlay">
        <img src={logo} width="80" height="80" alt="Restaurant Logo" />
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

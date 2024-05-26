import "../assets/css/menu.css"
import { Button } from "react-bootstrap";
import { RENOIR_MENU_URL } from "../constants/urls";
import useShowBackground from "../hooks/useShowBackground";

const Menu = () => {
  const showBackground = useShowBackground();

  return (
    <div className={
      showBackground ? "background-container show" : "background-container"
    }>
      <div className="text-overlay">
        <h1 className="animate__animated animate__fadeInDown">Menu</h1>
        <p className="animate__animated animate__fadeInDown">
          At Renoir, we believe that exceptional food starts with the finest ingredients. 
          That is why we source our produce from local farms. 
          From savoury dishes to fresh juice, our menu celebrates the 
          diversity of food with an African touch.
        </p>
        <Button href={RENOIR_MENU_URL}  variant="outline-success" className="btn animate__animated animate__fadeInDown animate__slow" target="_blank" rel="noopener noreferrer">
          View Menu
        </Button>
      </div>
    </div>
  );
}

export default Menu
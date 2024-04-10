import "../assets/css/genericcard.css";

export default function GenericCard({ icon, title, description, extra }) {
  return (
    <div className="card d-flex flex-column justify-content-center align-items-center">
      <div className="animate__animated animate__fadeInDown animate__slow">
      {icon}
      <h5>{title}</h5>
      <p className="no-spacing">{description}</p>
      <p>{extra}</p>
      </div>
      
    </div>
  );
}

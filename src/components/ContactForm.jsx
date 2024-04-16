import { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [isLoading, setLoading] = useState(false);
  const { register, errors, handleSubmit, reset } = useForm();
  const toastifySuccess = () => {
    console.log("Message Sent");
  };

  const onSubmit = async (data) => {
    /* No need to escape script tags, emailJS handles it by escaping them automatically*/
    setLoading(true);
    try {
      const messageParams = {
        name: data.name,
        email: data.email,
        message: data.message,
      };
      console.log("Data: " + messageParams);
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <form className="contact-card">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <p className="text-center animate__animated animate__fadeInDown">For reservations and other enquiries,</p>
        <h5 className="animate__animated animate__fadeInDown">send us a message</h5>

        <div className="form-group animate__animated animate__fadeInDown">
          <label htmlFor="Name" className="form-label">
            Name <span className="asterisks">*</span>
          </label>
          <div className="form-input-group">
            <input type="text" name="name" className="form-control" required />
          </div>
        </div>

        <div className="form-group animate__animated animate__fadeInDown">
          <label htmlFor="Email" className="form-label">
            Email Address <span className="asterisks">*</span>
          </label>
          <div className="form-input-group">
            <input type="email" name="email" className="form-control" required />
          </div>
        </div>

        <div className="form-group animate__animated animate__fadeInDown">
          <label htmlFor="Phone" className="form-label">
            Phone <span className="asterisks">*</span>
          </label>
          <div className="form-input-group">
            <input type="tel" name="phone" className="form-control" required />
          </div>
        </div>

        <div className="form-group animate__animated animate__fadeInDown">
          <label htmlFor="Message" className="form-label">
            Message <span className="asterisks">*</span>
          </label>
          <div className="form-input-group">
            <textarea
              name="message"
              className="form-control"
              rows="6"
              maxLength="1000"
              placeholder="max characters: 1000"
            ></textarea>
          </div>
        </div>
        <div className="form-group">
          <Button
            type="submit"
            variant="outline-success"
            className="form-button animate__animated animate__fadeInDown">
            {isLoading ? "Loading…" : "Send"}
          </Button>
        </div>
      </form>
    </form>
  );
}

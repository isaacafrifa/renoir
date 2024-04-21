import { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export default function ContactForm() {
  const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const toastifySuccess = () => {
    toast.success("Message sent", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      toastId: "notify-toast",
    });
  };
  const toastifyFailure = () => {
    toast.error("Message not sent", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      toastId: "notify-toast",
    });
  };

  const onSubmit = async (data) => {
    if (data.verification) {
      // Handle bot submission (e.g., display an error message)
      toastifyFailure();
      console.error("Potential bot submission detected!");
      return;
    }

    setLoading(true);
    try {
      const messageParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      };
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        messageParams, 
        {
        publicKey: import.meta.env.VITE_USER_ID,
      }
    );
      reset();
      toastifySuccess();
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
      } else {
        console.log(err);
      }
      toastifyFailure();
    }
    setLoading(false);
  };

  return (
    <>
      <form className="contact-card" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-center animate__animated animate__fadeInDown">
          For reservations and other enquiries,
        </p>
        <h5 className="animate__animated animate__fadeInDown">
          send us a message
        </h5>

        <input
          type="text"
          className="verification"
          {...register("verification", { required: false })}
        />

        <div className="form-group animate__animated animate__fadeInDown">
          <label htmlFor="Name" className="form-label">
            Name <span className="asterisks">*</span>
          </label>
          <div className="form-input-group">
            <input
              type="text"
              className="form-control"
              {...register("name")}
              maxLength="30"
              title="Field cannot exceed 30 characters"
              required
            />
          </div>
        </div>

        <div className="form-group animate__animated animate__fadeInDown">
          <label htmlFor="Email" className="form-label">
            Email Address <span className="asterisks">*</span>
          </label>
          <div className="form-input-group">
            <input
              type="email"
              className="form-control"
              {...register("email")}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              required
            />
          </div>
        </div>

        <div className="form-group animate__animated animate__fadeInDown">
          <label htmlFor="Phone" className="form-label">
            Phone <span className="asterisks">*</span>
          </label>
          <div className="form-input-group">
            <input
              type="tel"
              className="form-control"
              {...register("phone")}
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
              required
            />
          </div>
        </div>

        <div className="form-group animate__animated animate__fadeInDown">
          <label htmlFor="Message" className="form-label">
            Message <span className="asterisks">*</span>
          </label>
          <div className="form-input-group">
            <textarea
              className="form-control"
              rows="6"
              maxLength="1000"
              placeholder="max characters: 1000"
              {...register("message")}
              title="Field cannot exceed 1000 characters"
              required
            ></textarea>
          </div>
        </div>

        <div className="form-group">
          <Button
            type="submit"
            variant="outline-success"
            className="form-button animate__animated animate__fadeInDown"
          >
            {isLoading ? "Loading…" : "Send"}
          </Button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}

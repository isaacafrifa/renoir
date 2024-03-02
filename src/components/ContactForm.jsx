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
        setLoading(true)
        try {
            const messageParams = {
                name: data.name,
                email: data.email,
                message: data.message
            };
            console.log("Data: "+messageParams);
            reset();
            toastifySuccess();
        }
        catch (e) {
            console.log(e);
        }
        setLoading(false);
    };


  return (

    
    <div className="contact-form-card">
      
      <form onSubmit={handleSubmit(onSubmit)} noValidate>

        <div className="fcf-form-group animate__animated animate__fadeInDown">
                                <label htmlFor="Name" className="fcf-label">Name <span className="asterisks">*</span></label>
                                <div className="fcf-input-group">
                                    <input type="text"
                                        name="name" className="fcf-form-control"
                                        required
                                        // ref={register({
                                        //     required: { value: true, message: 'Please enter your name' },
                                        //     maxLength: {
                                        //         value: 30,
                                        //         message: 'Please use 30 characters or less'
                                        //     }
                                        // })}
                                    />
                                    {/* {errors.name && <span className='form-error'>{errors.name.message}</span>} */}
                                </div>
                            </div>


                            <div className="fcf-form-group animate__animated animate__fadeInDown">
                                <label htmlFor="Email" className="fcf-label">Email Address <span className="asterisks">*</span></label>
                                <div className="fcf-input-group">
                                    <input type="email" name="email"
                                        className="fcf-form-control"
                                        // ref={register({
                                        //     required: true,
                                        //     pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                        // })}
                                    />
                                    {/* {errors.email && (
                                        <span className='form-error'>Please enter a valid email address</span>
                                    )} */}
                                </div>
                            </div>

                            <div className="fcf-form-group animate__animated animate__fadeInDown">
                                <label htmlFor="Message" className="fcf-label">Message <span className="asterisks">*</span></label>
                                <div className="fcf-input-group">
                                    <textarea
                                        name="message" className="fcf-form-control"
                                        rows="6" maxLength="1000"
                                        placeholder="max characters: 1000"
                                        // ref={register({
                                        //     required: true, maxLength: 1000
                                        // })}
                                    ></textarea>
                                    {/* {errors.message && errors.message.type === "required" && <span className='form-error'>Please enter a message</span>}
                                    {errors.message && errors.message.type === "maxLength" && <span className='form-error'>Max length exceeded</span>} */}
                                </div>
                            </div>

      <div className="fcf-form-group">
                                <Button type="submit" id="fcf-button"
                                variant="outline-success"
                                className="animate__animated animate__fadeInDown">
                                    {isLoading ? 'Loading…' : 'Send Message'}
                                </Button>
                            </div>
      </form>
    </div>
  );
}

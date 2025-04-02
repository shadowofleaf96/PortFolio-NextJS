import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Typography, Alert } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactMe = () => {
  const [alert, setAlert] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/send-email', data);

      if (response.status === 200) {
        setAlert({ severity: "success", message: "Email sent successfully!" });
        reset();
      } else {
        setAlert({ severity: "error", message: "Failed to send email. Please try again." });
      }
    } catch (error) {
      setAlert({ severity: "error", message: "An error occurred. Please try again later." });
    }

    setTimeout(() => setAlert(null), 5000);
  };


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      direction="column"
      id="contact-me"
      className="space-y-2 items-center justify-center"
      style={{ borderRadius: "5px", marginBottom: "50px", pointerEvents: "auto" }}
    >
      <div className="w-full p-5" style={{ textAlign: "center" }}>
        <div>
          <h1 className="underline text-center dark:text-white font-medium text-4xl md:text-5xl font-poppins">
            Contact Me
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center mt-12"
            noValidate
          >
            <div className="md:w-4/5 lg:w-3/4 xl:w-2/3">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:mr-2">
                  <input
                    id="firstName"
                    {...register("firstName")}
                    type="text"
                    className="my-2 py-2 px-4 rounded-md text-gray-900 bg-white w-full outline-none focus:ring-2 focus:ring-second"
                    placeholder="First Name"
                    aria-invalid={errors.firstName ? "true" : "false"}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm text-left">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="w-full md:w-1/2 md:ml-2">
                  <input
                    id="lastName"
                    {...register("lastName")}
                    type="text"
                    className="my-2 py-2 px-4 rounded-md text-gray-900 bg-white w-full outline-none focus:ring-2 focus:ring-second"
                    placeholder="Last Name"
                    aria-invalid={errors.lastName ? "true" : "false"}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm text-left">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className="my-2 py-2 px-4 rounded-md text-gray-900 bg-white w-full outline-none focus:ring-2 focus:ring-second"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm text-left">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <textarea
                  id="message"
                  {...register("message")}
                  rows="5"
                  placeholder="Your Message"
                  className="my-2 py-2 px-4 rounded-md text-gray-900 bg-white w-full outline-none focus:ring-2 focus:ring-second"
                  aria-invalid={errors.message ? "true" : "false"}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm text-left">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              ripple={true}
              className="font-poppins mx-2 flex items-center justify-center w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mt-4 bg-second text-white border-2 border-second hover:bg-green-500 hover:border-green-500 transition duration-300 mb-4 md:mr-2 dark:bg-second dark:hover:bg-green-500 dark:text-gray-200 dark:hover:border-green-500"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>

      {alert && (
        <Alert
          color={alert.severity === "success" ? "green" : "red"}
          borderLeft
          role="alert"
          open={!!alert}
          onClose={() => setAlert(null)}
          className="w-1/3 flex items-center justify-start"
        >
          {alert.message}
        </Alert>
      )}
    </div>
  );
};

export default ContactMe;
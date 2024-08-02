import React, { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

  const validate = () => {
    const errors = {};
    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!phone.trim()) errors.phone = "Phone number is required";
    if (!message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setResult("Sending....");
      const formData = new FormData(e.target);
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (data.success) {
          setResult("Form Submitted Successfully");
          // Reset form fields
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setErrors({});
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setResult("An error occurred. Please try again.");
      }
    } else {
      // Set validation errors
      setErrors(errors);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="lg:py-16 h-auto max-w-7xl py-20 px-4 lg:px-8 mx-auto gap-5">
        <h1 className="text-5xl font-bold text-center">
          Let's talk about
          <br /> your project
        </h1>
        <p className="lg:mb-16 pt-10 text-center font-extrabold text-gray-500 dark:text-gray-500 sm:text-xl">
          Drop us a line through the form below and we'll get back to you
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 pt-5 md:pt-7 sm:pt-5 gap-5">
            <div>
              <input
                type="text"
                id="first-name"
                name="firstName"
                className={`shadow-sm bg-gray-50 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-sm rounded-lg f-500 block w-full p-2.5`}
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                id="last-name"
                name="lastName"
                className={`shadow-sm bg-gray-50 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light`}
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                className={`shadow-sm bg-gray-50 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white `}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } shadow-sm   dark:shadow-sm-light`}
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <textarea
              id="message"
              name="message"
              rows="6"
              className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border ${
                errors.message ? "border-red-500" : "border-gray-300"
              }     `}
              placeholder="Leave a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#01055b] sm:w-fit hover:bg-primary-800"
          >
            Send message
          </button>
        </form>
        {result && (
          <p className="mt-4 text-center text-green-600 font-medium">
            {result}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;

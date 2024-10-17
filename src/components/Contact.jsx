import React from "react";

import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-bg-image bg-cover bg-center ">
      <main className="flex-grow">
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;

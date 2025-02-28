import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name" 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Contact Name"
        />
        <input
          name="phone" 
          type="tel" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Contact Phone"
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        />
        <input
          name="email" 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Contact Email"
        />
      </form>
    </>
  );
};


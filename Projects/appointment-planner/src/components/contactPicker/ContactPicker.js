import React from "react";

export const ContactPicker = ({ value, name, contacts, onChange }) => {
  return (
    <>
    <select value={value} name={name} onChange={onChange}>
      <option value={""} key={-1}>
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
    </>
  );
};

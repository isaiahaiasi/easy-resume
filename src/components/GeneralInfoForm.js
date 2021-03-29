import React from "react";
import { useFormInput } from "../hooks/input-hooks";
import Input from "./general/Input";

export default function GeneralInfoForm({ data, onSubmit, onCancel }) {
  const firstName = useFormInput(data.firstName); // =>[value, onChange]
  const lastName = useFormInput(data.lastName);
  const location = useFormInput(data.contactInfo.location);
  const email = useFormInput(data.contactInfo.email);
  const phone = useFormInput(data.contactInfo.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      firstName: firstName.value,
      lastName: lastName.value,
      contactInfo: {
        location: location.value,
        email: email.value,
        phone: phone.value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="firstName" label="First name:" {...firstName} />
      <Input name="lastName" label="Last name:" {...lastName} />
      <Input type="tel" name="phone" label="Phone number:" {...phone} />
      <Input type="email" name="email" label="Email" {...email} />
      <Input name="location" label="Location" {...location} />
      <input type="submit" value="Save changes" />
      <button type="button" onClick={onCancel}>
        cancel
      </button>
    </form>
  );
}

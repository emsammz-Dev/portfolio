import { Metadata } from "next";
import ContactCompOne from "./contact-components/contact-compone";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <ContactCompOne />
    </>
  );
}

import { Metadata } from "next";
import AboutCompOne from "./about-components/about-compone";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <AboutCompOne />
    </>
  );
}

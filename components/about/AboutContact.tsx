import ContactForm from "../contact/ContactForm";
import AboutContactLastWord from "./AboutContactLastWord";

const AboutContact = () => {
  return (
    <section id="contact" className={`py-12 gap-12`}>
      <AboutContactLastWord />
      <ContactForm />
    </section>
  );
};

export default AboutContact;

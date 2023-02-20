import ContactDetails from "./contact/ContactDetails";
import ContactForm from "./contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className={`py-12 gap-12`}>
      <ContactDetails />
      <ContactForm />
    </section>
  );
};

export default Contact;

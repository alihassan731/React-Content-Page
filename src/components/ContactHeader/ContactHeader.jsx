import styles from "./ContactHeader.module.css";
const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section}`} >
        <h1>CONTACT US</h1>
        <p>A contact page should provide visitors with clear instructions on how to get in touch with your business. This includes a contact form, additional contact information (e.g., phone number, email address), and a brief introduction or message that highlights your commitment to customer service.</p>
    </div>
  )
}

export default ContactHeader
import { MdCall, MdMessage, MdOutlineMail } from "react-icons/md"
import Button from "../Button/Button"
import styles from "./Contact.module.css"
import { useState } from "react";
const ContactForm = () => {
  // use State Hook 
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();


  // comment because it work using useStateHook 
  // let name;
  // let email;
  // let text;

  const onSubmit = (event) =>{
    event.preventDefault(); // use for Page Not refresh
    

    // for extract value from console 
    // console.log("name",event.target[0].value);
    // console.log("email",event.target[1].value);
    // console.log("text",event.target[2].value);
    // for name using useState 
    // name = event.target[0].value;

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    // comment because it work using useStateHook
    // name = event.target[0].value;
    // email = event.target[1].value;
    // text = event.target[2].value;
    // console.log({
    //   name,
    //   email,
    //   text,
    // })
  }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SURRORT CHAT"
            icon={<MdMessage fontSize="24PX" />}
          />
          <Button
            text="VIA CALL"
            icon={<MdCall fontSize="24PX" />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineMail fontSize="24PX" />}
        />
        <form onSubmit={onSubmit}>

          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="6"/>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'end'
          }}>
            <Button
              text="SUBMIT BUTTON"
            />
          </div>
          <div>{name + " "+ email + " " + text}</div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="Contact Image" />
      </div>
    </section>
  )
}

export default ContactForm
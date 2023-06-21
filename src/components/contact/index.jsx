import { Heading } from '../heading'
// import {FormModal} from '../form-modal';
import './styles.css'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

// import { useState } from 'react';

export function Contact() {
  // the modal is no longer needed because I decided to use the 'mailto:' component instead. I wouuld have to create a backend just to retrieve the message from the user
  // const [isFormVisible, setIsFormVisible] =useState(false);

  // const handleWriteMessage =() => {
  //   setIsFormVisible(true);
  // }
  // const onClose = () => {
  //   setIsFormVisible(false);
  // }

  return (
    <section id="contact">
      <Heading title="Contact" />
      <div>
        <p>
          I am currently seeking employment, so if you have a job or project
          offer, or if you need more information, please do not hesitate to
          contact me.
        </p>

        <a
          href="mailto:isaaccna.007@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button">Write Message</button>
        </a>

        {/* {isFormVisible && <FormModal onClose={onClose} />} */}

        <div id="medias">
          <a
            href="https://github.com/Isaaccna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={32} color="var(--primary-text-color)" />
          </a>
          <a
            href="https://www.linkedin.com/in/isaac-andrade-74843a79/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={32} color="var(--primary-text-color)" />
          </a>
        </div>
      </div>
    </section>
  )
}

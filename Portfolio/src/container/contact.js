import React from "react";
import Contact from "../components/contact";

export default function ContactContainer() {
  return (
    <Contact>
      <Contact.Title>Leave a Message!</Contact.Title>
        <Contact.Group>
          <Contact.Input small placeholder="Your name:" />
          <Contact.Input small placeholder="Email:" />
        </Contact.Group>
        <Contact.Group>
          <Contact.Input large placeholder="Subject" />
        </Contact.Group>
        <Contact.Group>
          <Contact.Input area placeholder="Your message:" />
        </Contact.Group>
        <Contact.Group>
        <Contact.Button>SEND MESSAGE</Contact.Button>
        </Contact.Group>

    </Contact>
  );
}

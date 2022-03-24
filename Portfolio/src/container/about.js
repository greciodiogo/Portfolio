import React from "react";
import { About } from "../components";

export default function AboutContainer() {
  return (
    <About>
      <About.ContainerInside>
        <About.Picture />
      </About.ContainerInside>
      <About.ContainerInside>
        <About.Title>
          Hello! I'm Grécio Diogo, A Front-End Developer From Luanda, Angola
        </About.Title>
        <About.Text>
          Through ISPTEC. I have deveped a strong understanding of javaScript
          (ES5 & ES6), React js, React Native, Next, Redux, Firebase, HTML and
          CSS3. As a developer, I find a lot of joy and excitement utilizing my
          skills to help troubleshoot bugs and pushing projects forward using
          these technologies and growing in a field that is constantly being
          changing.
        </About.Text>
        <About.Text>
          Through ISPTEC. I have developed a strong understanding of javaScript
          (ES5 & ES6), React js, React Native, Next, Redux, Firebase, HTML and
          CSS3. As a developer, I find a lot of joy and excitement utilizing my
          skills to help troubleshoot bugs and pushing projects forward using
          these technologies and growing in a field that is constantly being
          changing.
        </About.Text>
        <About.Text>
          Feel free to connect with me! Let's talk about web dev, sports,
          financial and investments or how I can be of help to your team or
          business. I'd love to increase and expand my network. I Know that with
          your help I will be a better programmer and I'll be greater.
        </About.Text>
        <About.Text bold>Let's build something good</About.Text>
        <About.Group>
          <About.Link title>Mail:</About.Link>
          <About.Link desc>fonebahia8@gmail.com</About.Link>
        </About.Group>
        <About.Group>
          <About.Link title>Phone:</About.Link>
          <About.Link desc>+244932193398</About.Link>
        </About.Group>
        <About.Group>
          <About.Link title>Github:</About.Link>
          <About.Link desc>https://github.com/grciossantos8</About.Link>
        </About.Group>
        <About.Button>Resume</About.Button>
      </About.ContainerInside>
    </About>
  );
}

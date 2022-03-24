import React from 'react'
import {Header} from '../components'
import Typewriter from "typewriter-effect"

export default function HeaderContainer() {
  return (
    <Header src='image3'>
      <Header.Frame>
          <Header.Logo src="logo2"/>
          <Header.FrameRight>
              <Header.Link>Home</Header.Link>
              <Header.Link>About</Header.Link>
              <Header.Link>Projects</Header.Link>
              <Header.Link>Skills</Header.Link>
              <Header.Link>Tools</Header.Link>
              <Header.Link>Contact</Header.Link>
          </Header.FrameRight>
      </Header.Frame>
      <Header.BigText>GRÉCIO DIOGO SANTOS</Header.BigText>
      <Header.TextTransition>
            <Typewriter  
                options={{
                    strings:["Front-End Developer","Frameworker Explorer","Projects Lover"],
                    autoStart: true,
                    loop: true,
                }}
            />          
      </Header.TextTransition>
      <Header.Button>Resume</Header.Button>
    </Header>
  )
}

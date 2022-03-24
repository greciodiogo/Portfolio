import React from 'react'
import AboutContainer from '../container/about'
import ContactContainer from '../container/contact'
import FooterContainer from '../container/footer'
import HeaderContainer from '../container/header'
import SkillsContainer from '../container/skills'
import ToolsContainer from '../container/tools'

export default function Homepage() {
  return (
    <>
      <HeaderContainer/>
      <AboutContainer/>
      <SkillsContainer/>
      <ToolsContainer/>
      <ContactContainer/>
      <FooterContainer/>
    </>
  )
}

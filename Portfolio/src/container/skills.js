import React from "react";
import { Specif } from "../components";
import languages from '../fixture/languages.json'

export default function SkillsContainer() {
  return (
    <Specif>
      <Specif.Title>Skills</Specif.Title>
      <Specif.SubTitle>
        Languages and technologies that I have learned and aplied to my projects
      </Specif.SubTitle>
      <Specif.Technologies>
          {languages.map((item,index) => (
        <Specif.Group key={index}>
          <Specif.Icon src={item.image}/>
          <Specif.Label>{item.title}</Specif.Label>
        </Specif.Group>
        ))}
      </Specif.Technologies>
    </Specif>
  );
}

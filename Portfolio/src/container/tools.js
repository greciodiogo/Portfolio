import React from "react";
import { Specif } from "../components";
import tecs from '../fixture/tecs.json'

export default function ToolsContainer() {
  return (
    <Specif>
      <Specif.Title>Tools</Specif.Title>
      <Specif.SubTitle>
        My weapons of choice to help tackle any project
      </Specif.SubTitle>
      <Specif.Technologies>
          {tecs.map((item,index) => (
        <Specif.Group key={index}>
          <Specif.Icon src={item.image}/>
          <Specif.Label>{item.title}</Specif.Label>
        </Specif.Group>
        ))}
      </Specif.Technologies>
    </Specif>
  );
}

import React, { useEffect, useState } from "react";
import { Container, FormHelperText } from "@material-ui/core";
import {
  PositionSubHeader,
  InputFormJobHeader,
  LengthSubHeader,
  Stepper,
} from "../../molecules/index";
import "./styles/CreateJobHeader.css";

function CreateJobHeader(props) {
  const keysList = props.keysList;
  const [header, setHeader] = useState({
    title: "",
    company: "",
    location: "",
    startDate: "",
    position: [],
    length: "",
  });

  useEffect(() => {
    props.jobData.header = header;
  });

  if (props.currentStep !== 1) {
    return null;
  } else {
    return (
      <div className="create_form_container">
        <Container
          maxWidth="md"
          className={"container"}
        >
          <Stepper stepNumber={0} />
          <div className="create_job_header_container">
            <h1>1. Create a Job Header</h1>
            <InputFormJobHeader 
            handleChange={setHeader} 
            jobData={header}
            keysList={keysList}
            updateKeysList={props.updateKeysList}
            updateKeysText={props.updateKeysText}
            />
            <LengthSubHeader 
            handleChange={setHeader} 
            jobData={header}
            keysList={keysList}
            updateKeysList={props.updateKeysList}
            updateKeysText={props.updateKeysText}
            />
            <FormHelperText>Required</FormHelperText>
            <PositionSubHeader 
            handleChange={setHeader} 
            jobData={header}
            keysList={keysList}
            updateKeysList={props.updateKeysList}
            updateKeysText={props.updateKeysText} 
            />
            <FormHelperText>Required</FormHelperText>
          </div>
        </Container>
      </div>
    );
  }
}

export default CreateJobHeader;
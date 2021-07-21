import React from 'react';
import { ChipBasic } from "../atoms/index";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import './styles/RegisteredKeys.css';

const RegisteredKeys = (props) => {
    const registeredKeys = props.jobs.registeredKeys;

    return (
        <div className="RegisteredKeys">
          <div className="registered_keys_container">
          {Object.keys(registeredKeys).map(key => {
              const current = registeredKeys[key];
              if(Array.isArray(current)){
                const result = current.map(ele => {
                  return (
                   <ChipBasic label={ele} key={uuidv4()}/>
                  )
                });
                return result;
              } else {
                return (
                  <ChipBasic label={current} key={uuidv4()}/>
                );
              }
          })}
          </div>
        </div>
    );

}


function mapStateToProps(state) {
  return {
    jobs: state.jobs,
  };
}

export default connect(mapStateToProps)(RegisteredKeys);


import React from "react";
import AdvancedVerbTenses from "./OptionsWrapper/AdvancedVerbTenses";
import AdvancedNumberPerson from "./OptionsWrapper/AdvancedNumberPerson";

const AdvancedOptions = props => {
  return (
      <div>
          <form>
              <div>
                  <h3>Verb Tenses</h3>
                  <AdvancedVerbTenses setTenses={ props.setTenses } />
              </div>
              <div>
                  <h3>Number and Person</h3>
                  <AdvancedNumberPerson />
              </div>
              <button>Update Settings</button>
          </form>
      </div>
  );
};

export default AdvancedOptions;

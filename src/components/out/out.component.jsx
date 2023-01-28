import { useEffect, useState } from "react";

import "../../static/styles/components/out.style.scss";

import OutInputComponent from "./out.input.component.jsx";

import {
  description,
  peticionarioJSON,
  afectadoJSON,
} from "../../static/text/text.jsx";

function OutComponent() {
  const [descRegText, setDescRegText] = useState("regText");
  const [affRegText, setAffRegText] = useState("regText");
  const [demRegText, setDemRegText] = useState("regText");
  const [petRegText, setPetRegText] = useState("regText");

  const [affObj, setAffObj] = useState({});
  const [demObj, setDemObj] = useState({});
  const [petObj, setPetObj] = useState({});

  return (
    <div className="out">
      <div id="first-row">
        <div className="out__description__container">
          <OutInputComponent
            description={description}
            peticionarioJSON={peticionarioJSON}
            afectadoJSON={afectadoJSON}
            affObj={affObj}
            demObj={demObj}
            petObj={petObj}
            setAffObj={setAffObj}
            setDemObj={setDemObj}
            setPetObj={setPetObj}
          />
        </div>
      </div>
      <div id="second-row">
        <div className="out__input__container">
          {/* <input type="textarea" className="out__input" disabled /> */}
        </div>
        <div className="out__input__container">
          {/* <input type="textarea" className="out__input" disabled /> */}
        </div>
        <div className="out__input__container">
          {/* <input type="textarea" className="out__input" disabled /> */}
        </div>
      </div>
    </div>
  );
}

export default OutComponent;

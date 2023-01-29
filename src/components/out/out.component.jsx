import { useEffect, useState } from "react";

import "../../static/styles/components/out.style.scss";

import OutInputComponent from "./out.input.component.jsx";

import {
  description,
  peticionario,
  peticionarioJSON,
  afectadoJSON,
} from "../../static/text/text.jsx";

function OutComponent() {
  const [descRegText, setDescRegText] = useState("regText");
  const [affRegText, setAffRegText] = useState("regText");
  const [demRegText, setDemRegText] = useState("regText");
  const [petRegText, setPetRegText] = useState("regText");

  const [affObj, setAffObj] = useState({
    name: "",
    id_type: "",
    id_number: "",
    age: "",
    pather_name: "",
    mother_name: "",
    phone: "",
    cellphone: "",
    address: "",
  });
  const [demObj, setDemObj] = useState({
    name: "",
    id_type: "",
    id_number: "",
    age: "",
    phone: "",
    cellphone: "",
    address: "",
  });
  const [petObj, setPetObj] = useState({
    name: "",
    id_type: "",
    id_number: "",
    birthdate: "",
    sex: "",
    phone: "",
    cellphone: "",
    email: "",
    address: "",
    vca: false,
    dv: false,
    etnicity: "",
    disability: "",
    relationship: "",
  });

  useEffect(() => {
    console.log(affObj);
  }, [affObj]);

  useEffect(() => {
    console.log(demObj);
  }, [demObj]);

  useEffect(() => {
    console.log(petObj);
  }, [petObj])

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
        <OutInputComponent
            description={peticionario}
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

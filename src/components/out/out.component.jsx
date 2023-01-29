import { useEffect, useState } from "react";

import "../../static/styles/components/out.style.scss";

import OutInputComponent from "./out.input.component.jsx";

import {
  description,
  peticionario,
  afectado,
  demandado,
  peticionarioJSON,
  afectadoJSON,
  demandadoJSON,
} from "../../static/text/text.jsx";

import {FaClipboard} from "react-icons/fa";

function OutComponent() {
  const [affRegText, setAffRegText] = useState("");
  const [demRegText, setDemRegText] = useState("");
  const [petRegText, setPetRegText] = useState("");
  const [descRegText, setDescRegText] = useState("");

  const [afftrigger, setAffTrigger] = useState(false);
  const [demtrigger, setDemTrigger] = useState(false);
  const [pettrigger, setPetTrigger] = useState(false);
  const [desctrigger, setDescTrigger] = useState(false);

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
  }, [petObj]);

  return (
    <div className="out">
      <div id="first-row">
        <div className="out__description__container">
          <div
            className="copy-button"
            onClick={() => setDescTrigger(!desctrigger)}
          >
            <FaClipboard></FaClipboard>
          </div>
          <OutInputComponent
            description={description}
            peticionarioJSON={peticionarioJSON}
            afectadoJSON={afectadoJSON}
            demandadoJSON={demandadoJSON}
            affObj={affObj}
            demObj={demObj}
            petObj={petObj}
            setAffObj={setAffObj}
            setDemObj={setDemObj}
            setPetObj={setPetObj}
            setDescRegText={setDescRegText}
            trigger={desctrigger}
          />
        </div>
      </div>
      <div id="second-row">
        <div className="out__input__container">
          <div
            className="copy-button"
            onClick={() => setAffTrigger(!afftrigger)}
          >
            <FaClipboard></FaClipboard>
          </div>
          <OutInputComponent
            description={afectado}
            peticionarioJSON={peticionarioJSON}
            afectadoJSON={afectadoJSON}
            demandadoJSON={demandadoJSON}
            affObj={affObj}
            demObj={demObj}
            petObj={petObj}
            setAffObj={setAffObj}
            setDemObj={setDemObj}
            setPetObj={setPetObj}
            setAffRegText={setAffRegText}
            trigger={afftrigger}
          />
        </div>
        <div className="out__input__container">
          <div className="copy-button"
          onClick={() => setDemTrigger(!demtrigger)}
          ></div>
          <OutInputComponent
            description={demandado}
            peticionarioJSON={peticionarioJSON}
            afectadoJSON={afectadoJSON}
            demandadoJSON={demandadoJSON}
            affObj={affObj}
            demObj={demObj}
            petObj={petObj}
            setAffObj={setAffObj}
            setDemObj={setDemObj}
            setPetObj={setPetObj}
            setDemRegText={setDemRegText}
            trigger={demtrigger}
          />
        </div>
        <div className="out__input__container">
          <div className="copy-button"
          onClick={() => setPetTrigger(!pettrigger)}
          >
            <FaClipboard></FaClipboard>
          </div>
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
            setPetRegText={setPetRegText}
            trigger={pettrigger}
          />
        </div>
      </div>
    </div>
  );
}

export default OutComponent;

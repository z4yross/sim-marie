import { useEffect, useState } from "react";

import * as ReactDOMServer from 'react-dom/server';
import parse from 'html-react-parser';

function OutInputComponent({
  description,
  peticionarioJSON,
  afectadoJSON,
  affObj,
  demObj,
  petObj,
  setAffObj,
  setDemObj,
  setPetObj,
}) {
  // const [regText, setRegText] = useState(description);
  // const [text, setText] = useState("");

  /* TODO:
  using regText, replace regex string /{{(.*?)}}/g 
  with the corrispondig generated html tag provided by "types" object
  and display the result inside div with className "out__text__container"
  and set the result from the inputs generated to the state "text" */
  const conponentGenerator = (regText) => {
    const regex = /{{(.*?)}}/g;

    const matches = regText.matchAll(regex);
    const types = {
      text: (obj) => {
        return (
          <input
            type={obj.type}
            value={eval(obj.value)}
            onChange={eval(obj.onChange)}
          />
        );
      },
      select: (obj) => {
        return (
          <select value={eval(obj.value)} onChange={eval(obj.onChange)}>
            {obj.options.map((option) => {
              return <option value={option}>{option}</option>;
            })}
          </select>
        );
      },
    };

    for (const match of matches) {
      const key = match[1];
      console.log(key);
      const type = eval(key).tag;
      console.log(type);
      const component = types[type](eval(key));
      regText = regText.replace(match[0], ReactDOMServer.renderToString(component));
    }

    console.log(regText);

    // var s = '<div id="myDiv"></div>';
    var temp = document.createElement("div");
    temp.innerHTML = regText;
    var htmlObject = temp.firstChild;

    return `<div>${regText}</div>`;
  };

  // useEffect(() => {

  // }, [description]);

  return (
    <div className="out__text__container" style={{color: "#fff"}}>
      {parse(conponentGenerator(description))}
    </div>
  );
}

export default OutInputComponent;

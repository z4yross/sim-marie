import { useEffect, useState } from "react";

import * as ReactDOMServer from "react-dom/server";
import parse from "html-react-parser";

function OutInputComponent({
  description,
  peticionarioJSON,
  afectadoJSON,
  demandadoJSON,
  affObj,
  demObj,
  petObj,
  setAffObj,
  setDemObj,
  setPetObj,
  trigger,
}) {
  const componentGenerator = (tokens) => {
    const tags = {
      textArea: (obj) => {
        return (
          <textarea
            value={eval(obj.value)}
            onChange={(e) => {
              eval(obj.onChange);
              // scrollHeight is the height of the text area
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
            placeholder={obj.placeholder}
            key={obj.key}
          />
        );
      },
      text: (obj) => {
        return (
          <input
            type={obj.type}
            value={eval(obj.value)}
            onChange={(e) => {
              eval(obj.onChange);
              e.target.style.width = e.target.value.length * 8 + 10 + "px";
            }}
            placeholder={obj.placeholder}
            key={obj.key}
          />
        );
      },
      select: (obj) => {
        return (
          <select
            value={eval(obj.value)}
            onChange={eval(obj.onChange)}
            key={obj.key}
          >
            <option>-- {obj.placeholder} --</option>
            {obj.options.map((option, i) => {
              return (
                <option key={i + 1} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        );
      },
    };

    console.log(tokens);

    const components = tokens.map((token, i) => {
      if (token.type === "variable") {
        const obj = eval(token.value);
        obj.key = i;
        return tags[obj.tag](obj);
      } else if (token.type === "breakline") return <span />;
      else {
        if (token.value !== "" && token.value !== undefined)
          return <p key={i}>{token.value}</p>;
      }
    });

    return components;
  };

  const textGenerator = (tokens) => {
    let text = "";

    tokens.forEach((token) => {
      if (token.type === "variable") {
        text += eval(eval(token.value).value);
      } else if (token.type === "breakline") text += "\n";
      else if (token.value !== "" && token.value !== undefined)
        text += token.value;
    });

    console.log(text);

    return text;
  };

  useEffect(() => {
    const text = textGenerator(replaceTest(description));
    navigator.clipboard.writeText(text);
    console.log(text);
  }, [trigger]);

  const replaceTest = (input) => {
    var tokens = [];
    var currentToken = "";
    var inVariable = false;
    var openingBracketIndex;

    for (var i = 0; i < input.length; i++) {
      var char = input.charAt(i);
      if (char === "{" && input.charAt(i + 1) === "{") {
        if (currentToken !== "") {
          tokens.push({ type: "text", value: currentToken });
          currentToken = "";
        }
        inVariable = true;
        openingBracketIndex = i;
        i++;
      } else if (char === "}" && input.charAt(i + 1) === "}") {
        var variableValue = input.slice(openingBracketIndex, i + 2);
        tokens.push({ type: "variable", value: variableValue });
        currentToken = "";
        inVariable = false;
        i++;
      } else if (char === "\n") {
        if (currentToken !== "") {
          tokens.push({
            type: inVariable ? "variable" : "text",
            value: currentToken,
          });
          currentToken = "";
        }
        tokens.push({ type: "breakline", value: "\n" });
      } else {
        currentToken += char;
      }
    }
    if (currentToken !== "") {
      tokens.push({
        type: inVariable ? "variable" : "text",
        value: currentToken,
      });
    }

    return tokens;
  };

  return (
    <div className="out__text__container">
      {componentGenerator(replaceTest(description))}
    </div>
  );
}

export default OutInputComponent;

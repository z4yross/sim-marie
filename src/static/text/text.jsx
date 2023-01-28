// multiline string

export const description =
  "Se comunica {{peticionarioJSON.pronoun}} " +
  "{{peticionarioJSON.name}} con {{peticionarioJSON.id_type}} No. {{peticionarioJSON.id_number}}. " +
  "En calidad de {{peticionarioJSON.relacion}} del menor {{afectadoJSON.name}} de edad " +
  "{{afectadoJSON.age}} años con {{afectadoJSON.id_type}} {{afectadoJSON.id_number}}, {{afectadoJSON.description}}.";

export const peticionarioJSON = {
  pronoun: {
    tag: "select",
    options: ["el señor", "la señora"],
    value: "petObj.sexo",
    onChange: '(e) => {setPetObj({ ...petObj, sexo: e.target.value === "el señor" ? "M" : "F" });}',
  },
  id_type: {
    tag: "select",
    options: ["cedula de ciudadania"],
    value: "petObj.id_type",
    onChange: "(e) => {setPetObj({ ...petObj, id_type: e.target.value });}",
  },
  id_number: {
    tag: "text",
    type: "text",
    value: "petObj.id_number",
    onChange: "(e) => {setPetObj({ ...petObj, id_number: e.target.value });}",
  },
  name: {
    tag: "text",
    type: "text",
    value: "petObj.name",
    onChange: "(e) => {setPetObj({ ...petObj, name: e.target.value });}",
  },
  relacion: {
    tag: "select",
    options: [
      "padre",
      "madre",
      "vecino",
      "vecina",
      "hermano",
      "hermana",
      "tio",
      "tia",
      "persona juridica",
    ],
    value: "petObj.relacion",
    onChange: "(e) => { setPetObj({ ...petObj, relacion: e.target.value });}",
  },
};

export const afectadoJSON = {
  name: {
    tag: "text",
    type: "text",
    value: "affObj.name",
    onChange: "(e) => {setDemObj({ ...affObj, name: e.target.value })}",
  },
  age: {
    tag: "text",
    type: "number",
    value: "affObj.age",
    onChange: "(e) => {setDemObj({ ...affObj, age: e.target.value });}",
  },
  id_type: {
    tag: "select",
    options: [
      "registro civil",
      "tarjeta de identidad",
      "permiso especial de permanencia",
      "sin dato",
      "nn",
    ],
    value: "affObj.id_type",
    onChange: "(e) => {setDemObj({ ...affObj, id_type: e.target.value });}",
  },
  id_number: {
    tag: "text",
    type: "text",
    value: "affObj.id_number",
    onChange: "(e) => {setDemObj({ ...affObj, id_number: e.target.value });}",
  },
  ubication: {
    tag: "text",
    type: "text",
    value: "affObj.ubication",
    onChange: "(e) => {setDemObj({ ...affObj, ubication: e.target.value });}",
  },
  description: {
    tag: "text",
    type: "textarea",
    value: "affObj.description",
    onChange: "(e) => {setDemObj({ ...affObj, description: e.target.value });}",
  },
};
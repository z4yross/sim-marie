// multiline string

export const description =
  "Se comunica {{peticionarioJSON.pronoun}} \
{{peticionarioJSON.name}} con {{peticionarioJSON.id_type}} No. {{peticionarioJSON.id_number}} \
en calidad de {{peticionarioJSON.relacion}} del menor {{afectadoJSON.name}} con \
{{afectadoJSON.age}} años de edad, con {{afectadoJSON.id_type}} {{afectadoJSON.id_number}}, {{afectadoJSON.description}}.\n\
Brinda datos de ubicacion del menor {{afectadoJSON.address}}. Por lo anterior se solicita pronta intervencion por parte del ICBF.";

export const peticionario =
  "PETICIONARIO: \n\
Nombre completo: {{peticionarioJSON.name}} \n\
Documento de identidad: {{peticionarioJSON.id_type}} No. {{peticionarioJSON.id_number}} \n\
Fecha de nacimiento: {{peticionarioJSON.birthdate}} \n\
Telefono: {{peticionarioJSON.phone}} \n\
Celular: {{peticionarioJSON.cellphone}} \n\
Correo electronico: {{peticionarioJSON.email}} \n\
¿Ha sido víctima del conflicto armado? {{peticionarioJSON.vca}} \n\
¿Ha sido desplazado por la violencia? {{peticionarioJSON.dv}} \n\
¿Pertenece a algún grupo étnico? {{peticionarioJSON.etnicity}} \n\
¿Presenta algún tipo de discapacidad? {{peticionarioJSON.disability}}";

export const afectado =
  "AFECTADO: \n\
Nombre completo: {{afectadoJSON.name}} \n\
Documento de identidad: {{afectadoJSON.id_type}} No. {{afectadoJSON.id_number}} \n\
Edad: {{afectadoJSON.age}} \n\
Telefono: {{afectadoJSON.phone}} \n\
Celular: {{afectadoJSON.cellphone}} \n\
Direccion: {{afectadoJSON.address}}";

export const demandado =
  "DEMANDADO: \n\
Nombre completo: {{demandadoJSON.name}} \n\
Documento de identidad: {{demandadoJSON.id_type}} No. {{demandadoJSON.id_number}} \n\
Edad: {{demandadoJSON.age}} \n\
Telefono: {{demandadoJSON.phone}} \n\
Celular: {{demandadoJSON.cellphone}} \n\
Direccion: {{demandadoJSON.address}}";

export const demandadoJSON = {
  name: {
    tag: "text",
    placeholder: "Nombre completo",
    type: "text",
    value: "demObj.name",
    onChange: "setDemObj({ ...demObj, name: e.target.value });",
  },
  id_type: {
    tag: "select",
    placeholder: "Tipo de documento",
    options: ["cedula de ciudadania"],
    value: "demObj.id_type",
    onChange: "(e) => {setDemObj({ ...demObj, id_type: e.target.value });}",
  },
  id_number: {
    tag: "text",
    placeholder: "No documento",
    type: "text",
    value: "demObj.id_number",
    onChange: "setDemObj({ ...demObj, id_number: e.target.value });",
  },
  age: {
    tag: "text",
    placeholder: "Edad",
    type: "number",
    value: "demObj.age",
    onChange: "setDemObj({ ...demObj, age: e.target.value });",
  },
  phone: {
    tag: "text",
    placeholder: "Telefono",
    type: "text",
    value: "demObj.phone",
    onChange: "setDemObj({ ...demObj, phone: e.target.value });",
  },
  cellphone: {
    tag: "text",
    placeholder: "Celular",
    type: "text",
    value: "demObj.cellphone",
    onChange: "setDemObj({ ...demObj, cellphone: e.target.value });",
  },
  address: {
    tag: "text",
    placeholder: "Direccion",
    type: "text",
    value: "demObj.address",
    onChange: "setDemObj({ ...demObj, address: e.target.value });",
  },
};

export const peticionarioJSON = {
  pronoun: {
    tag: "select",
    placeholder: "pronombre",
    options: ["el señor", "la señora"],
    value: "petObj.sex",
    onChange: "(e) => {setPetObj({ ...petObj, sex: e.target.value});}",
  },
  id_type: {
    tag: "select",
    placeholder: "tipo de documento",
    options: ["cedula de ciudadania"],
    value: "petObj.id_type",
    onChange: "(e) => {setPetObj({ ...petObj, id_type: e.target.value });}",
  },
  id_number: {
    tag: "text",
    placeholder: "No documento peticionario",
    type: "text",
    value: "petObj.id_number",
    onChange: "setPetObj({ ...petObj, id_number: e.target.value });",
  },
  name: {
    tag: "text",
    placeholder: "nombre peticionario",
    type: "text",
    value: "petObj.name",
    onChange: "setPetObj({ ...petObj, name: e.target.value });",
  },
  relacion: {
    tag: "select",
    placeholder: "relacion con el afectado",
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
    value: "petObj.relationship",
    onChange: "(e) => { setPetObj({ ...petObj, relationship: e.target.value });}",
  },
  birthdate: {
    tag: "text",
    placeholder: "fecha de nacimiento",
    type: "date",
    value: "petObj.birthdate",
    onChange: "setPetObj({ ...petObj, birthdate: e.target.value });",
  },
  phone: {
    tag: "text",
    placeholder: "telefono",
    type: "text",
    value: "petObj.phone",
    onChange: "setPetObj({ ...petObj, phone: e.target.value });",
  },
  cellphone: {
    tag: "text",
    placeholder: "celular",
    type: "text",
    value: "petObj.cellphone",
    onChange: "setPetObj({ ...petObj, cellphone: e.target.value });",
  },
  email: {
    tag: "text",
    placeholder: "correo electronico",
    type: "email",
    value: "petObj.email",
    onChange: "setPetObj({ ...petObj, email: e.target.value });",
  },
  vca: {
    tag: "select",
    placeholder: "victima del conflicto armado",
    options: ["si", "no"],
    value: "petObj.vca",
    onChange: "(e) => {setPetObj({ ...petObj, vca: e.target.value });}",
  },
  dv: {
    tag: "select",
    placeholder: "desplazado por la violencia",
    options: ["si", "no"],
    value: "petObj.dv",
    onChange: "(e) => {setPetObj({ ...petObj, dv: e.target.value });}",
  },
  etnicity: {
    tag: "text",
    placeholder: "grupo etnico",
    type: "text",
    value: "petObj.etnicity",
    onChange: "setPetObj({ ...petObj, etnicity: e.target.value });",
  },
  disability: {
    tag: "text",
    placeholder: "discapacidad",
    type: "text",
    value: "petObj.disability",
    onChange: "setPetObj({ ...petObj, disability: e.target.value });",
  },
};

export const afectadoJSON = {
  name: {
    tag: "text",
    placeholder: "nombre afectado",
    type: "text",
    value: "affObj.name",
    onChange: "setAffObj({ ...affObj, name: e.target.value })",
  },
  age: {
    tag: "text",
    placeholder: "edad afectado",
    type: "number",
    value: "affObj.age",
    onChange: "setAffObj({ ...affObj, age: e.target.value });",
  },
  id_type: {
    tag: "select",
    placeholder: "tipo de documento",
    options: [
      "registro civil",
      "tarjeta de identidad",
      "permiso especial de permanencia",
      "sin dato",
      "nn",
    ],
    value: "affObj.id_type",
    onChange: "(e) => {setAffObj({ ...affObj, id_type: e.target.value });}",
  },
  id_number: {
    tag: "text",
    placeholder: "No documento afectado",
    type: "text",
    value: "affObj.id_number",
    onChange: "setAffObj({ ...affObj, id_number: e.target.value });",
  },
  pather_name: {
    tag: "text",
    placeholder: "nombre del padre",
    type: "text",
    value: "affObj.pather_name",
    onChange: "setAffObj({ ...affObj, pather_name: e.target.value });",
  },
  mother_name: {
    tag: "text",
    placeholder: "nombre de la madre",
    type: "text",
    value: "affObj.mother_name",
    onChange: "setAffObj({ ...affObj, mother_name: e.target.value });",
  },
  phone: {
    tag: "text",
    placeholder: "telefono afectado",
    type: "text",
    value: "affObj.phone",
    onChange: "setAffObj({ ...affObj, phone: e.target.value });",
  },
  cellphone: {
    tag: "text",
    placeholder: "celular afectado",
    type: "text",
    value: "affObj.cellphone",
    onChange: "setAffObj({ ...affObj, cellphone: e.target.value });",
  },
  address: {
    tag: "text",
    placeholder: "ubicacion afectado",
    type: "text",
    value: "affObj.address",
    onChange: "setAffObj({ ...affObj, address: e.target.value });",
  },
  description: {
    tag: "textArea",
    placeholder: "descripcion del caso",
    type: "textarea",
    value: "affObj.description",
    onChange: "setAffObj({ ...affObj, description: e.target.value });",
  },
};

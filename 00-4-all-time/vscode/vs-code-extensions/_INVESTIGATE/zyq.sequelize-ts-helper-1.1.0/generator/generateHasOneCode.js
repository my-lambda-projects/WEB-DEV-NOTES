const inflection = require("inflection");
const upperFirst = require("lodash.upperfirst");

function generateHasOneCode(fieldWord, associationClass) {
  const upperFirstFieldWord = upperFirst(fieldWord);
  const singularFieldWord = inflection.singularize(upperFirstFieldWord);

  const accessorsField = {
    get: `get${singularFieldWord}`,
    set: `set${singularFieldWord}`,
    create: `create${singularFieldWord}`
  };

  const code = `

public ${accessorsField.get}: HasOneGetAssociationMixin<${associationClass}>;

public ${accessorsField.set}: HasOneSetAssociationMixin<${associationClass}, number>;

public ${accessorsField.create}: HasOneCreateAssociationMixin<${associationClass}>;
`;

  return code;
}

module.exports = generateHasOneCode;

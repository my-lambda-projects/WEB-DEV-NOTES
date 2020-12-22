const inflection = require("inflection");
const upperFirst = require("lodash.upperfirst");

function generateBelongsToCode(fieldWord, associationClass) {
  const upperFirstFieldWord = upperFirst(fieldWord);
  const singularFieldWord = inflection.singularize(upperFirstFieldWord);

  const accessorsField = {
    get: `get${singularFieldWord}`,
    set: `set${singularFieldWord}`,
    create: `create${singularFieldWord}`
  };

  const code = `

public ${accessorsField.get}: BelongsToGetAssociationMixin<${associationClass}>;

public ${accessorsField.set}: BelongsToSetAssociationMixin<${associationClass}, number>;

public ${accessorsField.create}: BelongsToCreateAssociationMixin<${associationClass}>;
`;

  return code;
}

module.exports = generateBelongsToCode;

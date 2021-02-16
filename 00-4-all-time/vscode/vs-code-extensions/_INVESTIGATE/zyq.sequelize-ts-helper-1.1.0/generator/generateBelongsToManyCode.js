const inflection = require("inflection");
const upperFirst = require("lodash.upperfirst");

function generateBelongsToManyCode(fieldWord, associationClass) {
  const upperFirstFieldWord = upperFirst(fieldWord);
  const pluralFieldWord = inflection.pluralize(upperFirstFieldWord);
  const singularFieldWord = inflection.singularize(upperFirstFieldWord);

  const accessorsField = {
    get: `get${pluralFieldWord}`,
    set: `set${pluralFieldWord}`,
    addMultiple: `add${pluralFieldWord}`,
    add: `add${singularFieldWord}`,
    create: `create${singularFieldWord}`,
    remove: `remove${singularFieldWord}`,
    removeMultiple: `remove${pluralFieldWord}`,
    hasSingle: `has${singularFieldWord}`,
    hasAll: `has${pluralFieldWord}`,
    count: `count${pluralFieldWord}`
  };

  const code = `

public ${accessorsField.get}: BelongsToManyGetAssociationsMixin<${associationClass}>;

public ${accessorsField.set}: BelongsToManySetAssociationsMixin<${associationClass}, number>;

public ${accessorsField.addMultiple}: BelongsToManyAddAssociationsMixin<${associationClass}, number>;

public ${accessorsField.add}: BelongsToManyAddAssociationMixin<${associationClass}, number>;

public ${accessorsField.create}: BelongsToManyCreateAssociationMixin<${associationClass}>;

public ${accessorsField.remove}: BelongsToManyRemoveAssociationMixin<${associationClass}, number>;

public ${accessorsField.removeMultiple}: BelongsToManyRemoveAssociationsMixin<${associationClass}, number>;

public ${accessorsField.hasSingle}: BelongsToManyHasAssociationMixin<${associationClass}, number>;

public ${accessorsField.hasAll}: BelongsToManyHasAssociationsMixin<${associationClass}, number>;

public ${accessorsField.count}: BelongsToManyCountAssociationsMixin;
`;

  return code;
}

module.exports = generateBelongsToManyCode;

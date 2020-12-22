const inflection = require("inflection");
const upperFirst = require("lodash.upperfirst");

function generateHasManyCode(fieldWord, associationClass) {
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

public ${accessorsField.get}: HasManyGetAssociationsMixin<${associationClass}>;

public ${accessorsField.set}: HasManySetAssociationsMixin<${associationClass}, number>;

public ${accessorsField.addMultiple}: HasManyAddAssociationsMixin<${associationClass}, number>;

public ${accessorsField.add}: HasManyAddAssociationMixin<${associationClass}, number>;

public ${accessorsField.create}: HasManyCreateAssociationMixin<${associationClass}>;

public ${accessorsField.remove}: HasManyRemoveAssociationMixin<${associationClass}, number>;

public ${accessorsField.removeMultiple}: HasManyRemoveAssociationsMixin<${associationClass}, number>;

public ${accessorsField.hasSingle}: HasManyHasAssociationMixin<${associationClass}, number>;

public ${accessorsField.hasAll}: HasManyHasAssociationsMixin<${associationClass}, number>;

public ${accessorsField.count}: HasManyCountAssociationsMixin;
`;

  return code;
}

module.exports = generateHasManyCode;

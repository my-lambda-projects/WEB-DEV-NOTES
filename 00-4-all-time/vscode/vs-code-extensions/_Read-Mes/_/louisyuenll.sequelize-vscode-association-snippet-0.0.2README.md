# sequelize-vscode-association-snippet

Snippets for creating [Sequelize](https://github.com/sequelize/sequelize) interface mixins in VS Code.

[Download this extension from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=louisyuenll.sequelize-vscode-association-snippet)

## Features

This VS Code extension contains snippets for creating association TypeScript interfaces for models in Sequelize.

### hasOne mixins

- Prefix: sequelizeHasOne
- Methods: get, set, create

### hasMany mixins

- Prefix: sequelizeHasMany
- Methods: get, set, addMany, add, create, remove, removeMany, has, hasMany, count

### belongsTo mixins

- Prefix: sequelizeBelongsTo
- Methods: get, set, create

### belongsToMany mixins

- Prefix: sequelizeBelongsToMany
- Methods: get, set, addMany, add, create, remove, removeMany, has, hasMany, count

### Create model

- Prefix: sequelizeModel
- Includes: attributes interface, instance interface, model definition

## Requirements

- Official typings from [Sequelize](https://github.com/sequelize/sequelize) package

## Known Issues

- sequelizeModel snippet does not support auto transforms model name into lower case in section define. ([VS Code issue 34683](https://github.com/Microsoft/vscode/issues/34683))

## Release Notes

### 0.0.1

Initial release of sequelize-vscode-association-snippet

- Added Sequelize hasOne mixins snippet
- Added Sequelize hasMany mixins snippet
- Added Sequelize belongsTo mixins snippet
- Added Sequelize belongsToMany mixins snippet

### 0.0.2

Add create Sequelize model snippet

- Added Sequelize create model snippet

## License

MIT
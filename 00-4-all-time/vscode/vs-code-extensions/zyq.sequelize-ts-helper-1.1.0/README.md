# sequelize-ts-helper

This is the README for extension "sequelize-ts-helper".

## Features

generate association mixin field in typescript sequelize model;

![feature](https://raw.githubusercontent.com/ZyqGitHub1/sequelize-ts-helper/master/images/generate.gif)

> if you can't view image. you can open it in browser([click me](https://raw.githubusercontent.com/ZyqGitHub1/sequelize-ts-helper/master/images/generate.gif))

- @BelongsToMany

```typescript
// before
@BelongsToMany(() => Role, {
  as: 'roles',
  through: 'userRole',
})
public roles: IRole;

// after
@BelongsToMany(() => Role, {
  as: 'roles',
  through: 'userRole',
})
public roles: IRole;

public getRoles: BelongsToManyGetAssociationsMixin<Role>;

public setRoles: BelongsToManySetAssociationsMixin<Role, number>;

public addRoles: BelongsToManyAddAssociationsMixin<Role, number>;

public addRole: BelongsToManyAddAssociationMixin<Role, number>;

public createRole: BelongsToManyCreateAssociationMixin<Role>;

public removeRole: BelongsToManyRemoveAssociationMixin<Role, number>;

public removeRoles: BelongsToManyRemoveAssociationsMixin<Role, number>;

public hasRole: BelongsToManyHasAssociationMixin<Role, number>;

public hasRoles: BelongsToManyHasAssociationsMixin<Role, number>;

public countRoles: BelongsToManyCountAssociationsMixin;
```

- @HasOne

```typescript
// before
@HasOne(() => Role, {
  as: 'roles',
  through: 'userRole',
})
public roles: IRole;

// after
@HasOne(() => Role, {
  as: 'roles',
  through: 'userRole',
})
public roles: IRole;

public getRole: HasOneGetAssociationMixin<Role>;

public setRole: HasOneSetAssociationMixin<Role, number>;

public createRole: HasOneCreateAssociationMixin<Role>;
```

- @HasMany

```typescript
// before
@HasMany(() => Role, {
  as: 'roles',
  through: 'userRole',
})
public roles: IRole;

// after
@HasMany(() => Role, {
  as: 'roles',
  through: 'userRole',
})
public roles: IRole;

public getRoles: HasManyGetAssociationsMixin<Role>;

public setRoles: HasManySetAssociationsMixin<Role, number>;

public addRoles: HasManyAddAssociationsMixin<Role, number>;

public addRole: HasManyAddAssociationMixin<Role, number>;

public createRole: HasManyCreateAssociationMixin<Role>;

public removeRole: HasManyRemoveAssociationMixin<Role, number>;

public removeRoles: HasManyRemoveAssociationsMixin<Role, number>;

public hasRole: HasManyHasAssociationMixin<Role, number>;

public hasRoles: HasManyHasAssociationsMixin<Role, number>;

public countRoles: HasManyCountAssociationsMixin;
```

- @BelongsTo

```typescript
// before
@BelongsTo(() => Role, {
  as: 'roles',
  through: 'userRole',
})
public roles: IRole;

// after
@BelongsTo(() => Role, {
  as: 'roles',
  through: 'userRole',
})
public roles: IRole;

public getRole: BelongsToGetAssociationMixin<Role>;

public setRole: BelongsToSetAssociationMixin<Role, number>;

public createRole: BelongsToCreateAssociationMixin<Role>;
```

> Note: Now only supported a-z A-Z 0-9 \_ \$ in variable declaration

## Release Notes

### 1.0.0

Initial release of sequelize-ts-helper

### 1.0.1

- add '\_' and '\$' in variable regular expression
- support Double quotation marks(")

### 1.0.2

- add image in README

### 1.0.3

- use lodash.upperfirst
---

**Enjoy!**

const {
  Category
} = require( './models' );

class EditCategoryScreen {
  constructor( rl, categoryId ) {
    this.rl = rl;
    this.categoryId = categoryId;
  }

  async printUi() {
    const category = await Category.findByPk( this.categoryId );

    console.clear();
    console.log( "********************************************" );
    console.log( "* EDIT CATEGORY                 (c) 1987   *" );
    console.log( "********************************************" );
    console.log();

    console.log( `Editing: ${category.name}` );

    console.log();
    console.log( "What would you like to rename it? Hit" );
    console.log( "\"Enter\" when you are done." );
    console.log();
  }

  async show() {
    await this.printUi();
    this.rl.question( "> ", async newCategoryName => {

      const category = await Category.findByPk( this.categoryId );
      category.name = newCategoryName;
      await category.save();

      new ManageCategoriesScreen( this.rl ).show();
    } );
  }
}

exports.EditCategoryScreen = EditCategoryScreen;

// Requires at bottom to prevent circular dependencies problems in node
const {
  ManageCategoriesScreen
} = require( './manage-categories-screen' );

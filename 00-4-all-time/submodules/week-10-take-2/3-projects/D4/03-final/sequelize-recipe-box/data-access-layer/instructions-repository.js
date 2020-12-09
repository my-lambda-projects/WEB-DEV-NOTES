const {
  Op
} = require( 'sequelize' );
let Instruction;
let moduleError;

try {
  const db = require( '../models' );
  ( {
    Instruction
  } = db );
  if ( Instruction === undefined ) {
    moduleError = 'It looks like you need to generate the Instruction model.';
  }
} catch ( e ) {
  console.error( e );
  if ( e.message.includes( 'Cannot find module' ) ) {
    moduleError = 'It looks like you need initialize your project.';
  } else {
    moduleError = `An error was raised "${e.message}". Check the console for details.`;
  }
}
/* Don't change code above this line ******************************************/



async function createNewInstruction( specification, recipeId ) {
  // Use the findAll method of the Instruction object to find all the
  // instructions for the specified recipe.
  const all = await Instruction.findAll( {
    where: {
      recipeId
    }
  } )
  console.log( '======================================================', all[ 0 ].toJSON() )
  // Use the create method of the Instruction object to create a new object and
  // return it using the maximum listOrder from the query just before this.
  return await Instruction.create( {
    specification: specification,
    listOrder: all.length + 1,
    recipeId: recipeId
  } )
  // Docs: https://sequelize.org/v5/manual/instances.html#creating-persistent-instances
}



/* Don't change code below this line ******************************************/
module.exports = {
  createNewInstruction,
  loadingDbError: moduleError,
};

const {
  PetType,
  Sequelize: { Op },
  sequelize,
} = require('./models');
// const { PetType, Sequelize: { Op }, sequelize } = require('./models/index');
// const { Op } = require('sequelize')

async function queryPetTypes() {
  let petTypes;

  petTypes = await PetType.findAll();
  console.log(
    'All pet types:',
    petTypes.map((pt) => pt.type)
  );

  // petTypes = await PetType.findAll({
  //   where: {
  //     type: { [Op.like]: '%t%' }, // also could have done { [Op.substring]: 't' }, which adds the %s for you
  //     id: { [Op.gt]: 7 },
  //   },
  // });
  // console.log(
  //   'Pet types like %t% and id > 7:',
  //   petTypes.map((pt) => pt.type)
  // );

  // petTypes = await PetType.findAll({
  //   where: {
  //     type: ['Dog', 'Cat'], // WHERE type IN ('Dog', 'Cat')
  //   },
  // });
  // console.log(
  //   'Pet types either Dog OR Cat:',
  //   petTypes.map((pt) => pt.type)
  // );

  // let petType;
  // petType = await PetType.findByPk(8);
  // console.log('Pet type with id 8:', petType.type);

  // petType = await PetType.findOne({
  //   where: {
  //     type: { [Op.like]: '%t%' },
  //   },
  // });
  // console.log("FIrst PetType found that's like %t%:", petType.type);

  // petTypes = await PetType.findCreateFind({
  //   where: { type: 'Ferret' },
  // });
  // console.log(petTypes.map((pt) => [ pt.id, pt.type ]));
  // console.log(petTypes[0].id, petTypes[0].type, petTypes[1]);

  // petTypes = await PetType.findCreateFind({
  //   where: { type: 'Ferret' },
  // });

  // console.log(petTypes.map((pt) => [pt.id, pt.type]));
  // console.log(petTypes[0].id, petTypes[0].type, petTypes[1]);

  sequelize.close();
}

queryPetTypes();

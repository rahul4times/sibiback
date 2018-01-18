
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table)=>{
    table.increments();
    table.string('Gender');
    table.string('NameSet');
    table.string('Title');
    table.string('GivenName');
    table.string('MiddleInitial');
    table.string('Surname');
    table.string('StreetAddress');
    table.string('City');
    table.string('State');
    table.string('StateFull');
    table.integer('ZipCode');
    table.string('Country');
    table.string('CountryFull');
    table.string('EmailAddress');
    table.string('Username');
    table.string('Password');
    table.string('BrowserUserAgent');
    table.bigInteger('TelephoneNumber');
    table.integer('TelephoneCountryCode');
    table.string('MothersMaiden');
    table.date('Birthday');
    table.integer('age');
    table.string('CCType');
    table.bigInteger('CCNumber');
    table.integer('CVV2');
    table.string('CCExpires');
    table.integer('NationalID');
    table.string('UPS');
    table.bigInteger('WesternUnionMTCN');
    table.bigInteger('MoneyGramMTCN');
    table.string('Color');
    table.string('Occupation');
    table.string('Company');
    table.string('Vehicle');
    table.string('Domain');
    table.string('GUID');
    table.decimal('Latitude');
    table.decimal('Longitude');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};


module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        // table name
        "Treparation_has_piece",
        {
            // field name
            quantite:{
                // set data type
                type: Sequelize.DataTypes.STRING
            }
        }
    );
};


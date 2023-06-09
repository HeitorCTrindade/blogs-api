module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,    
  }, {
    sequelize,
    tableName: 'users',
    underscored: true,
    timestamps: false,
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPost, {
      as: 'blogposts',
      foreignKey: 'user_id',
    })
  }; 

  return user;
}  
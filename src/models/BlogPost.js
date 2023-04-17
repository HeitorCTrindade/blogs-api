module.exports = (sequelize, DataTypes) => {
	const blogPost = sequelize.define(
		'BlogPost',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			title: DataTypes.STRING,
			content: DataTypes.STRING,
			userId: DataTypes.INTEGER,
			published: DataTypes.STRING,
			updated: DataTypes.STRING,
		},
		{
			sequelize,
			tableName: 'blog_posts',
			underscored: true,
			timestamps: false,
		}
	);

	blogPost.associate = (models) => {
		blogPost.belongsTo(models.User, {
			as: 'user',
			foreignKey: 'user_id',
		});

		blogPost.hasMany(models.PostCategory,
      { foreignKey: 'post_id', as: 'blog_posts' });
  }; 

	return blogPost;
};

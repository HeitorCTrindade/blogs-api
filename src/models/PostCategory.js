module.exports = (sequelize, DataTypes) => {
	const PostCategory = sequelize.define(
		'PostCategory',
		{
			postId: DataTypes.INTEGER,
			categoryId: DataTypes.INTEGER,
		},
		{
			sequelize,
			tableName: 'posts_categories',
			underscored: true,
			timestamps: false,
		}
	);

	PostCategory.associate = (models) => {
		models.BlogPost.belongsToMany(models.Category, {
			as: 'categories',
			through: PostCategory,
			foreignKey: 'postId', 
      otherKey: 'categoryId',			
		});
   
		models.Category.belongsToMany(models.BlogPost, {
			as: 'blogPosts',
			through: PostCategory,
			foreignKey: 'categoryId', 
      otherKey: 'postId',						
		});
	};

	return PostCategory;
};

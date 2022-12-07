'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('blog_posts', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			content: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				field: 'user_id',
				references: {
					model: 'users',
					key: 'id',
				},
			},
			published: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
			updated: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
		}, { timestamps: true });
	},

	down: async (queryInterface, _Sequelize) => {
		return queryInterface.dropTable('blog_posts');
	},
};

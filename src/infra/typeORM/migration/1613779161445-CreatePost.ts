import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm'

export class CreatePost1613779161445 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'post',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'userId',
						type: 'int',
						isNullable: true,
					},
					{
						name: 'title',
						type: 'varchar',
					},
					{
						name: 'body',
						type: 'varchar',
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
			}),
		)

		await queryRunner.createForeignKey(
			'post',
			new TableForeignKey({
				name: 'UserPost',
				columnNames: ['userId'],
				referencedTableName: 'user',
				referencedColumnNames: ['id'],
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			}),
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('post', 'UserPost')
		await queryRunner.dropTable('post')
	}
}

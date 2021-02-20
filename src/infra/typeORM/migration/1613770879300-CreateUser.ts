import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUser1613770879300 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'user',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'name',
						type: 'varchar',
					},
					{
						name: 'username',
						type: 'varchar',
					},
					{
						name: 'email',
						type: 'varchar',
					},
					{
						name: 'address',
						type: 'json',
					},
					{
						name: 'phone',
						type: 'varchar',
					},
					{
						name: 'website',
						type: 'varchar',
					},
					{
						name: 'company',
						type: 'json',
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
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('user')
	}
}

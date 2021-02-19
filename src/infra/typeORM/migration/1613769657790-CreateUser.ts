import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateUser1613769657790 implements MigrationInterface {
	name = 'CreateUser1613769657790'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			'CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `address` json NOT NULL, `phone` varchar(255) NOT NULL, `website` varchar(255) NOT NULL, `company` json NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB',
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query('DROP TABLE `user`')
	}
}

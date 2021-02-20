import { getRepository, Repository } from 'typeorm'
import { UserEntityTypeORM } from '../../typeORM/entity/UserEntityTypeORM'
import { InputUserRepository } from '../dtos/InputUserRepository'
import { OutputUserRepository } from '../dtos/OutputUserRepository'
import { AbstractUserRepository } from '../interfaces/AbstractUserRepository'

export class UserRepositoryTypeORM
	implements AbstractUserRepository<InputUserRepository, OutputUserRepository> {
	private ormRepository: Repository<UserEntityTypeORM>

	constructor() {
		this.ormRepository = getRepository(UserEntityTypeORM)
	}

	async create(data: InputUserRepository): Promise<OutputUserRepository> {
		const user = this.ormRepository.create(data)
		await this.ormRepository.save(user)

		return user
	}

	async findOneByEmail(
		email: string,
	): Promise<OutputUserRepository | undefined> {
		const user = await this.ormRepository.findOne({ where: { email } })

		return user
	}

	async findOneById(id: number): Promise<OutputUserRepository | undefined> {
		const user = await this.ormRepository.findOne(id)

		return user
	}
}

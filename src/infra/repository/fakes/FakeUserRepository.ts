import { AbstractUserRepository } from '../interfaces/AbstractUserRepository'
import { InputUserRepository } from '../dtos/InputUserRepository'
import { OutputUserRepository } from '../dtos/OutputUserRepository'

export class FakeUserRepository
	implements AbstractUserRepository<InputUserRepository, OutputUserRepository> {
	private users = [] as OutputUserRepository[]

	async create(data: InputUserRepository): Promise<OutputUserRepository> {
		const user = {
			...data,
			id: Math.floor(Math.random() * 100),
		}

		return user
	}

	async findOneByEmail(
		email: string,
	): Promise<OutputUserRepository | undefined> {
		const user = this.users.find(item => item.email === email)

		return user
	}
}

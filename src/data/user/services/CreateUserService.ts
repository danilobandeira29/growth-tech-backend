import { AbstractUserRepository } from '@/infra/repository/interfaces/AbstractUserRepository'
import { AbstractCreateUser, User } from '@/domain/user/usecases/CreateUser'
import { UserEntity } from '@/domain/user/entity/UserEntity'

export class CreateUserService implements AbstractCreateUser {
	constructor(
		private readonly userRepository: AbstractUserRepository<UserEntity, User>,
	) {}

	async execute(data: UserEntity): Promise<User> {
		const findUserWithSameEmail = await this.userRepository.findOneByEmail(
			data.email,
		)

		if (findUserWithSameEmail) {
			throw new Error('Email is already used!')
		}

		const user = await this.userRepository.create(data)

		return user
	}
}

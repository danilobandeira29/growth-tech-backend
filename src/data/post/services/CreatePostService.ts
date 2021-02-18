import {
	AbstractCreatePost,
	Post,
} from '@/domain/post/usecases/AbstractCreatePost'
import { User } from '@/domain/user/usecases/CreateUser'
import { PostEntity } from '@/domain/post/entity/PostEntity'
import { UserEntity } from '@/domain/user/entity/UserEntity'
import { AbstractPostRepository } from '@/infra/repository/interfaces/AbstractPostRepository'
import { AbstractUserRepository } from '@/infra/repository/interfaces/AbstractUserRepository'

export class CreatePostService implements AbstractCreatePost {
	constructor(
		private readonly postRepository: AbstractPostRepository<PostEntity, Post>,
		private readonly userRepository: AbstractUserRepository<UserEntity, User>,
	) {}

	async execute(data: PostEntity): Promise<Post> {
		const findUserById = await this.userRepository.findOneById(data.userId)

		if (!findUserById) {
			throw new Error('User not found')
		}

		const post = await this.postRepository.create(data)

		return post
	}
}

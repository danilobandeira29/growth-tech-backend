import {
	AbstractLoadAllPost,
	PostWithUser,
} from '@/domain/post/usecases/AbstractLoadAllPost'
import { AbstractLoadAllPostRepository } from '@/infra/repository/interfaces/AbstractLoadAllPostRepository'
import { OutputLoadAllPostRepository } from '@/infra/repository/dtos/OutputLoadAllPostRepository'

export class LoadAllPostService implements AbstractLoadAllPost {
	constructor(
		private readonly loadAllPostRepository: AbstractLoadAllPostRepository<OutputLoadAllPostRepository>,
	) {}

	async execute(): Promise<PostWithUser[]> {
		const allPost = await this.loadAllPostRepository.findAll()

		return allPost
	}
}

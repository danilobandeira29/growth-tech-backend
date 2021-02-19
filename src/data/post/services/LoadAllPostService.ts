import { AbstractLoadAllPost } from '@/domain/post/usecases/AbstractLoadAllPost'
import { Post } from '@/domain/post/usecases/AbstractCreatePost'
import { AbstractLoadAllPostRepository } from '@/infra/repository/interfaces/AbstractLoadPostRepository'
import { OutputLoadAllPostRepository } from '@/infra/repository/dtos/OutputLoadAllPostRepository'

export class LoadAllPostService implements AbstractLoadAllPost {
	constructor(
		private readonly loadAllPostRepository: AbstractLoadAllPostRepository<OutputLoadAllPostRepository>,
	) {}

	async execute(): Promise<Post[]> {
		const allPost = await this.loadAllPostRepository.findAll()

		return allPost
	}
}

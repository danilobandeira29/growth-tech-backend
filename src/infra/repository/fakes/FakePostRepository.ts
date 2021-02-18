import { AbstractPostRepository } from '../interfaces/AbstractPostRepository'
import { InputPostRepository } from '../dtos/InputPostRepository'
import { OutputPostRepository } from '../dtos/OutputPostRepository'

export class FakePostRepository
	implements AbstractPostRepository<InputPostRepository, OutputPostRepository> {
	private posts = [] as OutputPostRepository[]

	async create(data: InputPostRepository): Promise<OutputPostRepository> {
		const post = {
			...data,
			id: Math.floor(Math.random() * 100),
		}

		this.posts.push(post)

		return post
	}
}

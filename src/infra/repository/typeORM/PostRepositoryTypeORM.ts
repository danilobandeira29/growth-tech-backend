import { getRepository, Repository } from 'typeorm'
import { AbstractPostRepository } from '../interfaces/AbstractPostRepository'
import { InputPostRepository } from '../dtos/InputPostRepository'
import { PostEntityTypeORM } from '../../typeORM/entity/PostEntityTypeORM'
import { OutputPostRepository } from '../dtos/OutputPostRepository'

export class PostRepositoryTypeORM
	implements AbstractPostRepository<InputPostRepository, OutputPostRepository> {
	private ormRepository: Repository<PostEntityTypeORM>

	constructor() {
		this.ormRepository = getRepository(PostEntityTypeORM)
	}

	async create(data: InputPostRepository): Promise<OutputPostRepository> {
		const post = this.ormRepository.create(data)
		await this.ormRepository.save(post)

		return post
	}
}

import { getRepository, Repository } from 'typeorm'
import { PostEntityTypeORM } from '../../typeORM/entity/PostEntityTypeORM'
import { OutputLoadAllPostRepository } from '../dtos/OutputLoadAllPostRepository'
import { AbstractLoadAllPostRepository } from '../interfaces/AbstractLoadAllPostRepository'

export class LoadAllPostRepositoryTypeORM
	implements AbstractLoadAllPostRepository<OutputLoadAllPostRepository> {
	private ormRepository: Repository<PostEntityTypeORM>

	constructor() {
		this.ormRepository = getRepository(PostEntityTypeORM)
	}

	async findAll(): Promise<OutputLoadAllPostRepository[]> {
		const allPost = await this.ormRepository.find()

		return allPost
	}
}

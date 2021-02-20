import { AbstractLoadAllPost } from '@/domain/post/usecases/AbstractLoadAllPost'
import { AbstractIndexController } from './interfaces/AbstractShowController'
import { HttpResponse } from './dtos/HttpResponse'

export class PostIndexController
	implements AbstractIndexController<HttpResponse> {
	constructor(private readonly loadAllPostService: AbstractLoadAllPost) {}

	async index(): Promise<HttpResponse> {
		const allPost = await this.loadAllPostService.execute()

		return {
			data: allPost,
			statusCode: 200,
		}
	}
}

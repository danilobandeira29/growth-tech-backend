import { AbstractCreatePost } from '@/domain/post/usecases/AbstractCreatePost'
import { HttpRequest } from './dtos/HttpRequest'
import { HttpResponse } from './dtos/HttpResponse'
import { AbstractCreateController } from './interfaces/AbstractCreateController'

export class PostController
	implements AbstractCreateController<HttpRequest, HttpResponse> {
	constructor(private readonly createPostService: AbstractCreatePost) {}

	async create(request: HttpRequest): Promise<HttpResponse> {
		try {
			const { userId } = request.params

			const post = await this.createPostService.execute({
				...request.body,
				userId: Number(userId),
			})

			return {
				data: post,
				statusCode: 200,
			}
		} catch (error) {
			return {
				data: error.message,
				statusCode: 400,
			}
		}
	}
}

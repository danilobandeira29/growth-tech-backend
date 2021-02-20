import { AbstractCreateUser } from '@/domain/user/usecases/CreateUser'
import { HttpRequest } from './dtos/HttpRequest'
import { HttpResponse } from './dtos/HttpResponse'
import { AbstractCreateController } from './interfaces/AbstractCreateController'

export class UserController
	implements AbstractCreateController<HttpRequest, HttpResponse> {
	constructor(private readonly createUserService: AbstractCreateUser) {}

	async create(data: HttpRequest): Promise<HttpResponse> {
		try {
			const user = await this.createUserService.execute(data.body)

			return {
				data: user,
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

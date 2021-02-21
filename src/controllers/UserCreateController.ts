import { AbstractCreateUser } from '@/domain/user/usecases/CreateUser'
import { UserHttpRequest } from './dtos/CreateUserHttpRequest'
import { HttpRequest } from './dtos/HttpRequest'
import { HttpResponse } from './dtos/HttpResponse'
import { AbstractCreateController } from './interfaces/AbstractCreateController'

export class UserCreateController
	implements AbstractCreateController<HttpRequest, HttpResponse> {
	constructor(private readonly createUserService: AbstractCreateUser) {}

	async create(data: HttpRequest<UserHttpRequest>): Promise<HttpResponse> {
		try {
			const formattedData = {
				...data.body,
				address: {
					street: data.body.street,
					suite: data.body.suite,
					city: data.body.city,
					zipcode: data.body.zipcode,
					geo: {
						lat: '99999',
						lng: '99999',
					},
				},
				website: '',
				company: {
					name: data.body.companyName,
					catchPhase: 'catchPhase',
					bs: 'bs',
				},
			}

			const user = await this.createUserService.execute(formattedData)

			return {
				data: user,
				statusCode: 200,
			}
		} catch (error) {
			return {
				data: {
					error: error.message,
				},
				statusCode: 400,
			}
		}
	}
}

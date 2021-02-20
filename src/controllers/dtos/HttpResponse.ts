import { HttpError } from './HttpError'

export type HttpResponse<T = any> = {
	data: T | HttpError
	statusCode: number
}

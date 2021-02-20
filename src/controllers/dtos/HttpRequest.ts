export type HttpRequest<T = any, K = any> = {
	body: T
	params: K
}

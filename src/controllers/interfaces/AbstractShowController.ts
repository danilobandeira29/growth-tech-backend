export interface AbstractIndexController<T> {
	index(): Promise<T>
}

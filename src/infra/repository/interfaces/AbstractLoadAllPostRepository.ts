export interface AbstractLoadAllPostRepository<T> {
	findAll(): Promise<T[]>
}

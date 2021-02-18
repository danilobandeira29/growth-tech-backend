export interface AbstractPostRepository<T, K> {
	create(data: T): Promise<K>
}

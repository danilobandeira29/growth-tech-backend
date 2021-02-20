export interface AbstractCreateController<T, K> {
	create(data: T): Promise<K>
}

export interface AbstractUserRepository<T, K> {
	findOneByEmail(email: string): Promise<K | undefined>
	create(data: T): Promise<K>
}

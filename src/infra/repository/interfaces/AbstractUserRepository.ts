export interface AbstractUserRepository<T, K> {
	findOneByEmail(email: string): Promise<K | undefined>
	findOneById(id: number): Promise<K | undefined>
	create(data: T): Promise<K>
}

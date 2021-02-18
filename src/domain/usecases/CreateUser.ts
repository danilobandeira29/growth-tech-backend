import { UserEntity } from '../user/UserEntity'

export interface User extends UserEntity {
	id: number
}

export interface AbstractCreateUser {
	execute(data: UserEntity): Promise<User>
}

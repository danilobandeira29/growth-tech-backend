import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm'

type Geolocation = {
	lat: string
	lng: string
}

type Address = {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: Geolocation
}

type Company = {
	name: string
	catchPhase: string
	bs: string
}

@Entity('user')
export class UserEntityTypeORM {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	username: string

	@Column()
	email: string

	@Column('json')
	address: Address

	@Column()
	phone: string

	@Column()
	website: string

	@Column('json')
	company: Company

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date
}

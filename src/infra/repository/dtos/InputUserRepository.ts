type UserGeoLocation = {
	lat: string
	lng: string
}

type UserAddress = {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: UserGeoLocation
}

type UserCompany = {
	name: string
	catchPhase: string
	bs: string
}

type User = {
	name: string
	username: string
	email: string
	address: UserAddress
	phone: string
	website: string
	company: UserCompany
}

export type InputUserRepository = User

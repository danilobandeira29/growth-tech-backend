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

export type UserHttpRequest = {
	name: string
	username: string
	email: string
	phone: string
	website: string
	address: Address
	company: Company
}

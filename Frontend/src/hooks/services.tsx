
export interface FormData {
	email: string;
	password: string;
}

export interface RegistrationData {
    name: string;
    email: string;
    password: string;
    height_cm: number;
    weight_kg: number;
    age: number
}

export async function fetchLogin(data: FormData) {
	const response = await fetch(`http://localhost:3001/users/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	return response
}

export const fetchRegistration = async (data: RegistrationData | null) => {
	const response = await fetch(`http://localhost:3001/users/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	return response
}

export const fetchPlayerList = async (token: string | null) => {
	const response = await fetch(`http://localhost:3001/users/players`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
	return response;
}

export const fetchGameList = async (token: string | null, id: string | null) => {
	const response = await fetch(`http://localhost:3001/users/games/${id}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,

		}
	})
	return response
}

export const fetchGetWinner = async (token: string | null) => {
	const response = await fetch(`http://localhost:3001/users/ranking/winner`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,

		}
	})
	return response
}

export const fetchGetLoser = async (token: string | null) => {
	const response = await fetch(`http://localhost:3001/users/ranking/loser`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,

		}
	})
	return response
}


export const changeName = async (token: string | null, id: string | null | undefined, newName: string) => {

	const data = { name: newName }
	console.log(JSON.stringify(data))
	const response = await fetch(`http://localhost:3001/users/players/${id}`, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	return response
}

export const fetchPlayGame = async (token: string | null, id: string | null | undefined) => {
	const response = await fetch(`http://localhost:3001/users/games/${id}`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},

	})
	return response
}

export const fetchDeleteGames = async (token: string | null, player_id: string | null | undefined) => {
	const response = await fetch(`http://localhost:3001/users/games/${player_id}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
		}
	})
	return response
}

export const fetchGetRanking = async (token: string | null) => {
	const response = await fetch(`http://localhost:3001/users/ranking/`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,

		}
	})
	return response
}
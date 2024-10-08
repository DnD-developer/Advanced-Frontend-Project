import { USER_TOKEN } from "@constants/localStorage.constant"
import axios from "axios"

export const $api = axios.create({
	baseURL: __BASE_URL__
})

$api.interceptors.request.use(function (config) {
	if (config.headers) {
		config.headers.Authorization = localStorage.getItem(USER_TOKEN) || ""
	}

	return config
})

import { useState, useCallback } from "react"

export const useInput = (defaultValue = "") => {
	const [value, setValue] = useState(defaultValue)

	const onChange = useCallback((value: string) => {
		setValue(value)
	}, [])

	return { value, onChange }
}

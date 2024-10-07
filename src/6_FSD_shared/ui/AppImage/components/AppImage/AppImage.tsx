import type { ReactNode, ImgHTMLAttributes } from "react"
import { useLayoutEffect, useState, memo } from "react"

type AppImageProps = {
	src: string
	alt?: string
	fallback?: ReactNode
	errorFallback?: ReactNode
	className?: string
} & ImgHTMLAttributes<HTMLImageElement>

export const AppImage = memo<AppImageProps>(props => {
	const { className, alt = "image", errorFallback, fallback, src, ...otherProps } = props

	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	useLayoutEffect(() => {
		const img = new Image()
		img.src = src
		img.onload = () => {
			setIsLoading(false)
		}
		img.onerror = () => {
			setIsLoading(false)
			setIsError(true)
		}
	}, [src])

	if (isLoading && fallback) {
		return fallback
	}

	if (isError && errorFallback) {
		return errorFallback
	}

	return (
		<img
			className={className}
			src={src}
			alt={alt}
			{...otherProps}
		/>
	)
})

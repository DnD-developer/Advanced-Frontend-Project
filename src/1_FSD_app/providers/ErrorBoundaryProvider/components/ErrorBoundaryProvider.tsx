import { ErrorPage } from "@widgets/ErrorPage"
import React, { type PropsWithChildren, Suspense } from "react"

type ErrorBoundaryStateProps = {
	hasError: boolean
}
export class ErrorBoundaryProvider extends React.Component<
	PropsWithChildren,
	ErrorBoundaryStateProps
> {
	constructor(props: PropsWithChildren) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error) {
		if (error) {
			return { hasError: true }
		}
	}

	componentDidCatch(error: Error): void {
		if (error) {
			// eslint-disable-next-line no-console
			console.error(error)
		}
	}

	render(): React.ReactNode {
		const { hasError } = this.state
		const { children } = this.props
		if (hasError) {
			return (
				<Suspense>
					<ErrorPage />
				</Suspense>
			)
		}

		return children
	}
}

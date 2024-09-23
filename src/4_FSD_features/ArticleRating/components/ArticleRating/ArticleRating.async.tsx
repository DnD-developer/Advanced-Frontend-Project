import { Loader } from "@ui/Loader"
import { lazy, Suspense, useMemo } from "react"
import type { ArticleRatingProps } from "./ArticleRating"

const ArticleRatingAsync = lazy(() => import("./ArticleRating"))

const ArticleRatingSuspense = (props: ArticleRatingProps) => {
	const fallback = useMemo(() => <Loader />, [])
	return (
		<Suspense fallback={fallback}>
			<ArticleRatingAsync {...props} />
		</Suspense>
	)
}

export { ArticleRatingSuspense as ArticleRating }

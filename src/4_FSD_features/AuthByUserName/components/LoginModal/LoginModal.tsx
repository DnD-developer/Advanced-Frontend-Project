import { Loader } from "@ui/Loader"
import type { ModalProps } from "@ui/Modal"
import { Modal } from "@ui/Modal"
import { memo, Suspense, useCallback, useMemo } from "react"
import { LoginForm } from "../LoginForm/LoginForm.async"

type LoginModalProps = {
	classNames?: string
} & ModalProps

export const LoginModal = memo<LoginModalProps>(props => {
	const { classNames, onClose, isOpen, lazy = false } = props

	const fallback = useMemo(() => <Loader />, [])

	const onSuccessHandler = useCallback(() => {
		onClose?.()
	}, [onClose])

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			classNames={classNames}
			lazy={lazy}
		>
			<Suspense fallback={fallback}>
				{isOpen && <LoginForm onSuccess={onSuccessHandler} />}
			</Suspense>
		</Modal>
	)
})

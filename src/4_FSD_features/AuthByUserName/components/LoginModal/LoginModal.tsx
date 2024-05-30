import { Loader } from "@ui/Loader"
import { Modal, ModalProps } from "@ui/Modal"
import { memo, Suspense, useMemo } from "react"
import { LoginForm } from "../LoginForm/LoginForm.async"

type LoginModalProps = {
	classNames?: string
} & ModalProps

export const LoginModal = memo<LoginModalProps>(props => {
	const { classNames, onClose, isOpen, lazy = false } = props

	const fallback = useMemo(() => <Loader />, [])
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			classNames={classNames}
			lazy={lazy}
		>
			<Suspense fallback={fallback}>{isOpen && <LoginForm onSuccess={onClose} />}</Suspense>
		</Modal>
	)
})

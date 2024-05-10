import { Loader } from "@ui/Loader"
import { Modal, ModalProps } from "@ui/Modal"
import { memo, Suspense } from "react"
import { LoginForm } from "../LoginForm/LoginForm.async"

type LoginModalProps = {
	classNames?: string
} & ModalProps

export const LoginModal = memo<LoginModalProps>(props => {
	const { classNames, onClose, isOpen, lazy = false } = props

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			classNames={classNames}
			lazy={lazy}
		>
			<Suspense fallback={<Loader />}>{isOpen && <LoginForm />}</Suspense>
		</Modal>
	)
})

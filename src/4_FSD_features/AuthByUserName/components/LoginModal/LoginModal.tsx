import { Loader } from "@ui/Loader"
import { Modal, ModalProps } from "@ui/Modal"
import { FC, Suspense } from "react"
import { LoginForm } from "../LoginForm/LoginForm.async"

type LoginModalProps = {
	classNames?: string
} & ModalProps

export const LoginModal: FC<LoginModalProps> = props => {
	const { classNames, onClose, isOpen, lazy = false } = props

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			classNames={classNames}
			lazy={lazy}
		>
			<Suspense fallback={<Loader />}>{isOpen && <LoginForm onSuccess={onClose} />}</Suspense>
		</Modal>
	)
}

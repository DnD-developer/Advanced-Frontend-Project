import { Modal, ModalProps } from "@ui/Modal"
import { FC } from "react"
import { LoginForm } from "../LoginForm/LoginForm"

type LoginModalProps = {
	classNames?: string
} & ModalProps

export const LoginModal: FC<LoginModalProps> = props => {
	const { classNames, onClose, isOpen, lazy } = props

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			classNames={classNames}
			lazy={lazy}
		>
			<LoginForm />
		</Modal>
	)
}

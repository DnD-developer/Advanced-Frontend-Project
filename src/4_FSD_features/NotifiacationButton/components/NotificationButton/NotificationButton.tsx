import { memo } from "react"
import { isMobile } from "react-device-detect"
import { NotificationButtonDesktopRender } from "./render/NotificationButtonDesktop/NotificationButtonDesktop.render"
import { NotificationButtonMobileRender } from "./render/NotificationButtonMobile/NotificationButtonMobile.render"

type NotificationButtonProps = {
	className?: string
	isMobileTest?: boolean
}
export const NotificationButton = memo<NotificationButtonProps>(props => {
	const { className, isMobileTest = false } = props

	if (isMobile || isMobileTest) {
		return <NotificationButtonMobileRender className={className} />
	}

	return <NotificationButtonDesktopRender />
})

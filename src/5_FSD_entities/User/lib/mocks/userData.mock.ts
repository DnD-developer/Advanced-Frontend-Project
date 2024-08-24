import { UserRoles } from "../../constants/userRoles.constant"
import type { userDataType } from "../../types/userData.type"

export const userDataMock: userDataType = {
	id: "1",
	roles: [UserRoles.USER, UserRoles.ADMIN],
	avatar: "https://i.pinimg.com/originals/f0/f8/fe/f0f8fe0e76824fd544a9154b995fb01d.jpg",
	userName: "Lucifer"
}

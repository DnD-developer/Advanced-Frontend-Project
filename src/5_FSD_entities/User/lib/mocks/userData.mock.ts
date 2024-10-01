import { UserRoles } from "../../constants/userRoles.constant"
import type { userDataType } from "../../types/userData.type"
import type { DeepPartial } from "@customTypes/global.types"

export const userDataMock: (params: DeepPartial<userDataType>) => userDataType = (
	params: DeepPartial<userDataType>
) => {
	const userData = {
		id: params?.id ?? "1",
		roles: (params?.roles ?? [UserRoles.USER, UserRoles.ADMIN]) as UserRoles[],
		avatar:
			params?.avatar ??
			"https://i.pinimg.com/originals/f0/f8/fe/f0f8fe0e76824fd544a9154b995fb01d.jpg",
		userName: params?.userName ?? "Lucifer"
	}

	return userData
}

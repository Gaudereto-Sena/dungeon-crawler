import { Action } from "routing-controllers"
import { JWTService } from "../jwt.service"
import { UserRepository } from "../../user/user.repository"

const jwtService = new JWTService()
const userRepository = new UserRepository()

export async function authorizationChecker(action: Action) {
    const authorization: string = action.request.headers.authorization
    if (!authorization) {
        return false
    }

    const [bearer, token] = authorization.split(' ')

    if (bearer !== 'Bearer') {
        return false
    }

    const payload: any = await jwtService.verify(token)

    if (payload === null) {
        return false
    }

    const user = await userRepository.findOne(payload.username)
    action.request.user = user

    return true
}
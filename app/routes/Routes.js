import express from 'express'
import * as memberController from '../controllers/MemberController'
import * as authController from '../controllers/AuthController'

const route = express.Router()

route.route('/member').get(memberController.getMember)
route.route('/member').post(memberController.addMember)
route.route('/member').put(memberController.updateMember)

route.route('/login').post(authController.loginMember)

export default route



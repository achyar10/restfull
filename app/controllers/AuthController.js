import model from '../models/MemberModel'

export const loginMember = (req, res) => {

    model.findOne({ email: req.body.email }, (err, members) => {
        if(members === null){
            return res.json({
                'status': false,
                'result': 'Email tidak terdaftar'
            })
        } else {
            if (members.password === req.body.password) {
                let result = {
                    '_id': members._id,
                    'email': members.email,
                    'password': members.password,
                    'nocard': members.nocard,
                    'fullname': members.fullname,
                }
                return res.json({
                    'status': true,
                    'result': result
                })
            } else {
                return res.json({
                    'status': false,
                    'result': 'Password salah'
                })
            }
        }
    })

}
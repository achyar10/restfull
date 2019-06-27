import member from '../models/MemberModel'

export const getMember = (req, res) => {
    member.find().exec((error, members) => {
        if(error) {
            return res.json({
                'status': false,
                'result': error
            })
        }
        return res.json({
            'status': true,
            'result': members
        })
    })
}

export const addMember = (req, res) => {
    const data = {
        email: req.body.email,
        password: req.body.password,
        nocard: req.body.nocard,
        fullname: req.body.fullname,
        bdate: req.body.bdate,
        gender: req.body.gender,
        address: {
            street: req.body.street,
            city: req.body.city,
            postcode: req.body.postcode,
            province: req.body.province
        },
        ktp: req.body.ktp,
        npwp: req.body.npwp,
        bpjs: {
            tk: req.body.tk,
            kes: req.body.kes
        },
        point: req.body.point,
        photo: req.body.photo,
        imei: req.body.imei,
        token: req.body.token,
        created_at: new Date(),
        updated_at: '',
    }
    const add = new member(data)
    add.save((error, members) => {
        if(error){
            return res.json({
                'status': false,
                'result': error
            })
        }
        return res.json({
            'status': true,
            'result': members
        })
    })
}

export const updateMember = (req, res) => {
    member.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true}, (err, member) => {
        if(err){
            return res.json({
                'status': false,
                'message': err
            })
        }
        return res.json({
            'status': true,
            'message': 'Update data success',
            member
        })
    })
}
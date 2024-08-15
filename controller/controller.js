
const userModel = require('../model/model');

module.exports.home = async (req,res) =>{

    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
    
        const data = await userModel.find()
          .skip((page - 1) * limit)
          .limit(limit);
    
        const total = await userModel.countDocuments();
        const totalPages = Math.ceil(total / limit);
    
        if (data.length > 0) {
          return res.json({
            msg: "done",
            data: data,
            status: 200,
            total,
            totalPages,
            currentPage: page
          });
        } else {
          return res.json({ msg: "data not exist", status: 400 });
        }
      } catch (error) {
        console.error(error);
    }
    
}

module.exports.createUser = async (req,res)=>{

    try {
        let alreadyexists = await userModel.findOne({email:req.body.email});
        if(alreadyexists) return res.json({msg:'user already exists',status:400});

        let user = await userModel.create(req.body);
        if(user) return res.json({msg:'user added successfully', status:200, data:user});
        else return res.json({msg:'something wrong', status:400});
        
    } catch (error) {
        console.error(error);
    }

}

module.exports.deleteUser = async (req,res)=>{
    try {
        
        let userId = await userModel.findById(req.params.id);

        if(userId)
        {
            let userDelete = await userModel.findByIdAndDelete(userId);
            if(userDelete)
            {
               return res.json({msg:'Record Deleted',data:userDelete});
            }
            else
            {
                res.json({msg:'Record Not Deleted', status:400});
            }
        }
        else
        {
           return res.json({msg:'Record not found',status:400});
        }

    } catch (error) {
        console.error(error)
    }
}

module.exports.updateUser = async (req,res) =>{
    try {
        
        let userId = await userModel.findById(req.params.id);
        if(userId)
        {
            let userUpdate = await userModel.findByIdAndUpdate(userId,req.body);
            if(userUpdate)
            {
                res.json({msg:'Record Updated', data:userUpdate});
            }
            else
            {
                res.json({msg:'Record Not Updated', status:400});
            }
        }
        else
        {
            res.json({msg:'Record not found', status:400});
        }

    } catch (error) {
        console.error(error);
    }
}




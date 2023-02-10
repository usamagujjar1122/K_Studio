const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
var nodemailer = require("nodemailer");
const jwt_decode = require("jwt-decode");
const Stripe = require('stripe')
const stripe = Stripe('sk_test_51MYavWFKy8Ssys2PIjzZHxwIgQgX1qVXLBKmuqeVXAWLMdSklmSUYzPt9wityvXRAHTl0fWSN2UiNx4X158goRmh00iBbJ8gF1')
const prices = require('../prices.json');
const Orders = require("../Models/Orders");
const Msgs = require("../Models/Msgs");
const Gallery = require("../Models/Gallary");
const {transporter} = require('../emailConfig.js')
// var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "asadullah88889@gmail.com",
//     pass: "123ASasd",
//   },
// });

exports.signup = async (req, res) => {
  console.log(req.body)
  try {
    const { fullname, email, password, address, phone } = req.body;
    console.log(fullname, email, password, phone)
    if (!fullname) {
      return res
        .status(201)
        .json({ success: false, message: "Please Enter Full Name" });
    }
    if (!email) {
      return res
        .status(201)
        .json({ success: false, message: "Please Enter Email" });
    }
    if (!email.includes('@')) {
      return res
        .status(201)
        .json({ success: false, message: "Please Enter valid Email" });
    }
    if (!password) {
      return res
        .status(201)
        .json({ success: false, message: "Please Enter Password" });
    }
    if (!address) {
      return res
        .status(201)
        .json({ success: false, message: "Please Enter Address" });
    }
    if (!phone) {
      return res
        .status(201)
        .json({ success: false, message: "Please Enter Phone Number" });
    }
    if (password.length < 8) {
      return res
        .status(201)
        .json({ success: false, message: "Password must have 8 characters" });
    }
    const fuser = await User.findOne({ email: email });
    if (fuser) {
      console.log(fuser);
      return res.status(400).json({
        success: false,
        message: "Email already registered please login to continue",
      });
    }
    const p = await bcrypt.hash(password, 12);
    const user = new User({ fullname, email, password: p, address, phone });
    const userdata = await user.save();
    return res.status(200).json({
      success: true,
      message: "Account Created Successfully. Please Login To Continue",
    });
    // const userdataf = await user.save()
    // const otp = Math.random().toString(36).substring(2, 7);
    // const mail = await transporter.sendMail({
    //   to: user.email,
    //   from: "verify.com",
    //   subject: "email verification",
    //   html: `<p>Your otp code is ${otp}</p>`,
    // });
    // user.verifyemailtoken = otp;
    // if (mail) {
    //   return res.status(200).json({
    //     success: true,
    //     message:
    //       "Email has been sent to your email accout please verify to continue",
    //     user: userdata._id,
    //   });
    // } else {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "Please Enter Valid Email" });
    // }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res
        .status(201)
        .json({ success: false, message: "Please Enter Email" });
    }
    if (!password) {
      return res
        .status(201)
        .json({ success: false, message: "Please Enter Password" });
    }
    const user = await User.findOne({ email: email });
    if (user) {
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        const token = jwt.sign({ _id: user._id }, "JWT_SECRET");
        return res
          .status(200)
          .json({ success: true, message: "Login Success", data: user, token });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Invalid Crediantials" });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "Email is not Register",
      });
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
exports.loaduser = async (req, res) => {
  const token = req.body.token;
  var data = jwt_decode(token);
  try {
    const docs = await User.findById(data._id)

    if (docs) {
      res.send({ "status": "success", "data": docs })
    } else {
      res.send({ "status": "failed", "message": "user not found" })

    }

  } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "failed to get user" })
  }
};

exports.loadorders = async (req, res) => {
  const token = req.body.token;
  var data = jwt_decode(token);
  try {
    const docs = await Orders.find({ id: data._id })

    if (docs) {
      res.send({ "status": "success", "data": docs })
    } else {
      res.send({ "status": "failed", "message": "user not found" })

    }

  } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "failed to get user" })
  }
};

exports.order = async (req, res) => {
  const { value, date, time, id, fullname } = req.body
  const datee = date.toString() 
  const timee = time.toString() 
  console.log(req.body)
  const status = "pending"
  try {
    const user = new Orders({ value, date:datee, time:timee, id, status, fullname });
    const saved = await user.save()
    if (saved) {
      return res.status(200).json({
        success: true,
        message: "Order placed successfully",
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Failed to place order",
      });
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }

};




exports.payment = async (req, res) => {
  const { value, date, time } = req.body
  const arr = date.split(',')
  const newDatee = arr[0]
  const newDate = Buffer.from(newDatee, 'ascii');
  const arr1 = time.split(',')
  const newTimee = arr1[1]
  const newTime = Buffer.from(newTimee, 'ascii');

  if (!date) {
    return res
      .status(201)
      .json({ success: false, message: "Please Enter Date" });
  }
  if (!time) {
    return res
      .status(201)
      .json({ success: false, message: "Please Enter Time" });
  }
  const getId = () => {
    let id
    prices.map((item) => {
      if (item.name === value) {
        id = item.id;
      }
    })
    return (id)
  }
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: getId(),
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/success?value=${value}&date=${newDate}&time=${newTime}`,
    cancel_url: `http://localhost:300/cancled`,
  });

  res.send({ url: session.url });
};

exports.getusers = async (req, res) => {
  try {
    const docs = await User.find({})

    if (docs) {
      res.send({ "status": "success", "data": docs })
    } else {
      res.send({ "status": "failed", "message": "user not found" })

    }

  } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "failed to get user" })
  }
};

exports.getorders = async (req, res) => {
  try {
    const docs = await Orders.find({})

    if (docs) {
      res.send({ "status": "success", "data": docs })
    } else {
      res.send({ "status": "failed", "message": "user not found" })

    }

  } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "failed to get user" })
  }
};

exports.getmsgs = async (req, res) => {
  try {
    const docs = await Msgs.find({})

    if (docs) {
      res.send({ "status": "success", "data": docs })
    } else {
      res.send({ "status": "failed", "message": "user not found" })

    }

  } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "failed to get user" })
  }
};

exports.loadimgs = async (req, res) => {
  try {
    const docs = await Gallery.find({})

    if (docs) {
      res.send({ "status": "success", "data": docs })
    } else {
      res.send({ "status": "failed", "message": "user not found" })

    }

  } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "failed to get user" })
  }
};

exports.approve = async (req, res) => {
  const item = req.body.item

  try {
    const docs  = await Orders.findByIdAndUpdate(item._id, { status: 'approved' })
        if (docs) {
          res.send({ "status": "success", "data": docs })
        }
        else {
          res.send({ "status": "failed", "message": "order not found" })
        }
  } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "failed to get user" })
  }
};

exports.cancle = async (req, res) => {
  const item = req.body.item

  try {
    const docs  = await Orders.findByIdAndUpdate(item._id, { status: 'cancelled' })
        if (docs) {
          res.send({ "status": "success", "data": docs })
        }
        else {
          res.send({ "status": "failed", "message": "order not found" })
        }
  } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "failed to get user" })
  }
};

exports.complete = async (req, res) => {
  const item = req.body.item

  try {
    const docs  = await Orders.findByIdAndUpdate(item._id, { status: 'completed' })
        if (docs) {
          res.send({ "status": "success", "data": docs })
        }
        else {
          res.send({ "status": "failed", "message": "order not found" })
        }
  } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "failed to get user" })
  }
};

exports.msgstatus = async (req, res) => {
  const item = req.body.item

  try {
    const docs  = await Msgs.findByIdAndUpdate(item._id, { status: 'read' })
        if (docs) {
          res.send({ "status": "success", "data": docs })
        }
        else {
          res.send({ "status": "failed", "message": "order not found" })
        }
  } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "failed to get user" })
  }
};

exports.msg = async (req, res) => {
  const {name,email,subject,msg} = req.body
  if (!name) {
    return res
      .status(201)
      .json({ success: false, message: "Please Enter name" });
  }
  if (!email) {
    return res
      .status(201)
      .json({ success: false, message: "Please Enter Email" });
  }
  if (!subject) {
    return res
      .status(201)
      .json({ success: false, message: "Please Enter Subject" });
  }
  if (!msg) {
    return res
      .status(201)
      .json({ success: false, message: "Please Enter Message" });
  }
  try {
    const sent = new Msgs({ name, email, subject, msg ,status:'new'});
    const userdata = await sent.save();
    return res.status(200).json({
      success: true,
      message: "Message send successfully",
    });
  } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "Failed to send message" })
  }
};

exports.Delete = async (req, res) => {
  const selected = req.body.selected
  selected.map( async (item)=>{
    
      User.findOneAndDelete({email:item}, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
          console.log(docs)    
        }
    });
    })
  res.send({status:'success',message:'Data deleted successfully'})

};

exports.deleteimg = async (req, res) => {
       const id = req.body.id
       Gallery.findOneAndDelete({_id:id}, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
          console.log(docs)    
        }
    });
  res.send({status:'success',message:'Data deleted successfully'})

};


exports.deleteorder = async (req, res) => {
  const id = req.body.item._id
  Orders.findOneAndDelete({_id:id}, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
      console.log(docs)    
    }
});
res.send({status:'success',message:'Data deleted successfully'})

};
exports.upload = async (req, res) => {
  const {image,value} = req.body
  console.log(image,value)
  if (!image) {
    return res
      .status(201)
      .json({ success: false, message: "Please Select Image" });
  }
  if (!value) {
    return res
      .status(201)
      .json({ success: false, message: "Please Select catagorry" });
  }
  try {
    const sent = new Gallery({ img:image,value });
    const userdata = await sent.save();
    return res.status(200).json({
      success: true,
      message: "Pictiure uploaded successfully",
    });
  } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "Failed to send message" })
  }
};

exports.forgot = async (req, res) => {
  const { email } = req.body
  console.log(email)
        
  if (email) {
      const user = await User.findOne({ email: email })
      if (user) {
        var otp = Math.floor(100000 + Math.random() * 900000);
          // Send Email
          let info = await transporter.sendMail({
            from: 'usmughal333@gmail.com',
            to: user.email,
            subject: "K-Studio - Password Reset OTP",
            html: `<p>your otp to reset password is <h2>${otp}</h2></p>`
          })
          res.send({ "status": "success", "message": "Password Reset Email Sent... Please Check Your Email",otp: otp })
      } else {
          res.send({ "status": "failed", "message": "Email doesn't exists" })
      }
  } else {
      res.send({ "status": "failed", "message": "Email Field is Required" })
  }
}

exports.reset = async (req, res) => {
  const {email,newpassword} = req.body
  if (newpassword.length < 8) {
    return res
      .status(201)
      .json({ success: false, message: "Password must have 8 characters" });
  }
  const p = await bcrypt.hash(newpassword, 12);
  const user = await User.findOneAndUpdate({email:email},{password:p})
  res
      .status(201)
      .json({ success: true, message: "Password changed successfully" });
  
}

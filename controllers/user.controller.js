const User = require('../models/user.model.js');

exports.findall = async(req, res)=>{
  const user = await User.scan().exec();
  return res.json({user});
};

exports.find = async(req, res)=>{
  const user = await User.get(req.params.id);
  return res.json(user);
};

exports.save = async(req, res)=>{
  const user = await User.create(req.body);
  return res.json(user);
};

exports.update = async(req, res)=>{
  const user = await User.update(req.params.id,req.body);
  return res.json(user);
};

exports.delete = async(req, res)=>{
  await User.delete(req.params.id);
  return res.json({msg: 'Deleted'});
};


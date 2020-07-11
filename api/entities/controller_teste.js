//const UserType =  require('./model_teste');


exports.getAll = async function (req, res) {
  //  const users = await UserType.findAll()
   // res.json(users);
};

exports.insert = function (req, res) {
    res.json(["teste1", "teste2", "teste3", req.body]);
};
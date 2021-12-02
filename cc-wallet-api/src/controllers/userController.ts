import { User } from "../entity/User";
import { userService } from "../services/userService";

const service = new userService();

const createUser = async (req, res) => { 
   const { name, email } = req.body;
   const newUser = new User(name, email);
   const { status, data, message } = await service.save(newUser);
   if(message){
      return res.status(status).json(message)
   }
   return res.status(status).json(data);
}

const getAllUsers = async (req, res) => {
   const { status, data } = await service.getAll();
   return res.status(status).json(data);
}

const getUserCounts = async (req, res) => {
   const userId = parseInt(req.params.userId);
   const { status, data, message } = await service.getUserCountsById(userId);
   if(message){
      return res.status(status).json(message)
   }
   return res.status(status).json(data);
}

module.exports = { createUser, getAllUsers, getUserCounts }
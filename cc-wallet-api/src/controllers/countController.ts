import { Count } from "../entity/count";
import { countService } from "../services/countService"
import { userService } from "../services/userService";

const countServices = new countService();
const userServices = new userService();

const addCount = async (req, res) => {
const { userId, value, description } = req.body;
const date = new Date()
const user = await userServices.getById(userId)
if(!user){
    return res.status(404).json('user not found')
}
const newCount = new Count(value, description, date, user.data);
const { status, data, message } = await countServices.save(newCount)
if(message){
  return res.status(status).json(message)
 }
return res.status(status).json(data);
}

const getAllCounts = async (req, res) => {
  const { status, data } = await countServices.getAll();
  return res.status(status).json(data);
}

const deleteById = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await countServices.remove(id);
  if(message){
    return res.status(status).json(message)
   }
  return res.status(status).json(data);
  }

module.exports = { addCount, getAllCounts, deleteById }
import { getManager } from "typeorm";
import { User } from "../entity/User";


export class userService{
  async save(user: User) {
    if (!user.name || !user.email) { 
      return { status: 400, message: 'no entries. Try again.' };
  }
      const saveUser = await getManager().save(user);
      return { status: 200, data: saveUser };
  }
  async getAll(){
    const allUsers = await getManager().find(User);
    return { status: 200, data: allUsers };
  }
   async getById(id: number){
     const findUser = await getManager().findOne(User, id);
     return { status: 200, data: findUser };
   }

  async getUserCountsById(id:number){
    const user = await getManager().findOne(User, id, {
      relations: ['count']
  });
  if(!user.count){
    return {status: 404, message: "counts not found"}
  }
  return { status: 200, data: user.count };
  }

}
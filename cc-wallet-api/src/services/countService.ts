import { getManager } from "typeorm";
import { Count } from "../entity/count";

export class countService{
  async save(count: Count) { 
    if (!count.value || !count.description) { 
       return { status: 400, message: 'no entries. Try again.' };
    }
    const saveCount = await getManager().save(count);
    return { status: 200, data: saveCount };
  }

}
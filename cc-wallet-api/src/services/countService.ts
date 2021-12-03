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
  async getAll(){
    const allCounts = await getManager().find(Count);
    return { status: 200, data: allCounts };
  }

  async remove(id: number) {
    const lancamentoEncontrado = await getManager().findOne(Count, id);
    if (lancamentoEncontrado) {
        await getManager().delete(Count, id);
        return { status: 204, data: lancamentoEncontrado};
    }
    return { status: 404, message: 'id not found'};
}

}
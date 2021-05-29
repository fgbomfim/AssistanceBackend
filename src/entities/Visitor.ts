import { v4 as uuidv4 } from 'uuid';

export class Visitor {
  public id: string;
  public name: string;
  public assistanceId: string;

  constructor(props: Omit<Visitor, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuidv4();
    } else {
      this.id = id;
    }
  }
}
import { uuid } from "uuidv4";

export class Visitor {
  public id: string;
  public name: string;
  public assistanceId: string;

  constructor(props: Omit<Visitor, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    } else {
      this.id = id;
    }
  }
}
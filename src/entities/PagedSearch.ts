import { IPagedSearch } from "../interfaces/IPagedSearch";

export class PagedSearch {
  public page: number;
  public size: number;

  constructor(props: IPagedSearch) {
    Object.assign(this, props);
  }
}
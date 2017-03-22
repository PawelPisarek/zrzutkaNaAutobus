import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import {OLD_URL} from "../shared/data.service";
import {CommentModel, CommentChildrenModel} from "../comment/comment";

@Injectable()
export class CommentService {

  constructor(private http: Http) {
  }

  private JSON_HEADER = {headers: new Headers({'Content-Type': 'application/json'})};


  showComments(id) {
    return this.http.get(`${OLD_URL}/delayed-transport/${id}/comment`)
      .map(resp => resp.json())
      .map(records => records.map(
        (record: CommentModel) => new CommentModel(record.id, record.text, record.author, record.root, record.data)))
      .map((data: CommentModel[]) => {
        return data.map(
          (record: CommentModel) => new CommentChildrenModel(record.id, record.text, record.author, record.root, record.data, data))
      })
      .map((noRoot: CommentChildrenModel[]) => {
        return noRoot.filter((root) => {
          return !root.root
        })
          .map(rootChildren => {
            return new CommentChildrenModel(rootChildren.id,
              rootChildren.text,
              rootChildren.author,
              rootChildren.root,
              rootChildren.data,
              rootChildren.children.filter(child => {
                return child.root == rootChildren.id
              }))
          })
      })
  }

  postData(form,id) {
    const body = JSON.stringify(form);
    return this.http.post(`${OLD_URL}/delayed-transport/${id}/comment`, body, this.JSON_HEADER)
      .map(resp => resp.json())
      .map(records => {
        return [];
      });
  }
}

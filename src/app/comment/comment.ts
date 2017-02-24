export class CommentModel {
  constructor(public id: string, public text: string, public author: string, public root: string, public data: number) {

  }
}
export class CommentFormModel {
  constructor(public text: string, public root: string) {

  }
}
export class CommentChildrenModel extends CommentModel {
  constructor(public id: string, public text: string, public author: string, public root: string, public data: number, public children: CommentModel[]) {
    super(id, text, author, root, data)
  }
}

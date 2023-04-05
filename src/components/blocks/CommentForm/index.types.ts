interface IComment {
  nickName: string;
  created: string;
  content: string;
}

export interface CommentFormProps {
  comments: IComment[] | string[];
  addComment: (comment: FormData) => void;
}

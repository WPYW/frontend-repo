interface IComment {
  nickName: string;
  created: string;
  content: string;
}

export interface CommentFormProps {
  comments: IComment[];
  addComment: (comment: FormData) => void;
}

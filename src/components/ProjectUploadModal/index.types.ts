export interface IProject {
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  demoSiteLink: string;
  hashtagList: string[];
  thumbnailList: File[];
}

export interface IProjectUploadForm {
  projectUploadForm: IProject;
  setProjectUploadForm: React.Dispatch<React.SetStateAction<IProject>>;
}

export interface IFormInput {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  maxLength?: number;
  required?: boolean;
}

export interface IHashtagFormInput {
  label: string;
  hashtagList: string[];
  setProjectUploadForm: React.Dispatch<React.SetStateAction<IProject>>;
  required?: boolean;
}

export interface IImageFormInput {
  label: string;
  thumbnailList: File[];
  setProjectUploadForm: React.Dispatch<React.SetStateAction<IProject>>;
  required?: boolean;
}

export interface IFormSubmitButton {
  projectUploadForm: IProject;
}

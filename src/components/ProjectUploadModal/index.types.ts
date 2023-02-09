export interface IProject {
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  demoSiteLink: string;
  hashtagArr: string[];
}

export interface IProjectUploadForm {
  projectUploadForm: IProject;
  setProjectUploadForm: React.Dispatch<React.SetStateAction<IProject>>;
}

export interface IHashtagInput {
  label: string;
  hashtagArr: string[];
  setProjectUploadForm: React.Dispatch<React.SetStateAction<IProject>>;
  required?: boolean;
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

export interface IFormSubmitButton {
  projectUploadForm: IProject;
}

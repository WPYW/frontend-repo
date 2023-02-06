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
  hashtagArr: string[];
  setProjectUploadForm: React.Dispatch<React.SetStateAction<IProject>>;
}

export interface IFormInput {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  maxLength?: number;
}

export interface IFormSubmitButton {
  projectUploadForm: IProject;
}

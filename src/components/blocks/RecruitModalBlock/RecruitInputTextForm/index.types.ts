export interface DescriptionInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setTitle: {
    value: string;
    setValue: (value: string) => void;
  };
  setDescription: {
    descriptionValue: string;
    setDescriptionValue: (value: string) => void;
  };
}

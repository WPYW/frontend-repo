export interface DatePickerProps {
  label: string;
  selectedDate: Date | null;
  setDate: {
    value: string;
    setValue: (date: Date | null) => void;
  };
}

import React from 'react';
import styled from 'styled-components';
import DeleteButtonImagePath from '@/assets/delete-button-circle.svg';

import { ReactComponent as ImageInputButton } from '@/assets/image-input-button.svg';

interface IProjectUploadForm {
  projectTitle: string;
  projectDescription: string;
  githubLink: string;
  demositeLink: string;
  projectHashtag: string[];
  previewImages: File[];
}

interface IImageFormInput {
  label: string;
  previewImages: File[];
  setProjectUploadForm: React.Dispatch<React.SetStateAction<IProjectUploadForm>>;
  required?: boolean;
}

export function ImageFormInput({
  label,
  previewImages,
  setProjectUploadForm,
  ...props
}: IImageFormInput) {
  const onImageFormInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      let imageList = [...previewImages, ...event.target.files];

      if (imageList.length > 3) {
        imageList = imageList.slice(0, 3);
      }
      setProjectUploadForm((prev) => ({ ...prev, previewImages: [...imageList] }));
    }
  };

  const onDeleteImageHandler = (index: number) => {
    const newImageList = previewImages;
    newImageList.splice(index, 1);
    setProjectUploadForm((prev) => ({ ...prev, previewImages: [...newImageList] }));
  };

  return (
    <ImageFormInputWrapper>
      <LabelWrapper>
        <Required required={props.required}>*</Required>
        <Label>{label}</Label>
      </LabelWrapper>
      <ImagesWrapper>
        {previewImages.map((item, index) => {
          return (
            <PreviewImageWrapper key={index} onClick={() => onDeleteImageHandler(index)}>
              <PreviewImage src={URL.createObjectURL(item)} alt={`preview-image-${index}`} />
              <DeleteButton />
            </PreviewImageWrapper>
          );
        })}
        <ImageInputButtonWrapper htmlFor="previewImages">
          <ImageInputButton
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '8px',
            }}
          />
        </ImageInputButtonWrapper>
        <ImageInput
          type="file"
          id="previewImages"
          name="previewImages"
          accept="image/png, image/jpeg, image/gif, image/svg"
          multiple
          onChange={onImageFormInputChangeHandler}
        />
      </ImagesWrapper>
    </ImageFormInputWrapper>
  );
}

const ImageFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  &::after {
    content: '추천 사이즈:\\A JPG, PNG, GIF, SVG. 최대 10MB';

    font-size: var(--base-text-size-xsmall);
    color: #878787;

    text-align: end;

    white-space: pre-wrap;
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

const Required = styled.div<{ required: boolean | undefined }>`
  color: var(--project-upload-modal-input-required-color);

  visibility: ${(props) => (!props.required ? 'hidden' : '')};
`;

const Label = styled.label`
  font-weight: var(--base-text-weight-bold);
  font-size: var(--base-text-size-small);
  color: var(--project-upload-modal-input-label-text-color);
`;

const ImagesWrapper = styled.div`
  display: flex;
  gap: 10px;

  height: 100px;
`;

const ImageInputButtonWrapper = styled.label`
  cursor: pointer;
`;

const ImageInput = styled.input`
  display: none;
`;

const PreviewImageWrapper = styled.div`
  position: relative;

  width: 25%;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  cursor: pointer;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 8px;
`;

const DeleteButton = styled.div`
  width: 20px;
  height: 20px;

  position: absolute;
  top: 5px;
  right: 5px;

  background-image: url(${DeleteButtonImagePath});
  background-repeat: no-repeat;
  background-size: cover;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { IImageFormInput } from './index.types';

export function ImageFormInput({
  label,
  thumbnailList,
  setProjectUploadForm,
  ...props
}: IImageFormInput) {
  const [previewList, setPreviewList] = useState<string[]>([]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      let imageList = [...thumbnailList];
      let imageUrlList = [...previewList];
      for (const file of event.target.files) {
        imageList.push(file);
        imageUrlList.push(URL.createObjectURL(file));
      }

      if (imageList.length > 3) {
        imageList = imageList.slice(0, 3);
        imageUrlList = imageUrlList.slice(0, 3);
      }
      setProjectUploadForm((prev) => ({ ...prev, thumbnailList: [...imageList] }));
      setPreviewList(imageUrlList);
    }
  };

  const onDeleteImageHandler = (index: number) => {
    const newImageList = thumbnailList;
    const newImageUrlList = previewList;
    newImageList.splice(index, 1);
    newImageUrlList.splice(index, 1);
    setProjectUploadForm((prev) => ({ ...prev, thumbnailList: [...newImageList] }));
    setPreviewList([...newImageUrlList]);
  };

  return (
    <FormInputWrapper>
      <LabelWrapper>
        <Required required={props.required}>*</Required>
        <Label>{label}</Label>
      </LabelWrapper>

      <ImageInputWrapper>
        {previewList.map((item, index) => {
          return (
            <ImagePreviewWrapper key={index} onClick={() => onDeleteImageHandler(index)}>
              <ImagePreview src={item} alt="" />
              <CloseButton />
            </ImagePreviewWrapper>
          );
        })}
        <ImageInputButton htmlFor="thumbnail">+</ImageInputButton>
        <ImageInput
          type="file"
          id="thumbnail"
          name="thumbnail"
          accept="image/png, image/jpeg, image/gif, image/svg"
          multiple
          onChange={onChangeHandler}
        />
      </ImageInputWrapper>
    </FormInputWrapper>
  );
}

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
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
  font-size: var(--base-text-size-small);
  font-weight: var(--base-text-weight-medium);
  color: var(--project-upload-modal-image-input-label-text-color);
`;

const ImageInputWrapper = styled.div`
  display: flex;
  gap: 10px;

  margin: 0 auto;

  width: 100%;
  height: 100px;
`;

const ImageInputButton = styled.label`
  font-size: var(--base-text-size-3xlarge);
  color: var(--project-upload-modal-image-input-wrapper-text-color);

  background-color: var(--project-upload-modal-image-input-wrapper-background-color);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 25%;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImagePreviewWrapper = styled.div`
  font-size: var(--base-text-size-3xlarge);
  color: var(--project-upload-modal-image-input-wrapper-text-color);

  background-color: var(--project-upload-modal-image-input-wrapper-background-color);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  cursor: pointer;

  overflow: hidden;

  position: relative;

  width: 25%;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CloseButton = styled.div`
  width: 20px;
  height: 20px;

  position: absolute;
  top: 5px;
  right: 5px;

  background-image: url('/close-circle.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

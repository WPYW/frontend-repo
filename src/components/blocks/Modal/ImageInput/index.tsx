import React from 'react';
import * as S from './index.styles';
import { ImageInputProps } from './index.types';

export function ImageInput({ setImageInput, ...rest }: ImageInputProps) {
  const { images, addImage, removeImage } = setImageInput;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files || images.length >= 3) return;

    if (files.length > 3) {
      alert('이미지는 3장 이하로만 입력해주세요');
      return;
    }

    addImage([...files]);
  };

  const deleteImage = (index: number) => {
    const newImageList = images;
    newImageList.splice(index, 1);
    removeImage(newImageList);
  };

  return (
    <S.Wrapper>
      {images.map((image, index) => (
        <S.Preview
          key={index}
          src={URL.createObjectURL(image)}
          alt="preview image"
          onClick={() => deleteImage(index)}
        />
      ))}
      <S.InputWrapper htmlFor="image-input">
        <S.Label />
        <S.Input
          id="image-input"
          type="file"
          accept="image/png, image/jpeg, image/gif, image/svg"
          multiple
          onChange={onChangeHandler}
          {...rest}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
}

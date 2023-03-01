import React, { useState } from 'react';
import * as S from './index.styles';
import { CarouselProps } from './index.types';

export function Carousel({ imgUrlList }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const onButtonLeftOnClick = () => {
    if (index <= 0) return;
    setIndex((prev) => prev - 1);
  };

  const onButtonRightOnClick = () => {
    if (imgUrlList.length - 1 === index) return;
    if (index >= 2) return;
    setIndex((prev) => prev + 1);
  };

  return (
    <S.Wrapper>
      {imgUrlList.length >= 1 && index !== 0 && (
        <S.Button
          direction="left"
          role="button"
          aria-label="carousel-left-button"
          tabIndex={-1}
          onClick={onButtonLeftOnClick}
        >
          <S.ButtonLeftImage />
        </S.Button>
      )}

      <S.Image src={imgUrlList[index]} alt="carousel image" />

      {imgUrlList.length >= 1 && index !== 2 && (
        <S.Button
          direction="right"
          role="button"
          aria-label="carousel-right-button"
          tabIndex={-1}
          onClick={onButtonRightOnClick}
        >
          <S.ButtonRightImage />
        </S.Button>
      )}
    </S.Wrapper>
  );
}

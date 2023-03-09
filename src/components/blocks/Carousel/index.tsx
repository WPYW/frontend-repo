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

  const onMouseDownHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    const slide = event.target as HTMLElement;

    const shiftX = event.clientX - slide.getBoundingClientRect().left;

    slide.style.position = 'relative';

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event: { clientX: number }) {
      let newLeft =
        event.clientX - shiftX - (slide.parentNode as HTMLElement).getBoundingClientRect().left;

      if (newLeft < 0) {
        slide.style.left = newLeft + 'px';
      }

      const rightEdge = slide.offsetWidth;

      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      slide.style.left = newLeft + 'px';
    }

    function onMouseUp() {
      if (parseInt(slide.style.left) >= 200) {
        onButtonLeftOnClick();
      }

      if (parseInt(slide.style.left) <= -200) {
        onButtonRightOnClick();
      }

      slide.style.position = '';
      slide.style.left = '';

      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };

  return (
    <S.Wrapper onClick={(event) => event.preventDefault()}>
      <S.SubWrapper>
        <S.ImageWrapper>
          <S.Image
            src={imgUrlList[index]}
            alt="carousel image"
            draggable={false}
            onMouseDown={onMouseDownHandler}
          />
        </S.ImageWrapper>
      </S.SubWrapper>
      <S.DotsWrapper>
        {imgUrlList.map((_, imgIndex) => (
          <S.Dot key={imgIndex} active={imgIndex === index} onClick={() => setIndex(imgIndex)} />
        ))}
      </S.DotsWrapper>
    </S.Wrapper>
  );
}

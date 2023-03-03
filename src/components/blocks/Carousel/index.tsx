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
      <S.SubWrapper onClick={(event) => event.preventDefault()}>
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

        <S.Image
          src={imgUrlList[index]}
          alt="carousel image"
          draggable={false}
          onDragStart={() => false}
          onMouseDown={(event) => {
            event.preventDefault();
            const slide = event.target as HTMLElement;

            const shiftX = event.clientX - slide.getBoundingClientRect().left;

            slide.style.position = 'relative';

            function moveAt(pageX: number) {
              slide.style.left = pageX - shiftX + 'px';
            }

            function onMouseMove(event) {
              moveAt(event.pageX);

              const left = parseInt(slide.style.left);
              if (left > 0 && left > slide.offsetHeight / 2) {
                onButtonLeftOnClick();
                slide.style.left = 0 + 'px';
                slide.removeEventListener('mousemove', onMouseMove);
              }

              if (left < 0 && -left > slide.offsetHeight / 2) {
                onButtonRightOnClick();
                slide.style.left = 0 + 'px';
                slide.removeEventListener('mousemove', onMouseMove);
              }
            }

            slide.addEventListener('mousemove', onMouseMove);

            slide.onmouseup = function () {
              slide.removeEventListener('mousemove', onMouseMove);
              slide.onmouseup = null;
              slide.style.left = 0 + 'px';
            };
          }}
          // onDrag={(event) => {
          //   if (startPos <= event.pageX) {
          //     (event.target as HTMLElement).style.left = event.pageX - startPos + 'px';
          //   }

          //   if (startPos > event.pageX) {
          //     (event.target as HTMLElement).style.left = -(startPos - event.pageX) + 'px';
          //   }

          //   if (
          //     parseInt((event.target as HTMLElement).style.left) >
          //     (event.target as HTMLElement).offsetWidth / 2
          //   )
          //     setIndex((prev) => prev + 1);

          //   if (
          //     parseInt((event.target as HTMLElement).style.left) <
          //     (event.target as HTMLElement).offsetWidth / 2
          //   )
          //     setIndex((prev) => prev - 1);
          // }}
          // onMouseUp={(event) => {
          //   (event.target as HTMLElement).style.position = '';
          //   (event.target as HTMLElement).style.left = 0 + 'px';
          // }}
        />

        {imgUrlList.length >= 1 && index !== imgUrlList.length - 1 && (
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
      </S.SubWrapper>
      <S.DotsWrapper>
        <S.Dot active={index === 0} onClick={() => setIndex(0)} />
        <S.Dot active={index === 1} onClick={() => setIndex(1)} />
        <S.Dot active={index === 2} onClick={() => setIndex(2)} />
      </S.DotsWrapper>
    </S.Wrapper>
  );
}

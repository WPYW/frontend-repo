import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as CarouselButtonLeft } from '@/assets/arrow-left.svg';
import { ReactComponent as CarouselButtonRight } from '@/assets/arrow-right.svg';

interface ICarousel {
  projectImages: string[];
}

export function Carousel({ projectImages }: ICarousel) {
  const [index, setIndex] = useState(0);
  return (
    <CarouselWrapper>
      {projectImages && (
        <CarouselButtonLeftWrapper
          onClick={() => {
            if (index <= 0) return;
            setIndex((prev) => prev - 1);
          }}
        >
          <CarouselButtonLeft />
        </CarouselButtonLeftWrapper>
      )}

      <ProjectImage
        src={typeof projectImages === 'undefined' ? '/alt-image.svg' : projectImages[index]}
      />
      {projectImages && (
        <CarouselButtonRightWrapper
          onClick={() => {
            if (index >= 2) return;
            setIndex((prev) => prev + 1);
          }}
        >
          <CarouselButtonRight />
        </CarouselButtonRightWrapper>
      )}
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #bcbcbc;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  overflow: hidden;

  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselButtonLeftWrapper = styled.button`
  all: unset;
  position: absolute;
  left: 0;

  height: 100%;

  display: flex;
  align-items: center;

  padding-left: 20px;
`;

const CarouselButtonRightWrapper = styled.button`
  all: unset;

  position: absolute;
  right: 0;

  height: 100%;

  display: flex;
  align-items: center;

  padding-right: 20px;
`;

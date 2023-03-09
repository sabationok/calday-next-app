import { useState } from 'react';
import testData from '@/testData';
import FeatureItem from './FeatureItem/FeatureItem';
import Image from 'next/image';

import * as S from './Features.style';

const { featuresList } = testData.featuresSectionData;

const Features: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onFutureItemClick = (idx: number) => {
    setCurrent(idx);
  };
  return (
    <>
      <S.Features>
        <S.FeaturesList>
          {featuresList.map((item, idx) => (
            <FeatureItem
              key={item.id}
              {...{
                ...item,
                onClick: () => {
                  onFutureItemClick(idx);
                },
                isActive: current === idx,
              }}
            />
          ))}
        </S.FeaturesList>

        <S.FeaturesIlustrationImage>
          <Image
            src={featuresList[current].imgURL}
            alt={featuresList[current].imgAlt}
          />
        </S.FeaturesIlustrationImage>
      </S.Features>
    </>
  );
};

export default Features;

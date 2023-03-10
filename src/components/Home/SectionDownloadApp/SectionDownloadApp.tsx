import testData from '@/testData';
import Image from 'next/image';
import Link from 'next/link';

import * as S from './SectionDownloadApp.style';

const SectionDownloadApp: React.FC = () => {
  const { downloadAppSectionData, globals } = testData;
  return (
    <S.SectionDownloadApp>
      <S.ImageSide>
        <Image
          src={downloadAppSectionData.phoneImage.image}
          alt={downloadAppSectionData.phoneImage.alt}
        />
      </S.ImageSide>

      <S.TextSide>
        <S.Title>{downloadAppSectionData.title}</S.Title>

        <S.SubTitle>{downloadAppSectionData.descr}</S.SubTitle>

        <S.DownloadButtons>
          <S.GetAppLink href={globals.downloadApp.googleLink.link}>
            <S.LinkIcon
              src={globals.downloadApp.googleLink.img}
              alt={globals.downloadApp.googleLink.alt}
              width={26}
            />
            <S.LinkTitle>GET IT ON</S.LinkTitle>

            <S.LinkName>Google Play</S.LinkName>
          </S.GetAppLink>

          <S.GetAppLink href={globals.downloadApp.appleLink.link}>
            <S.LinkIcon
              src={globals.downloadApp.appleLink.img}
              alt={globals.downloadApp.appleLink.alt}
              width={26}
            />
            <S.LinkTitle>Download on the</S.LinkTitle>

            <S.LinkName>App Store</S.LinkName>
          </S.GetAppLink>
        </S.DownloadButtons>
      </S.TextSide>
    </S.SectionDownloadApp>
  );
};

export default SectionDownloadApp;

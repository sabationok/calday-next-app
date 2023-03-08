import testData from '@/testData';
import Image from 'next/image';
import Link from 'next/link';

import s from './DownloadAppLink.module.css';
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
          <Link
            href={globals.downloadApp.googleLink.link}
            className={s.getAppLink}
          >
            <Image
              src={globals.downloadApp.googleLink.img}
              alt={globals.downloadApp.googleLink.alt}
              width={26}
              className={s.linkIcon}
            />
            <span className={s.linkTitle}>GET IT ON</span>
            <span className={s.linkName}>Google Play</span>
          </Link>

          <Link
            href={globals.downloadApp.appleLink.link}
            className={s.getAppLink}
          >
            <Image
              src={globals.downloadApp.appleLink.img}
              alt={globals.downloadApp.appleLink.alt}
              width={26}
              className={s.linkIcon}
            />
            <span className={s.linkTitle}>Download on the</span>
            <span className={s.linkName}>App Store</span>
          </Link>
        </S.DownloadButtons>
      </S.TextSide>
    </S.SectionDownloadApp>
  );
};

export default SectionDownloadApp;

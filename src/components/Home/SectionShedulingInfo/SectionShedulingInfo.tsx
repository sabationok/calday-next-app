import * as S from './SectionShedulingInfo.style';
import testData from '@/testData';
import TransferItem from './TransferItem/TransferItem';

const SectionShedulingInfo: React.FC = () => {
  const { title, subTitle, list } = testData.shedulingSectionData;
  return (
    <S.SectionShedulingInfo>
      <S.Title>{title}</S.Title>

      <S.SubTitle>{subTitle}</S.SubTitle>

      <S.TransfersList>
        {list.map(item => (
          <TransferItem
            key={item.transferColor}
            from={item.transfer.from}
            to={item.transfer.to}
            fill={item.transferColor}
            descrList={item.descrList}
            link={item.link}
          />
        ))}
      </S.TransfersList>
    </S.SectionShedulingInfo>
  );
};

export default SectionShedulingInfo;

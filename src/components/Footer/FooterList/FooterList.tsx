import * as S from './FooterList.style';

import testData from '@/testData';
import Link from 'next/link';

const FooterList: React.FC = () => {
  const { company, useCases, support, blog, contacts } = testData.footerData;
  return (
    <S.FooterList>
      <S.FooterListItem>
        <S.Title>{company.title}</S.Title>

        <S.LinksList>
          <S.ListItemTextBold>{company.company}</S.ListItemTextBold>
        </S.LinksList>
      </S.FooterListItem>

      <S.FooterListItem>
        <S.Title>{useCases.title}</S.Title>

        <S.LinksList>
          {useCases.links.map(link => (
            <S.LinksListItem key={link.link}>
              <Link href="#">{link.name}</Link>
            </S.LinksListItem>
          ))}
        </S.LinksList>
      </S.FooterListItem>

      <S.FooterListItem>
        <S.Title>{support.title}</S.Title>

        <S.LinksList>
          {support.links.map(link => (
            <S.LinksListItem key={link.link}>
              <Link href="#">{link.name}</Link>
            </S.LinksListItem>
          ))}
        </S.LinksList>
      </S.FooterListItem>

      <S.FooterListItem>
        <S.Title>{blog.title}</S.Title>

        <S.LinksList>
          {blog.links.map(link => (
            <S.LinksListItem key={link.link}>
              <Link href="#">{link.name}</Link>
            </S.LinksListItem>
          ))}
        </S.LinksList>
      </S.FooterListItem>

      <S.FooterListItem>
        <S.Title>{contacts.title}</S.Title>

        <S.LinksList>
          <S.ListItemTextBold>
            <a href={`mailto${contacts.email}`}>{contacts.email}</a>
          </S.ListItemTextBold>
        </S.LinksList>
      </S.FooterListItem>
    </S.FooterList>
  );
};

export default FooterList;

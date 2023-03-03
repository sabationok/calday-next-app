import * as S from "./NavMenuDesktop.styles";

const navLinks = [
  { name: "Features", path: "" },
  { name: "UseCases", path: "" },
  { name: "Blog", path: "" },
  { name: "FAQ", path: "" },
  { name: "Pricing", path: "" },
];

const NavMenuDesktop: React.FC = () => {
  return (
    <S.NavMenu>
      {navLinks.map((el) => (
        <div key={el?.name}>{el?.name}</div>
      ))}
    </S.NavMenu>
  );
};

export default NavMenuDesktop;

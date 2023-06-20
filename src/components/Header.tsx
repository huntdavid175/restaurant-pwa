interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="w-full sticky top-0 z-100 px-8 py-5 shadow-lg bg-white">
      {title}
    </div>
  );
};

export default Header;

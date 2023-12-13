interface IauthHeaderProps {
  title: string;
}

const AuthHeader: React.FC<IauthHeaderProps> = ({ title }): JSX.Element => {
  return (
    <div className="section-header">
      <div className="logo">
        <img src="/logo-white.png" alt="" />
      </div>
      <div className="title">
        <h3 className="text-center">{title}</h3>
      </div>
    </div>
  );
};

export default AuthHeader;

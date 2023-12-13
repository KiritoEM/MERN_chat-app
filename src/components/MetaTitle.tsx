import Head from "next/head";

interface ImetaTitle {
  title: string;
}

const MetaTitle: React.FC<ImetaTitle> = ({ title }): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default MetaTitle;

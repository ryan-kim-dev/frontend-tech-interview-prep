import Head from 'next/head';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const ServiceLayout = function ({
  title = 'Frontend Tech Interview Prep',
  children,
}: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};

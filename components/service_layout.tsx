import Head from 'next/head';

interface Props {
  title: string;
  children: React.ReactNode;
}

function ServiceLayout({
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
}

export default ServiceLayout;

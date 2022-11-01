import Head from 'next/head'; // Head 내부에 들어가는 내용: html의 meta태그들

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

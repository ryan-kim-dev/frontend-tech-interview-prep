import ServiceLayout from '@/components/service_layout';
import { NextPage } from 'next';
import LoginButton from '@/components/login_button';

const IndexPage: NextPage = () => (
  <ServiceLayout title="제목">
    test
    <LoginButton />
  </ServiceLayout>
);

export default IndexPage;

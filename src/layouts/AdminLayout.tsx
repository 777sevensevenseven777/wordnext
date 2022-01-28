// import { useEffect } from 'react';
import AdminBar from '../components/AdminBar';
import AdminMenu from '../components/AdminMenu';

interface IProps {
  children: string | React.ReactNode;
}

export default function AdminLayout({ children }: IProps) {

  // @TODO temporary body tag class list
  // useEffect(() => {
  //   const classList = 'wp-admin wp-core-ui js acf-admin-5-3 acf-browser-chrome wc-wp-version-gte-53 wc-wp-version-gte-55 index-php auto-fold admin-bar branch-5-8 version-5-8-3 admin-color-fresh locale-pl-pl customize-support svg'.split(' ');
  //   document.body.classList.add(...classList);
  //   return () => document.body.classList.remove(...classList);
  // }, []);

  return (
    <div id="wpwrap">

      <AdminMenu />

      <div id="wpcontent" className="">

        <AdminBar />

      </div>
    </div>
  );
}
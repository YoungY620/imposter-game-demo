'use client';
import {ReactNode} from 'react';
import LocaleSwitcher from './LocaleSwitcher';
import { useTranslations } from 'next-intl';
import { Popover } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

type Props = {
  children?: ReactNode;
};

export default function PageLayout({children}: Props) {
  const ft = useTranslations('footer');
  const content = (
    <div>
      <p>{ft("github")}</p>
    </div>
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-[14%] py-20 bg-[#1c1c1c] text-[#9acd32] font-mono">
      {children}
      <div className="w-full flex flex-row justify-between  items-center">
        <LocaleSwitcher />
        <Popover content={content}>
          <a href="https://github.com/YoungY620/imposter-game-demo" target="_blank" rel="noopener noreferrer">
            <GithubOutlined />
          </a>
        </Popover>
      </div>
    </main>
  );
}
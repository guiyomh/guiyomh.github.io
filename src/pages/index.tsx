import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Welcome from '@site/src/components/Welcome';
import Dialog from '@site/src/components/Dialog';
import AboutMe from '@site/src/components/AboutMe';
import Experience from '@site/src/components/Experience';
import PositionProvider from "@site/src/components/Experience/context";


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Welcome>
        <Dialog />
      </Welcome>
      <main>
        <AboutMe />
        <PositionProvider>
          <Experience />
        </PositionProvider>
      </main>
    </Layout>
  );
}

import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import './showcase.css';

import ShowcaseCard from '../components/Showcase/ShowcaseCard';

type ShowcaseCard = {
  imageSrc: string;
  name: string;
};
const showcases: ShowcaseCard[] = [
  { imageSrc: 'img/600.jpeg', name: 'Example Name 1' },
  { imageSrc: 'img/600.jpeg', name: 'Example Name 2' },
  { imageSrc: 'img/600.jpeg', name: 'Example Name 3' },
  { imageSrc: 'img/600.jpeg', name: 'Example Name 4' },
  // add more showcase objects here...
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Showcase ${siteConfig.title}`}
      description="List of websites people are building with Hyperspace."
    >
      <main>
        <div className="showcase-grid">
          {showcases.map((showcase, index) => (
            <ShowcaseCard key={index} imageSrc={showcase.imageSrc} name={showcase.name} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

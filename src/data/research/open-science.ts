import { ResearchArea } from '../../types/research';
import { Share2 } from 'lucide-react';

export const openScienceResearch: ResearchArea = {
  id: 'open-science',
  title: 'Open Science',
  description: 'Promoting open science in research on the neural processing of continuous sensory streams.',
  icon: Share2,
  bgPattern: 'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" fill="%23f0f9ff" fill-opacity="0.4" fill-rule="evenodd"/%3E%3C/svg%3E',
  keyStudies: [
    {
      title: 'CNSP Initiative',
      description: 'The PI is co-founder and the co-ordinator of an open science initiative called the Cognition and Natural Sensory Processing (CNSP). The goal is to share resources such as standardised datasets, analysis code, and guidelines for studying the neural tracking of continuous sensory signals. The rise of experiments involving the presentation of continuous sensory streams (e.g., speech, music, movie, cartoons) made it possible to design a new standardised framework for easily storing, sharing, and analysing that kind of data. We did this to ensure the rapid and precise reproducibility of published results, and to offer new opportunities in terms of re-analysis of a dataset and combined analysis of multiple datasets, for example benefitting methodological development. Our mission in this area is fuelled by the growing number of publicly available datasets in this area, which are structured as input-output systems by design i.e., they consist of an input stream (e.g., speech sound) and a temporally-aligned neural recording (e.g., EEG, MEG, iEEG, pupillometry). Those constraints made it possible to define a domain-specific standardisation protocol, which we are now utilising to further develop our resources. The PIs team has been actively contributing to the CNSP activities, such as methodological development and organisation of videotutorials and workshops.',
      image: 'https://cnspworkshop.net/images/CNSP_Logo.gif',
      publications: [
        {
          title: 'CNSP Workshop website',
          link: 'https://cnspworkshop.net'
        },
        {
          title: 'CNSP resources (datasets, GitHub, videotutorials and talks)',
          link: 'https://cnspinitiative.net'
        },
        {
          title: 'Standardised end-to-end pipeline, NBDT, 2024',
          link: 'https://nbdt.scholasticahq.com/article/124867'
        },
        {
          title: 'Piazza et al., preprint, output of the CNSP/MBT travel grant 2022',
          link: 'https://www.biorxiv.org/content/10.1101/2024.09.02.610805.abstract'
        }
      ]
    }
  ]
};

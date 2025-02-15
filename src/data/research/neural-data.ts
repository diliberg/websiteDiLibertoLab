import { ResearchArea } from '../../types/research';
import { Brain } from 'lucide-react';

export const neuralDataResearch: ResearchArea = {
  id: 'neural-data',
  title: 'Neural Data Analysis',
  description: 'Development of advanced methods for analysing neural data recorded with EEG, MEG, iEEG, pupillometry and more.',
  icon: Brain,
  bgPattern: 'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM37.656 0l8.485 8.485-1.414 1.414L36 1.172l-8.485 8.485L26.1 8.243l8.485-8.486h3.07zm-17.313 0L12.344 8.485l1.415 1.414L22.344 1.13l8.485 8.485 1.415-1.414L23.728 0h-3.385zM38.727 0c-.89 0-1.787.197-2.622.592l-7.025 3.07-7.025-3.07C21.22.197 20.323 0 19.432 0h-1.96L8.394 9.077c-.5.5-.854 1.127-.95 1.815-.095.688.063 1.4.45 2 .713 1.096 1.997 1.579 3.2 1.194L18 12.61V17h24v-4.39l6.904 1.476c.44.14.89.213 1.343.213 1.508 0 2.904-.872 3.378-2.207.474-1.336-.014-2.732-1.01-3.728L43.537 0h-4.81z" fill="%23dbeafe" fill-opacity="0.4" fill-rule="evenodd"/%3E%3C/svg%3E',
  keyStudies: [
    {
      description: 'Our research has contributed to the growing use of realistic listening tasks in neurophysiology research, for example involving audiobooks, podcasts, or even watching cartoons or movies. We are now working on the next methodological shift, with the goal of enabling the study of speech and music neurophysiology in social scenarios. While listening to audiobooks or melodies are real-world tasks, the primary role of auditory communication is social interaction. To that end, the PI has been working with other colleagues at Trinity College Dublin to build a new lab centred on the study of social interaction.',
      image: 'https://diliberg.github.io/websiteDiLibertoLabImages/picMethods.avif',
      publications: [
        {
          title: 'Probing the neural encoding of highly correlated stimulus features - Phonological encoding',
          link: 'https://www.sciencedirect.com/science/article/pii/S0960982215010015'
        },
        {
          title: 'From acoustics to lexical processing',
          link: 'https://www.sciencedirect.com/science/article/pii/S1053811920310715'
        },
        {
          title: 'The multivariate Temporal Response Function - paper 1',
          link: 'https://www.frontiersin.org/articles/10.3389/fnhum.2016.00604/full'
        },
        {
          title: 'The multivariate Temporal Response Function - paper 2',
          link: 'https://www.frontiersin.org/articles/10.3389/fnins.2021.705621/full'
        },
        {
          title: 'Enhanced measurement of lexical processing',
          link: 'https://iopscience.iop.org/article/10.1088/1741-2552/ada30a/meta'
        },
        {
          title: 'Canonical component analysis - Patent',
          link: 'https://patents.google.com/patent/US20210365115A1/en?q=(giovanni)&inventor=di+liberto&oq=di+liberto+giovanni'
        },
        {
          title: 'Canonical component analysis - Paper 1',
          link: 'https://www.sciencedirect.com/science/article/pii/S1053811918321049'
        },
        {
          title: 'Canonical component analysis - Paper 2',
          link: 'https://www.nature.com/articles/s41598-021-02750-w'
        },
        {
          title: 'Validation of sound-EEG temporal synchronisation',
          link: 'https://www.sciencedirect.com/science/article/pii/S0165027022002916'
        },
        {
          title: 'Data and code standardisation',
          link: 'https://nbdt.scholasticahq.com/article/124867-a-standardised-open-science-framework-for-sharing-and-re-analysing-neural-data-acquired-to-continuous-stimuli'
        },
        {
          title: 'TRF models with limited experimental lengths',
          link: 'https://www.sciencedirect.com/science/article/pii/S0378595516304701'
        },
        {
          title: 'Isolating phonological processing in infant EEG - Paper',
          link: 'https://www.nature.com/articles/s41467-023-43490-x'
        },
        {
          title: 'Isolating phonological processing in infant EEG - Code',
          link: 'https://osf.io/mdnwg/'
        },
        {
          title: 'Collective-minds lab – a new lab space for the study of social interaction at Trinity College Dublin',
          link: 'https://www.collective-minds.net/'
        }
      ]
    }
  ]
};

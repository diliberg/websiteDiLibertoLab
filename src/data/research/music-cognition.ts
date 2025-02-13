import { ResearchArea } from '../../types/research';
import { Music } from 'lucide-react';

export const musicCognitionResearch: ResearchArea = {
  id: 'music-cognition',
  title: 'Music Cognition',
  description: 'Investigating the neural foundations of music.',
  icon: Music,
  bgPattern: 'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h60v60H0V0zm30 30h30v30H30V30zM0 30h30v30H0V30z" fill="%23fdf2f8" fill-opacity="0.4" fill-rule="evenodd"/%3E%3C/svg%3E',
  keyStudies: [
    {
      title: 'Encoding',
      description: 'We study how the human brain encodes music. We utilise computational models, like IDyOM and music transformers, to determine how our brains process a note based on the preceding context, as well as studying the neural encoding of music timing and pitch. Our team is interested in shedding light on the relationship between melody statistics and music enjoyment, as well as investigating how different music genres are encoded in the human brain.',
      image: 'https://diliberg.github.io/websiteDiLibertoLabImages/picMusic.jpg',
      publications: [
        {
          title: 'Neural encoding of melodic expectations',
          link: 'https://elifesciences.org/articles/51784'
        },
        {
          title: 'The Music of Silence',
          link: 'https://www.jneurosci.org/content/41/35/7449.abstract'
        }
      ]
    },
    {
      title: 'Decoding',
      description: 'Can we decode melody from neural signals recorded during music listening? Can we decode imagined melodies? Our team has been investigating these questions using non-invasive EEG. This work explores methodologies that could contribute to future brain-computer interfaces, as well as taking a first step that bridges the gap between music neurophysiology research and the study of music creativity and composition.',
      image: 'https://diliberg.github.io/websiteDiLibertoLabImages/picDecoding.jpg',
      publications: [
        {
          title: 'Decoding of imagined and heard melodies',
          link: 'https://www.frontiersin.org/articles/10.3389/fnins.2021.673401/full'
        }
      ]
    }
  ]
};

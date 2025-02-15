import { ResearchArea } from '../../types/research';
import { Brain } from 'lucide-react';

export const speechLanguageResearch: ResearchArea = {
  id: 'speech-language',
  title: 'Neural Processing of Speech',
  description: 'Investigating how the brain processes and represents speech and language information.',
  icon: Brain,
  bgPattern: 'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM37.656 0l8.485 8.485-1.414 1.414L36 1.172l-8.485 8.485L26.1 8.243l8.485-8.486h3.07zm-17.313 0L12.344 8.485l1.415 1.414L22.344 1.13l8.485 8.485 1.415-1.414L23.728 0h-3.385zM38.727 0c-.89 0-1.787.197-2.622.592l-7.025 3.07-7.025-3.07C21.22.197 20.323 0 19.432 0h-1.96L8.394 9.077c-.5.5-.854 1.127-.95 1.815-.095.688.063 1.4.45 2 .713 1.096 1.997 1.579 3.2 1.194L18 12.61V17h24v-4.39l6.904 1.476c.44.14.89.213 1.343.213 1.508 0 2.904-.872 3.378-2.207.474-1.336-.014-2.732-1.01-3.728L43.537 0h-4.81z" fill="%23dbeafe" fill-opacity="0.4" fill-rule="evenodd"/%3E%3C/svg%3E',
  keyStudies: [
    {
      title: 'From sound to meaning',
      description: 'We study how the brain processes sounds into meaning using neural measurements such as EEG and MEG. Our experiments have been particularly innovative in that they involved the listening of audiobooks, podcasts, or even watching a cartoon or a movie. In doing so, we shed light on the neural encoding of progressively more abstract properties, from sound to language, especially speech acoustics, phonological information, and lexical information. By probing those processes, we could shed light on how the neural encoding of language evolves as adults learn a second language, and we demonstrated fundamental differences between native and non-native speech processing (e.g., slower lexical processing). We also study the impact of the social component of speech on its neural encoding (unpublished – coming soon), comparing monologue vs. dialogue listening as well as measuring the impact of emotional prosody and trust.',
      image: 'https://diliberg.github.io/websiteDiLibertoLabImages/picSoundToMeaning.avif',
      publications: [
        {
          title: 'Probing the neural encoding of highly correlated stimulus features - Phonological encoding',
          link: 'https://www.sciencedirect.com/science/article/pii/S0960982215010015'
        },
        {
          title: 'Phonotactics',
          link: 'https://www.sciencedirect.com/science/article/pii/S1053811919303234'
        },
        {
          title: 'From acoustics to lexical processing in native and non-native speakers',
          link: 'https://www.sciencedirect.com/science/article/pii/S1053811920310715'
        }
      ]
    },
    {
      title: 'Listening in noisy environments',
      description: 'The PI has worked previously as part of a consortium studying auditory attention in multitalker environments and brain-computer interfaces (the COCOHA project). Building on that expertise and collaborations, our team investigates the neural processing of speech in realistic noisy environments, focussing on auditory selective attention and attention switching. We carry out this investigation across the lifespan and also study hearing impairment. We carry out some of this work independently, as well as through collaborations with the Eriksholm research centre (part of Oticon), Prof. Alejandro Lopez Valdes (TCD), and Prof. Bonnie Lau (UW).',
      image: 'https://diliberg.github.io/websiteDiLibertoLabImages/picAuditoryAttention.jpg',
      publications: [
        {
          title: 'Methods and device COCOHA',
          link: 'https://www.biorxiv.org/content/10.1101/2024.03.01.582668.abstract'
        },
        {
          title: 'COCOHA Project Website',
          link: 'https://cocoha.org/'
        },
        {
          title: 'Hearing impairment',
          link: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0308554'
        }
      ]
    },
    {
      title: 'Sign language',
      description: 'Through a collaboration with the sign language group at École Normale Superiéure, our team investigates the neural encoding of sign language. This is an ongoing investigation on an understudied research area.',
      image: 'https://diliberg.github.io/websiteDiLibertoLabImages/picSignLanguage.jpg'
    }
  ]
};

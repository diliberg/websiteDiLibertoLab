import { ResearchArea } from '../../types/research';
import { Baby } from 'lucide-react';

export const developmentalResearch: ResearchArea = {
  id: 'developmental',
  title: 'Developmental Research',
  description: 'Investigating the early development and deficits of auditory and language functions.',
  icon: Baby,
  bgPattern: 'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M15 0h30v15H15V0zm15 60h30V45H30v15zM0 30h15v30H0V30zm0-30h15v30H0V0z" fill="%23f0fdf4" fill-opacity="0.4" fill-rule="evenodd"/%3E%3C/svg%3E',
  keyStudies: [
    {
      title: 'Early Development',
      description: 'Our collaboration with Prof. Usha Goswami\'s team (BabyRhythm project) shed light on how the cortical tracking of speech develops in the first year of life. One key outputs of that research was the discovery that the infant brain reliably encodes phonological information during nursery rhyme listening starting from 7 months of age. A related study led by Dr. Adam Attaheri and Prof. Usha Goswami demonstrated that EEG responses to nursery rhymes in preverbal infants predict language skills a year later. My team continue working in that direction in the context of bilingualism through a collaboration with Dr. Marina Kalashnikova and her team (BCBL).',
      image: 'https://www.diliberg.net/images/picEarlyDevelopment.avif',
      publications: [
        {
          title: 'Emergence of phonological encoding in the first year of life, Nat Comms 2023',
          link: 'https://www.nature.com/articles/s41467-023-43490-x'
        },
        {
          title: 'Code repository for infant phonological encoding study',
          link: 'https://osf.io/mdnwg/'
        },
        {
          title: 'Predicting language outcome a year later using infant EEG',
          link: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0313274'
        }
      ]
    },
    {
      title: 'Dyslexia Research',
      description: 'Our work has also contributed to research on developmental Dyslexia. That work led to the identification of neurophysiological and behavioural differences between neurotypical and dyslexic individuals. While Dyslexia is known as a reading deficit, it has been suggested to be underpinned by more fundamental neurodiversity. In our work, we found neurophysiological differences with the neural encoding of phonological information (as opposed to the encoding of sounds). In addition, a study led by Dr. Mahmoud Keshavarzi and Prof. Usha Goswami\'s team, aided by methodologies from our team, identified differences in speech production (using listen-and-repeat), contributing with potentially effective markers for the detection of Dyslexia.',
      image: 'https://www.diliberg.net/images/picDyslexia.avif',
      publications: [
        {
          title: 'Atypical phonological encoding in Dyslexia',
          link: 'https://www.sciencedirect.com/science/article/pii/S1053811918302829'
        },
        {
          title: 'Atypical speech production in Dyslexia',
          link: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/desc.13428'
        }
      ]
    },
    {
      title: 'Auditory Attention',
      description: 'Our team has been studying how speech is processed in complex multi-talker environments. In collaboration with Prof. Bonnie Lau\'s team (University of Washington), as well as through our own independent experiments, we have extended that research to the study of infants, children, and autism, leading to novel insights into the development of selective attention functions.',
      image: 'https://www.diliberg.net/images/picAuditoryAttention.jpg'
    }
  ]
};
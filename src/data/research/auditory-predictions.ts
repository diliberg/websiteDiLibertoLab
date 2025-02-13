import { ResearchArea } from '../../types/research';
import { Users } from 'lucide-react';

export const auditoryPredictionsResearch: ResearchArea = {
  id: 'auditory-predictions',
  title: 'Auditory Predictions',
  description: 'Shedding light on a fundamental neural mechanism with a central role in sensory processing.',
  icon: Users,
  bgPattern: 'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" fill="%23ede9fe" fill-opacity="0.4" fill-rule="evenodd"/%3E%3C/svg%3E',
  keyStudies: [
    {
      title: 'Speech',
      description: 'Predictive processing is a longstanding framework in neuroscience. Our brains continuously attempt to predict upcoming sensory inputs, leading to measurable prediction errors. In speech listening, those predictions occur at multiple acoustic and linguistic levels in parallel. Our work has probed that phenomenon at the phonological and lexical level. We found these predictive processes to change due to healthy ageing, when listening to a native vs. a non-native language, and depending on selective attention.',
      image: 'https://diliberg.github.io/websiteDiLibertoLabImages/picSpeech.jpg',
      publications: [
        {
          title: 'Neural representation of linguistic feature hierarchy reflects second-language proficiency',
          link: 'https://www.sciencedirect.com/science/article/pii/S1053811920310715'
        }
      ]
    },
    {
      title: 'Music',
      description: 'Similarly, we investigate auditory predictions in the context of music listening. Melodic expectations can be estimated with models such as IDyOM and music transformers. Expectations are then related with EEG/MEG signals to identify cortical areas and time-latencies where melodic predictions are most strongly encoded. Collaborations with Prof. Nima Mesgarani, Prof. Shihab Shamma, Dr. Guilhem Marion, and Dr. Roberta Bianco shed light on how, where, and when melodic expectations are encoded in the human cortex, as well as identifying a striking similarity in the neural activity reflecting prediction and that recorded during imagination of melodies. Based on that data, we have proposed a tantalising explanation for how auditory imagination unfolds, rooted in auditory prediction mechanisms.',
      image: 'https://diliberg.github.io/websiteDiLibertoLabImages/picMusic.jpg',
      publications: [
        {
          title: 'Neural encoding of melodic expectations',
          link: 'https://elifesciences.org/articles/51784'
        },
        {
          title: 'The Music of Silence',
          link: 'https://www.jneurosci.org/content/41/35/7449.abstract'
        },
        {
          title: 'Python version of the statistical model of melody IDyOM',
          link: 'https://www.sciencedirect.com/science/article/pii/S0165027024002929'
        }
      ]
    },
    {
      title: 'Relating speech and music',
      description: 'While we know quite a lot about prediction mechanisms for speech and music, it remains unclear how those two mechanisms relate with each other. Are they fundamentally the same neural mechanism applied to different stimuli. Or are there some fundamental distinctions between the two. In our work, we compare neural responses recorded during the listening of speech and music. We push this even further by studying sung speech, a very particular stimulus including both melodic and speech content. Studying sung speech gives us the opportunity to study how speech and music prediction mechanism unfold when the two processes occur simultaneously, giving us a clearer view into their unique neural patterns. Our results suggest that the two prediction phenomena are distinct processes based on the same fundamental functioning principle.',
      image: 'https://diliberg.github.io/websiteDiLibertoLabImages/picSinging.jpg',
      publications: [
        {
          title: 'Neural signatures of musical and linguistic interactions during natural song listening',
          link: 'https://hal.science/hal-04529950/'
        }
      ]
    }
  ]
};

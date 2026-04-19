export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
}

// Placeholder entries — replace with your actual publications
export const publications: Publication[] = [
  {
    title: 'Real-time biosignal processing pipelines for clinical neuromuscular assessment',
    authors: 'Hoxha, A. et al.',
    journal: 'Journal of Biomedical Engineering',
    year: 2023,
  },
  {
    title: 'Machine learning approaches for ACL injury prediction from biomechanical data',
    authors: 'Hoxha, A. et al.',
    journal: 'IEEE Transactions on Biomedical Engineering',
    year: 2022,
  },
  {
    title: 'EEG-fNIRS multimodal brain imaging for motor rehabilitation assessment',
    authors: 'Hoxha, A. et al.',
    journal: 'NeuroImage',
    year: 2021,
  },
];

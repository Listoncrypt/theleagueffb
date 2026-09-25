export type NavigationRoute = 
  | 'home' 
  | 'dynasty' 
  | 'nfl' 
  | 'team-reviews' 
  | 'rookie-draft-kit' 
  | 'about' 
  | 'contact';

export interface Article {
  id: string;
  title: string;
  category: 'Dynasty' | 'NFL' | 'Rookie Rankings' | 'Player Breakdowns' | 'Draft Strategy' | 'Trade Analysis';
  date: string;
  readTime: string;
  description: string;
  content: string[];
  keyTakeaways?: string[];
  pullQuote?: string;
  author: string;
  featured?: boolean;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  episodeNumber: number;
  date: string;
  duration: string;
  description: string;
  appleUrl: string;
  spotifyUrl: string;
  topics: string[];
}

export interface VideoContent {
  id: string;
  title: string;
  duration: string;
  date: string;
  description: string;
  youtubeId: string;
  tags: string[];
}

export interface RookieTier {
  tierNumber: number;
  tierName: string;
  description: string;
  players: {
    name: string;
    position: 'QB' | 'RB' | 'WR' | 'TE';
    college: string;
    dynastyOutlook: string;
    draftRange: string;
    comp?: string;
  }[];
}

export interface TeamReviewSubmission {
  id: string;
  managerName: string;
  email: string;
  leaguePlatform: string;
  teamCount: string;
  scoringFormat: string;
  qbFormat: 'Superflex' | '1QB';
  tePremium: string;
  startingLineup: string;
  roster: string;
  competitiveWindow: 'Contender' | 'Productive Rebuild' | 'Middle of the Pack' | 'Uncertain';
  specificConcerns: string;
  futureDraftCapital: string;
  submittedAt: string;
}

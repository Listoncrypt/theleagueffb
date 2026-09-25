import { Article, PodcastEpisode, VideoContent, TeamReviewSubmission } from '../types';

export const PROMO_CODE = 'LEAGUEFFB';

export const BRAND_INFO = {
  name: 'THE LEAGUE FFB',
  tagline: 'All Things Dynasty Fantasy Football & NFL',
  description: 'Independent sports media publication providing strategic dynasty asset management, NFL tape breakdowns, rookie draft intelligence, and personalized team reviews.',
  discordUrl: 'https://discord.gg/theleagueffb',
  youtubeUrl: 'https://www.youtube.com/@TheLeagueFFB',
  applePodcastUrl: 'https://podcasts.apple.com/us/podcast/the-league-ffb/id123456789',
  spotifyPodcastUrl: 'https://open.spotify.com/show/theleagueffb',
  promoCode: 'LEAGUEFFB',
};

// Discord channel channels for community spotlight
export const DISCORD_COMMUNITY_CHANNELS = [
  {
    name: 'trade-evaluations',
    description: 'Get real-time peer feedback and community analysis on dynasty trades before hitting accept.'
  },
  {
    name: 'rookie-draft-room',
    description: 'Live rookie mock drafts, NFL draft capital reactions, and tier valuation debates.'
  },
  {
    name: 'team-audits-live',
    description: 'Share roster screenshots to discuss contending windows and rebuild pivots.'
  },
  {
    name: 'waiver-wire-wiretap',
    description: 'Offseason stashes, taxi squad targets, and deep sleeper discussions.'
  },
  {
    name: 'film-room-analysis',
    description: 'All-22 film clips, route tree nuance, and coaching scheme discussions.'
  }
];

// Verified Video Showcase from official YouTube destination
export const VIDEO_SHOWCASES: VideoContent[] = [
  {
    id: 'vid-official-main',
    title: 'The League FFB — Dynasty Film & Strategy Series',
    duration: 'YouTube Series',
    date: 'Latest Releases',
    description: 'Watch comprehensive breakdowns covering dynasty roster building, collegiate scouting profiles, schematic NFL tape, and live roster audits.',
    youtubeId: 'https://www.youtube.com/@TheLeagueFFB',
    tags: ['Dynasty', 'NFL Film', 'Roster Audits', 'Rookie Class']
  }
];

// Clean placeholder state for published articles (avoiding fabricated AI texts)
export const ARTICLES: Article[] = [];

// Podcast channel information
export const PODCAST_CHANNELS = {
  title: 'The League FFB Podcast',
  description: 'Available on all major podcast platforms. Deep dives into dynasty market cycles, rookie draft preparation, Superflex roster architecture, and NFL scheme evolutions.',
  appleUrl: 'https://podcasts.apple.com/us/podcast/the-league-ffb/id123456789',
  spotifyUrl: 'https://open.spotify.com/show/theleagueffb'
};

export interface NavLink {
  label: string;
  path: string;
  fragment?: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Features', path: '/', fragment: 'features' },
  { label: 'Categories', path: '/', fragment: 'categories' },
  { label: 'About', path: '/', fragment: 'about' },
  { label: 'Blog', path: '/', fragment: 'blog' },
  { label: 'Image pool', path: '/gallery' }
];

export const CONTACT_EMAIL = 'bloggerbytesinfo@gmail.com';
export const SIGNUP_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('I want to start blogging on Bloggerbytes')}`;

export const SOCIALS = [
  { label: 'Facebook', icon: 'fa-brands fa-facebook-f', href: 'https://www.facebook.com/Bloggerbytes-319605895260048/' },
  { label: 'X (Twitter)', icon: 'fa-brands fa-x-twitter', href: 'https://twitter.com/bloggerbytes' },
  { label: 'Telegram', icon: 'fa-brands fa-telegram', href: 'https://t.me/bloggerbytes' },
  { label: 'Email', icon: 'fa-solid fa-envelope', href: `mailto:${CONTACT_EMAIL}` }
];

export const FACTS = [
  { value: '1M+', label: 'Visitors to the site' },
  { value: '400K+', label: 'Bloggers worldwide' },
  { value: '15+', label: 'Categories' },
  { value: '4.7/5', label: 'Average user rating' }
];

export const FEATURES = [
  {
    icon: 'auto_awesome',
    title: 'Beautiful by default',
    text: 'Create a unique blog that fits your style, with clean layouts that look great on every screen.'
  },
  {
    icon: 'photo_library',
    title: 'A ready-made image pool',
    text: 'Hundreds of high-resolution pictures to choose from, so every post has the perfect cover.'
  },
  {
    icon: 'bolt',
    title: 'Easy and free',
    text: 'No setup, no fees. Start writing in minutes and publish whenever inspiration strikes.'
  },
  {
    icon: 'groups',
    title: 'Find your audience',
    text: 'Share instead of search: join a community of readers who care about the things you do.'
  }
];

export const CATEGORIES = [
  { name: 'Travel', image: 'assets/web/cat-travel.webp' },
  { name: 'Nature', image: 'assets/web/cat-nature.webp' },
  { name: 'Art', image: 'assets/web/cat-art.webp' },
  { name: 'Animals', image: 'assets/web/cat-animals.webp' },
  { name: 'Photography', image: 'assets/web/cat-photography.webp' },
  { name: 'Family', image: 'assets/web/cat-family.webp' },
  { name: 'Culture', image: 'assets/web/cat-culture.webp' },
  { name: 'Lifestyle', image: 'assets/web/cat-lifestyle.webp' }
];

export const POSTS = [
  {
    title: 'The Most Popular Leg Workout for Men',
    date: '2018-10-22',
    tag: 'Workout',
    image: 'assets/web/post-workout.webp',
    excerpt: 'Skip leg day no more. A simple routine that builds strength, balance and stamina.'
  },
  {
    title: 'Popular Lifestyle with Fashion & Modeling',
    date: '2018-10-30',
    tag: 'Fashion',
    image: 'assets/web/post-fashion.webp',
    excerpt: 'How everyday style choices shape the way we feel, work and show up for others.'
  },
  {
    title: 'Video Post: Travel with my Friends',
    date: '2018-10-31',
    tag: 'Travel',
    image: 'assets/web/post-travel.webp',
    excerpt: 'Sun, sand and good company. Highlights from a week on the coast with old friends.'
  }
];

export const TAGS = [
  'Modeling', 'Fashion', 'Travel', 'Vacation', 'Sea', 'Ocean', 'Office', 'Home',
  'Nature', 'Art', 'Animals', 'Women', 'News', 'Workout', 'Exercise'
];

export const GALLERY = [
  '111', 'blog', 'img1', 'img10', 'img11', 'img12', 'img13', 'img2', 'img20', 'img21',
  'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'is', 'writing-blogs'
].map(name => ({
  thumb: `assets/web/gallery/${name}-thumb.webp`,
  full: `assets/web/gallery/${name}.webp`
}));

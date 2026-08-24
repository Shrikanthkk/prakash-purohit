export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  pujaPerformed: string;
  rating: number;
  content: string;
  avatar?: string;
  date: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Rajesh & Meenakshi Sharma',
    location: 'Sarjapur Road, Bangalore',
    pujaPerformed: 'New Gruhapravesam & Vastu Shanti',
    rating: 5,
    content:
      'Acharya Surya Prakash Purohit performed our new house Gruhapravesam with such purity and authentic Vedic mantras. Every ritual was patiently explained to our family and elderly parents. The atmosphere was so divine and peaceful. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    date: 'February 2026'
  },
  {
    id: 't-2',
    name: 'Venkatesh Ramanathan',
    location: 'Indiranagar, Bangalore',
    pujaPerformed: 'Maha Ganapati Homa & Navagraha Shanti',
    rating: 5,
    content:
      'We had been facing recurring hurdles in our business for a long time. Acharya ji performed the Ganapati Homa and planetary shanti with complete devotion. His knowledge of Vedic intonation and calm demeanour brought immense positivity.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    date: 'January 2026'
  },
  {
    id: 't-3',
    name: 'Pooja & Karthik Iyer',
    location: 'HSR Layout, Bangalore',
    pujaPerformed: 'Namakarana & Annaprasana Ceremony',
    rating: 5,
    content:
      'For our baby girl’s naming ceremony, everything from the Janma Nakshatra calculations to the ear-whispering vidhi was carried out flawlessly. Surya Prakash Purohit made the event very memorable for our extended family.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    date: 'December 2025'
  },
  {
    id: 't-4',
    name: 'Anand Kulkarni',
    location: 'Whitefield, Bangalore',
    pujaPerformed: 'Maha Mrityunjaya Homa & Rudra Abhishekam',
    rating: 5,
    content:
      'We organized a Maha Mrityunjaya Homa for my father’s recovery. Acharya ji’s chanting of the Vedic hymns is deeply resonant and soul-stirring. The sanctity he maintains throughout the 4 hours is extraordinary.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    date: 'January 2026'
  },
  {
    id: 't-5',
    name: 'Dr. Sunita Deshmukh',
    location: 'Koramangala, Bangalore',
    pujaPerformed: 'Satyanarayan Katha & Office Pooja',
    rating: 5,
    content:
      'Punctual, thoroughly prepared with samagri lists, and performing all rites in exact accordance with the Shastras. Surya Prakash Purohit is truly a blessing for anyone seeking genuine spiritual ceremonies in the city.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    date: 'November 2025'
  }
];

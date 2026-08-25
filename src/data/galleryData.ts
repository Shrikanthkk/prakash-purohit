export interface GalleryItem {
  id: string;
  title: string;
  category: 'Puja Ceremonies' | 'Homa' | 'Temple Rituals' | 'Gruhapravesam' | 'Special Events' | 'Vedic Ceremonies';
  image: string;
  caption: string;
  location?: string;
}

export const galleryCategories = [
  'All',
  'Puja Ceremonies',
  'Homa',
  'Temple Rituals',
  'Gruhapravesam',
  'Special Events',
  'Vedic Ceremonies',
] as const;

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sri Satyanarayan Puja & Homa Vidhi',
    category: 'Puja Ceremonies',
    image: '/services/satyanarayan-puja-katha.jpg',
    caption: 'Devotee family and priest performing sacred Satyanarayan Puja and Homa offerings with coconut and sacred fire.',
    location: 'Devotee Residence'
  },
  {
    id: 'gal-2',
    title: 'Namakarana (Naming Ceremony)',
    category: 'Vedic Ceremonies',
    image: '/services/namakarana-ceremony.jpg',
    caption: 'Devotee parents, family and priest performing sacred Namakarana Vedic blessing for newborn child.',
    location: 'Family Residence'
  },
  {
    id: 'gal-3',
    title: 'Akshara Abhyasa (Vidyarambham) Homa',
    category: 'Vedic Ceremonies',
    image: '/services/akshara-abhyasa-ceremony.jpg',
    caption: 'Child, parents and family performing sacred Akshara Abhyasa educational initiation with Vedic Homa fire.',
    location: 'Devotee Home'
  },
  {
    id: 'gal-4',
    title: 'Office & Business Inauguration Puja Mandala',
    category: 'Special Events',
    image: '/services/office-puja-mandala.jpg',
    caption: 'Sacred floor mandala of Lord Vishnu and Lakshmi with traditional floral alankaram for commercial inauguration.',
    location: 'Corporate Office Indiranagar'
  },
  {
    id: 'gal-5',
    title: 'Maha Mangala Aarti & Deeparadhana',
    category: 'Temple Rituals',
    image: '/services/vehicle-puja.jpg',
    caption: 'Acharya Surya Prakash Purohit performing sacred Aarti and Deepam in front of the sanctified temple deity.',
    location: 'Temple Sanctum Sanctorum'
  },
  {
    id: 'gal-6',
    title: 'Annaprasana Puja Floral Alankaram',
    category: 'Puja Ceremonies',
    image: '/services/annaprasana-puja.jpg',
    caption: 'Exquisite grand floral arch and Kalash alankaram with fresh banana stalks for sacred Annaprasana Puja.',
    location: 'Devotee Home Mandapam'
  },
  {
    id: 'gal-7',
    title: 'Vedic Homa by Acharya Surya Prakash Purohit',
    category: 'Homa',
    image: '/services/vedic-homa-havan.jpg',
    caption: 'Acharya Surya Prakash Purohit conducting sacred Vedic fire ritual with herbal samagri & pure ghee.',
    location: 'Home Yagya Shala'
  },
  {
    id: 'gal-8',
    title: 'Gruhapravesam Housewarming Homa',
    category: 'Gruhapravesam',
    image: '/services/gruhapravesam-ceremony.jpg',
    caption: 'Devotee couple performing Gruhapravesam Vastu Shanti Homa with sacred rice and flower ahutis.',
    location: 'New Home Inauguration'
  },
  {
    id: 'gal-9',
    title: 'Navgrah Dosha Nivaaran Maha Altar',
    category: 'Vedic Ceremonies',
    image: '/services/navgrah-dosha-puja.jpg',
    caption: 'Grand Navagraha 9-Kalash sthapana, deity alankaram with floral umbrella, fresh fruits and sacred kumbhas.',
    location: 'Bangalore Yagya Mandapam'
  },
  {
    id: 'gal-10',
    title: 'Kuja Dosha Shanti Vidhi',
    category: 'Vedic Ceremonies',
    image: '/services/kuja-dosha-shanti.jpg',
    caption: 'Acharya Surya Prakash Purohit performing sacred Kalash Sthapana and Manglik Dosha Nivarana ritual.',
    location: 'Ashram Yagya Shala'
  },
  {
    id: 'gal-11',
    title: 'Kaal Sarp Dosha Naga Mandala',
    category: 'Vedic Ceremonies',
    image: '/services/kaalsarp-dosha-mandala.jpg',
    caption: 'Sacred Sarpa Devata colored floor mandala adorned with lit oil lamps, flower offerings and sacred pinda daana.',
    location: 'Remedial Yagya Shala'
  },
  {
    id: 'gal-12',
    title: 'Jathaka Guidance & Family Vedic Sankalpam',
    category: 'Vedic Ceremonies',
    image: '/services/jathaka-kundali-guidance.jpg',
    caption: 'Priests, elders, and devotee families gathered in collective prayer during sacred Jathaka remedial ceremony.',
    location: 'Vedic Ashram Mandapam'
  },
  {
    id: 'gal-13',
    title: 'Kadali Vivah Ceremony Blessing',
    category: 'Vedic Ceremonies',
    image: '/services/kadali-vivah.jpg',
    caption: 'Acharya Surya Prakash Purohit performing sacred Vivah Shastric blessing with consecrated teertham and akshata.',
    location: 'Mandapam Yagya Shala'
  },
  {
    id: 'gal-14',
    title: 'Kumbha Vivah Shastric Remedy',
    category: 'Vedic Ceremonies',
    image: '/services/kumbha-vivah.jpg',
    caption: 'Acharya Surya Prakash Purohit performing the sacred Kumbha Vivah wedding homa ritual with the couple in prayer before the holy fire.',
    location: 'Family Mandapam Yagya Shala'
  },
  {
    id: 'gal-15',
    title: 'Arka Vivah Ceremony & Sacred Garlands',
    category: 'Vedic Ceremonies',
    image: '/services/arka-vivah.jpg',
    caption: 'Traditional Arka Vivah ceremony with floral garlands, sacred kalash offerings, and Vedic family sankalpam.',
    location: 'Sacred Griha Mandapam'
  },
  {
    id: 'gal-16',
    title: 'Sudarshan Homa Agni Ahuti',
    category: 'Homa',
    image: '/services/sudarshan-homa.jpg',
    caption: 'Sacred fire offerings with pure cow ghee and herbal samidhas during Sri Sudarshana protective Havan.',
    location: 'Home Yagya Shala'
  },
  {
    id: 'gal-17',
    title: 'Sri Rudra Homa Sacred Ahuti',
    category: 'Homa',
    image: '/services/rudra-homa.jpg',
    caption: 'Devotee couple offering sacred Dravyas into the burning Homa Kund during Sri Rudra & Maha Mrityunjaya ritual.',
    location: 'Family Griha Yagya Shala'
  },
  {
    id: 'gal-18',
    title: 'Maha Ganapati Homa Purnahuti',
    category: 'Homa',
    image: '/services/ganapati-homa.jpg',
    caption: 'Acharya Surya Prakash Purohit conducting the sacred Maha Ganapati fire ritual with consecrated modaks and herbal ahutis.',
    location: 'Devotee Yagya Mandapam'
  },
  {
    id: 'gal-19',
    title: 'Maha Chandi Devi Sri Chakra Mandala',
    category: 'Homa',
    image: '/services/chandi-homa.jpg',
    caption: 'Grand Devi alankaram with Sri Chakra Navaavarana floor mandala illuminated with terracotta Deepams.',
    location: 'Chandi Yagya Mandapam'
  },
  {
    id: 'gal-20',
    title: 'Maha Pratyangira Devi Protective Mandala',
    category: 'Homa',
    image: '/services/pratyangira-homa.jpg',
    caption: 'Grand Goddess Pratyangira Devi protective mandala with rows of 64 sacred herbal dravyas and Homa Kund.',
    location: 'Ashram Yagya Mandapam'
  },
  {
    id: 'gal-21',
    title: 'Vedic Mantra Japa & Altar Seva',
    category: 'Puja Ceremonies',
    image: '/services/vedic-japa-anushthana.jpg',
    caption: 'Devotee performing sacred flower offering and mantra japa before the consecrated deity altar.',
    location: 'Devotee Griha Altar'
  }
];

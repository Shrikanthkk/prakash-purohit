export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  priceLabel: string;
  priceAmount: string;
  duration: string;
  shortDescription: string;
  inclusions: string[];
  popular?: boolean;
  idealServices: string[];
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'samskara-basic',
    name: 'Vedic Griha & Samskara Pujas',
    badge: 'Popular for Homes',
    priceLabel: 'Starting From',
    priceAmount: '₹ 3,500',
    duration: '2 to 3 Hours',
    shortDescription: 'Ideal for home ceremonies, life transitions, and monthly devotional observances.',
    inclusions: [
      'Complete Kalash Sthapana & Devata Avahana',
      'Vedic Mantras recitation & Sankalpam',
      'Detailed checklist of Puja Samagri in advance',
      'Aarti, Mangal Dravyams & Prasad sanctification',
      '1 Experienced Vedic Priest',
      'English / Hindi / Kannada / Telugu guidance'
    ],
    popular: false,
    idealServices: ['Satyanarayan Puja', 'Namakarana', 'Annaprasana', 'Akshara Abhyasa', 'Vahan Pooja']
  },
  {
    id: 'homa-ceremonies',
    name: 'Auspicious Vedic Homas & Yagyas',
    badge: 'Most Revered',
    priceLabel: 'Starting From',
    priceAmount: '₹ 5,500',
    duration: '3 to 4.5 Hours',
    shortDescription: 'Sacred Agni fire rituals to remove hurdles, invoke prosperity, and protect the household.',
    inclusions: [
      'Sacred Havan Kund arrangement & Agni Prathishta',
      'Specialized 108 / 1008 Beej Mantra Ahutis',
      'Pure herbal Homa Samagri & Ghee oblation guidance',
      'Purnahuti with Silk Vastram & Raksha Dravya',
      '1 to 2 Qualified Vedic Priests',
      'Complete family sankalpa for health & prosperity'
    ],
    popular: true,
    idealServices: ['Ganapati Homa', 'Sudarshan Homa', 'Rudra Homa', 'Mrityunjaya Homa', 'Chandi Homa']
  },
  {
    id: 'gruhapravesam-grand',
    name: 'Complete Gruhapravesam & Vastu',
    badge: 'Comprehensive Package',
    priceLabel: 'Starting From',
    priceAmount: '₹ 7,500',
    duration: '4 to 5 Hours',
    shortDescription: 'All-inclusive traditional housewarming, Vastu purification, and Navagraha invocation.',
    inclusions: [
      'Dwara Puja & Threshold Consecration',
      'Go Puja (Cow worship) facilitation & blessings',
      'Vastu Shanti, Navagraha Homa & Ganapati Puja',
      'Satyanarayan Vrat Katha & Maha Mangala Aarti',
      '2 Dedicated Vedic Acharyas',
      'Complete Auspicious Muhurat calculation included'
    ],
    popular: false,
    idealServices: ['New Gruhapravesam', 'Office Inauguration', 'Vastu Shanti']
  },
  {
    id: 'dosha-shanti-special',
    name: 'Dosha Shanti & Special Remedial Rites',
    badge: 'Astrological Remedies',
    priceLabel: 'Contact for Consultation',
    priceAmount: 'Custom Pricing',
    duration: 'Tailored as per Shastras',
    shortDescription: 'Specific astrological remedial rituals performed to balance planetary adversities.',
    inclusions: [
      'Comprehensive Birth Chart (Kundali) verification',
      'Moola Mantra Japa & Specific Graha Daan vidhi',
      'Idol / Tree / Pot remedial rites if applicable',
      'Conducted with supreme scriptural purity',
      'Post-puja astrological remedy recommendations'
    ],
    popular: false,
    idealServices: ['Navgrah Dosha Nivaaran', 'Kuja Dosha Shanti', 'Kaal Sarp Dosha', 'Kadali / Kumbha / Arka Vivah']
  }
];

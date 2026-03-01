import { Package } from '@/types';

export const packages: Package[] = [
    {
        id: 'full-surf-agadir',
        slug: 'full-surf-agadir',
        citySlug: 'agadir',
        cityName: 'Agadir',
        name: 'FULL SURF Package',
        tagline: 'The complete surf experience — nothing left to chance.',
        price: 599,
        duration: '8 days / 7 nights',
        nights: 7,
        days: 8,
        groupSize: '2-10 people',
        difficulty: 'Beginner to Advanced',
        heroImage: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1600&q=80',
        cardImage: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80',
        overview:
            'The ultimate all-inclusive surf package in Agadir. Whether you\'re catching your first wave or perfecting your cutback, our expert instructors and top-end equipment ensure you get the most out of Morocco\'s finest surf destination. Every detail — transport, accommodation, meals, and lessons — is taken care of so you can focus on the ocean.',
        inclusions: [
            'Transfer from/to Agadir/Essaouira airport or bus station',
            'Accommodation (7 nights)',
            'Full board: Breakfast, Lunch & Dinner',
            '6 daily surf lessons with certified instructors',
            'Free rental of premium surf equipment (boards, wetsuits, leash, wax)',
            'Photos & video analysis of your surf session every second day',
            'Folder of your surf videos at end of stay',
            'Surf skate lessons',
            'Free surfskate to use all time',
            'WiFi, Towels & Good Vibes',
        ],
        itinerary: [
            {
                day: 1,
                title: 'Arrival & Welcome',
                description:
                    'We pick you up from the airport or bus station and transfer you to your accommodation. After settling in, enjoy a welcome dinner with your group and a briefing on the week ahead, the surf spots, and what to expect.',
            },
            {
                day: 2,
                title: 'First Surf Session',
                description:
                    'Rise to a hearty breakfast before heading to the beach for your first surf lesson. Morning and afternoon sessions with video analysis in the evening to review your technique.',
            },
            {
                day: 3,
                title: 'Full Day Surfing',
                description:
                    'A full day dedicated to the waves. Morning lesson focusing on your weakest points, afternoon free surf with instructor guidance, and an optional evening beach bonfire.',
            },
            {
                day: 4,
                title: 'Surf Skate Day',
                description:
                    'Take a break from the ocean and hit the surf skate ramp. These technique-building sessions on land translate directly to your flow in the water.',
            },
            {
                day: 5,
                title: 'Advanced Technique',
                description:
                    'Detailed video analysis session in the morning, focusing on technique corrections before another full day of surfing. Dinner at a local Moroccan restaurant.',
            },
            {
                day: 6,
                title: 'Surf Safari',
                description:
                    'We venture to a different surf spot along the coast for a change of scenery and new wave conditions. Packed lunch on the beach with stunning coastal views.',
            },
            {
                day: 7,
                title: 'Final Sessions',
                description:
                    'Your last full day in the water. Morning surf session followed by a final video review and your surf completion certificate ceremony.',
            },
            {
                day: 8,
                title: 'Farewell Breakfast & Departure',
                description:
                    'A delicious farewell breakfast before we transfer you back to the airport or bus station. You leave with new skills, amazing memories, and a folder full of your best surf moments.',
            },
        ],
        importantInfo: [
            'Minimum age requirement: 12 years old',
            'No prior surf experience required',
            'Swimming ability required',
            'Sunscreen and sun protection recommended',
            'Best season: March to October',
            'Airport pickup included in price',
            'Vegetarian meal options available upon request',
        ],
        category: 'surf',
        featured: true,
        badge: 'Most Popular',
    },
    {
        id: 'surf-yoga-agadir',
        slug: 'surf-yoga-agadir',
        citySlug: 'agadir',
        cityName: 'Agadir',
        name: 'SURF & YOGA Package',
        tagline: 'Balance your body and mind between the waves and the mat.',
        price: 659,
        duration: '8 days / 7 nights',
        nights: 7,
        days: 8,
        groupSize: '2-8 people',
        difficulty: 'All levels',
        heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
        cardImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        overview:
            'Combine the thrill of riding Atlantic waves with the serenity of daily yoga practice. This package is designed for those who want both adventure and mindfulness. Start your mornings with sunrise yoga, spend your days on the waves, and wind down with evening meditation — all set against the backdrop of Agadir\'s stunning coastline.',
        inclusions: [
            'Transfer from/to Agadir/Essaouira airport or bus station',
            'Accommodation (7 nights)',
            'Full board: Breakfast, Lunch & Dinner',
            '6 daily surf lessons with certified instructors',
            '3 yoga classes (sunrise or sunset)',
            'Free rental of premium surf equipment (boards, wetsuits, leash, wax)',
            'Photos & video analysis of your surf session every second day',
            'Folder of your surf videos at end of stay',
            'Surf skate lessons',
            'Free surfskate to use all day',
            'WiFi, Towels & Good Vibes',
        ],
        itinerary: [
            {
                day: 1,
                title: 'Arrival & Welcome',
                description:
                    'Airport pickup and transfer to accommodation. Welcome dinner and orientation session covering surf spots, yoga schedule, and the week ahead.',
            },
            {
                day: 2,
                title: 'Sunrise Yoga & First Surf',
                description:
                    'Begin with a sunrise yoga class on the beach to awaken your body, then head straight to the surf for your first lesson of the week.',
            },
            {
                day: 3,
                title: 'Surf Focus Day',
                description:
                    'Two surf sessions with video analysis. Evening stretching yoga to recover and relax tired muscles.',
            },
            {
                day: 4,
                title: 'Yoga & Surf Skate',
                description:
                    'Morning yoga class focusing on balance and flexibility — key skills for surfing. Afternoon surf skate session.',
            },
            {
                day: 5,
                title: 'Full Surf Day',
                description:
                    'A complete surf day with morning and afternoon sessions, video review, and personalized coaching.',
            },
            {
                day: 6,
                title: 'Sunset Yoga & Surf Safari',
                description:
                    'Morning surf at a new coastal spot, followed by an unforgettable sunset yoga session with ocean views.',
            },
            {
                day: 7,
                title: 'Final Surf & Certificate',
                description:
                    'Last surf session and completion ceremony. Evening farewell dinner with the group.',
            },
            {
                day: 8,
                title: 'Morning Yoga & Departure',
                description:
                    'One last sunrise yoga session before your farewell breakfast and transfer to the airport.',
            },
        ],
        importantInfo: [
            'Minimum age requirement: 14 years old',
            'No prior surf or yoga experience required',
            'Basic swimming ability required',
            'Yoga mats and props provided',
            'Best season: March to October',
            'Please inform us of any injuries before arrival',
            'Vegetarian and vegan meal options available',
        ],
        category: 'yoga',
        featured: true,
        badge: 'Best Value',
    },
    {
        id: 'free-surfer-agadir',
        slug: 'free-surfer-agadir',
        citySlug: 'agadir',
        cityName: 'Agadir',
        name: 'FREE SURFER Package',
        tagline: 'For surfers who know what they want — freedom in the waves.',
        price: 419,
        duration: '8 days / 7 nights',
        nights: 7,
        days: 8,
        groupSize: '2-10 people',
        difficulty: 'Intermediate to Advanced',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        cardImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
        overview:
            'Already know how to surf? This package gives you everything you need to explore Morocco\'s waves on your own terms. We handle your accommodation, meals, and equipment — you focus on scoring the best breaks along the coast. Daily surf condition briefings and spot recommendations ensure you\'re always in the right place at the right time.',
        inclusions: [
            'Transfer from/to Agadir/Essaouira airport or bus station',
            'Accommodation (7 nights)',
            'Breakfast & Dinner (half board)',
            'Free daily premium surf equipment rental (boards, wetsuits, leash, wax)',
            'Daily briefing about surf conditions & spots',
            'WiFi, Towels & Good Vibes',
        ],
        itinerary: [
            {
                day: 1,
                title: 'Arrival & Surf Briefing',
                description:
                    'Airport pickup and transfer. Welcome dinner followed by a detailed briefing on all surf spots in the region, local rules, and tide conditions.',
            },
            {
                day: 2,
                title: 'Free Surf — Main Beach',
                description:
                    'Collect your equipment and hit the main break. Daily morning briefing with tide tables and spot recommendations.',
            },
            {
                day: 3,
                title: 'Exploring the Coast',
                description:
                    'We point you to a lesser-known reef break for experienced surfers. Lunch on the beach.',
            },
            {
                day: 4,
                title: 'Rest or Surf',
                description:
                    'Free day to explore Agadir, visit the market, or rest — your call. Equipment still available if you want to surf.',
            },
            {
                day: 5,
                title: 'Free Surf Day',
                description:
                    'Another full day of free surfing with daily conditions briefing.',
            },
            {
                day: 6,
                title: 'Surf Safari',
                description:
                    'Optional group transport to Taghazout or Anchor Point — some of Morocco\'s most legendary waves.',
            },
            {
                day: 7,
                title: 'Final Day Surf',
                description:
                    'Last full day of free surfing. Return equipment by evening.',
            },
            {
                day: 8,
                title: 'Farewell Breakfast & Departure',
                description:
                    'Breakfast and transfer to the airport or bus station.',
            },
        ],
        importantInfo: [
            'This package is for existing surfers (can pop-up and ride waves unassisted)',
            'Minimum age: 16 years old',
            'Swimming proficiency required',
            'Best season: March to October',
            'Vegetarian options available',
        ],
        category: 'surf',
        featured: false,
    },
    {
        id: 'stay-breakfast-agadir',
        slug: 'stay-breakfast-agadir',
        citySlug: 'agadir',
        cityName: 'Agadir',
        name: 'STAY WITH BREAKFAST',
        tagline: 'Your home by the sea — comfort, food, and good vibes.',
        price: 274,
        duration: '8 days / 7 nights',
        nights: 7,
        days: 8,
        groupSize: '1-12 people',
        difficulty: 'N/A — Relaxation focused',
        heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80',
        cardImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
        overview:
            'Not ready for surf lessons? Just want a comfortable, affordable base in beautiful Agadir? This package covers your accommodation, daily breakfast and dinner, and everything you need to explore the city and coast at your own pace. Ideal for couples, solo travelers, or families wanting a relaxed Moroccan getaway.',
        inclusions: [
            'Accommodation (7 nights)',
            'Breakfast & Dinner daily',
            'WiFi, Towels & Good Vibes',
        ],
        itinerary: [
            {
                day: 1,
                title: 'Arrival & Check-in',
                description:
                    'Arrive at your accommodation and settle in. Welcome dinner to start your Agadir adventure.',
            },
            {
                day: 2,
                title: 'Beach Day',
                description:
                    'Explore Agadir\'s 10km beach promenade, swim in the Atlantic, or simply relax.',
            },
            {
                day: 3,
                title: 'City Exploration',
                description:
                    'Discover the Agadir medina, the souk market, and the kasbah ruins.',
            },
            {
                day: 4,
                title: 'Day Trip Option',
                description:
                    'Optional paid day trip to Taghazout surf village, Immouzer waterfalls, or Tiznit silver market.',
            },
            {
                day: 5,
                title: 'Free Day',
                description:
                    'Your day, your rules. Relax, explore, or try local cuisine.',
            },
            {
                day: 6,
                title: 'Coastal Walk',
                description:
                    'Morning coastal walk along the Agadir bay promenade, followed by seafood lunch.',
            },
            {
                day: 7,
                title: 'Last Evening',
                description:
                    'Final dinner and sunset views over the ocean.',
            },
            {
                day: 8,
                title: 'Farewell Breakfast & Departure',
                description:
                    'Enjoy your last breakfast before checking out.',
            },
        ],
        importantInfo: [
            'Airport transfer not included — can be arranged for additional fee',
            'All ages welcome',
            'Surf add-ons can be purchased on site',
            'Free cancellation up to 7 days before arrival',
        ],
        category: 'relaxation',
        featured: false,
    },
];

export const getPackageBySlug = (slug: string): Package | undefined =>
    packages.find((p) => p.slug === slug);

export const getPackagesByCity = (citySlug: string): Package[] =>
    packages.filter((p) => p.citySlug === citySlug);

export const getFeaturedPackages = (): Package[] =>
    packages.filter((p) => p.featured);

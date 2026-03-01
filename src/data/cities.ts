import { City } from '@/types';

export const cities: City[] = [
    {
        city_id: 1,
        name: 'Agadir',
        slug: 'agadir',
        tagline: 'Coastal paradise with world-class surfing',
        description:
            'A stunning coastal city known for its beautiful beaches, perfect waves, and gateway to the Atlas Mountains. Experience the perfect blend of beach relaxation and mountain adventure.',
        latitude: 30.4278,
        longitude: -9.5981,
        image_url: 'https://images.unsplash.com/photo-1590060208523-b4497ffca506?w=1600&q=80',
        rating: 4.8,
        packagesCount: 4,
        is_active: true,
        bestSeason: 'March to October',
        climate: 'Mediterranean with warm, dry summers',
        highlights: ['World-class surf breaks', 'Sandy beach promenade', 'Fresh seafood markets', 'Atlas Mountain day trips', 'Souss-Massa National Park'],
    },
    {
        city_id: 2,
        name: 'Marrakech',
        slug: 'marrakech',
        tagline: 'The Red City — where magic meets culture',
        description:
            'Immerse yourself in the vibrant souks, stunning palaces, and the electric energy of Jemaa el-Fna square. A city that never fails to astonish.',
        latitude: 31.6295,
        longitude: -7.9811,
        image_url: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80',
        rating: 4.9,
        packagesCount: 0,
        is_active: false,
    },
    {
        city_id: 3,
        name: 'Casablanca',
        slug: 'casablanca',
        tagline: 'Morocco\'s cosmopolitan heart',
        description:
            'A dynamic blend of Art Deco architecture, modern skylines, and bustling port culture. The economic engine of Morocco with endless coastal charm.',
        latitude: 33.5731,
        longitude: -7.5898,
        image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
        rating: 4.6,
        packagesCount: 0,
        is_active: false,
    },
    {
        city_id: 4,
        name: 'Fès',
        slug: 'fes',
        tagline: 'The ancient imperial city',
        description:
            'Step back in time in one of the world\'s best-preserved medieval cities. Lose yourself in labyrinthine streets, tanneries, and centuries of history.',
        latitude: 34.0181,
        longitude: -5.0078,
        image_url: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1600&q=80',
        rating: 4.7,
        packagesCount: 0,
        is_active: false,
    },
    {
        city_id: 5,
        name: 'Tangier',
        slug: 'tangier',
        tagline: 'Where Africa meets Europe',
        description:
            'An iconic port city at the crossroads of two continents. Legendary for its bohemian spirit, stunning sea views, and legendary medina.',
        latitude: 35.7595,
        longitude: -5.8340,
        image_url: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80',
        rating: 4.5,
        packagesCount: 0,
        is_active: false,
    },
];

export const getCityBySlug = (slug: string): City | undefined =>
    cities.find((c) => c.slug === slug);

export const getAvailableCities = (): City[] =>
    cities.filter((c) => c.is_active);

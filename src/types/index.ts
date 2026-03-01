// =========================
// DATABASE ENTITIES (Postgres Schema)
// =========================

export interface City {
    city_id: string | number;
    name: string;
    tagline?: string;
    description?: string;
    image_url?: string;
    latitude?: number;
    longitude?: number;
    is_active: boolean;
    // UI-only helper fields (migrating from old schema)
    slug?: string;
    rating?: number;
    packagesCount?: number;
    region?: string;
    bestSeason?: string;
    climate?: string;
    highlights?: string[];
    longDescription?: string;
}

export interface Establishment {
    establishment_id: string | number;
    city_id: string | number;
    name: string;
    type?: string;
    area?: string;
    star?: number; // 0-5
    short_description?: string;
    address?: string;
    whatsapp_number?: string;
}

export interface Activity {
    activity_id: string | number;
    city_id: string | number;
    title: string;
    description?: string;
    duration_estimate?: string;
    base_price?: number;
    meeting_point?: string;
    image_url?: string;
    is_group_activity: boolean;
    images?: string[];
    time_of_day?: string;
}

export interface Pack {
    pack_id: string | number;
    pack_name: string;
    total_days?: number;
    difficulty_level?: string;
    estimate_price?: number;
}

export interface Client {
    user_id: string | number;
    full_name: string;
    email: string;
    password_hash: string;
    phone_number?: string;
    preferred_language?: string;
}

export type BookingType = 'activity' | 'pack';
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Booking {
    booking_id: string | number;
    client_id: string | number;
    booking_type: BookingType;
    booking_date: string; // ISO Date
    scheduled_date?: string; // ISO Date
    status: BookingStatus;
    total_price?: number;
    activity_id?: string | number;
    pack_id?: string | number;
    establishment_id?: string | number;
}

// =========================
// UI / LEGACY COMPATIBILITY
// =========================

export interface Package extends Partial<Pack> {
    // Mapping Pack fields to UI component needs
    id: string;
    slug: string;
    citySlug?: string;
    cityName?: string;
    name: string;
    price: number;
    duration: string;
    heroImage: string;
    cardImage: string; // Compatibility for PackageCard
    badge?: string;    // Compatibility for PackageCard
    nights?: number;   // Data compatibility
    days?: number;     // Data compatibility
    category?: string;
    featured?: boolean;
    overview: string;
    tagline?: string;
    inclusions: string[];
    itinerary: { day: number | string; title: string; description: string }[];
    importantInfo: string[];
    groupSize: string;
    difficulty: string;
}

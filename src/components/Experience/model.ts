export interface Exp {
    id: number;
    position: number;
    companyName: string;
    website?: string;
    logo: string;
    startAt: string; // For the purpose of stringifying MM-DD-YYYY date format
    endAt?: string;  // For the purpose of stringifying MM-DD-YYYY date format
    technologies?: string[];
    backgroundUrl?: string
    city: string;
    country: string;
    role: string;
    description: string;
}
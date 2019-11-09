import { Track } from './track';
export interface Album {
    name: string;
    releaseDate: string;
    tracks: Track[];
    coverImage: string;
}

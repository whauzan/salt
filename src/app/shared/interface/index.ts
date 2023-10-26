export interface Video {
    id: string;
    title: string;
    author: string;
    views: number;
    createdAt: Date;
}

export interface People {
    id: string;
    name: string;
    jobTitle: string;
    views: number;
    createdAt: Date;
}

export interface Document {
    id: string;
    title: string;
    author: string;
    views: number;
    createdAt: Date;
}

export enum ActivityType {
    Comment = "Comment",
    Video = "Video",
    Document = "Document",
    Badge = "Badge",
    Like = "Like"
}

export interface Activity {
    id: string;
    author: string;
    message: string;
    type: ActivityType;
    createdAt: string;
}

export interface Channel {
    id: string;
    title: string;
    createdAt: Date;
}
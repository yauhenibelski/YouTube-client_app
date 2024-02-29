export interface Content {
    kind: string;
    etag: string;
    id: string;
    snippet: ContentSnippet;
    statistics: ContentStatistics;
}
interface ContentThumbnailSize {
    url: string;
    width: number;
    height: number;
}

export interface ContentStatistics {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
}

interface ContentThumbnail {
    default: ContentThumbnailSize;
    medium: ContentThumbnailSize;
    high: ContentThumbnailSize;
    standard: ContentThumbnailSize;
    maxres: ContentThumbnailSize;
}
interface ContentLocalized {
    title: string;
    description: string;
}
interface ContentSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: ContentThumbnail;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage?: string;
    localized: ContentLocalized;
    defaultAudioLanguage: string;
}

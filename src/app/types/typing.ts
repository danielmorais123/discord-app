export interface Message {
    id: number;
    content: string;
    created_at: Date | string | any;
    userId: number;
    channelId: number;
    user?: User
}
export interface Friend {
    user_id: User | number;
    friend_id: User | number;
    created_at: Date | string | any;
    confirmed: boolean;


}

export interface Server {
    id: number;
    name: string;
    created_at: Date | string | any;
    userId: number;
    image?: string;
    user?: User;
    channelId: number;
    channels?: Channel[];
}
export interface Channel {
    id: number;
    serverId: number;
    server?: Server;
    name: string;
    isText: boolean;
    message: Message[];
    isPublic?: boolean;

}
export interface User {
    id: number;
    created_at: Date | string | any;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    email: string;
    profilePicture?: string;
    descriptionText?: string;
    lastServerId?: number;
    isOnline?: boolean;
}

export interface UserBug {
    user: User;
}
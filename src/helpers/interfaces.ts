import { ReactNode } from "react";

export interface Props {
    children: ReactNode;
}

export interface UserDataInterface {
    email: string;
    canBuy: boolean;
    timestamp: Date;
    userRole: string;
    id?: string;
}
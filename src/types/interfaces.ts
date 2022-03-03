import { ReactNode } from "react";

export type Props = {
    children: ReactNode;
}

export type UserDataInterface = {
    email: string;
    canBuy: boolean;
    timestamp: Date;
    userRole: string;
    id?: string;
}
"use server"

import axios from "axios";

import { IContact } from "../types";

export async function sendMessageToAdmin(payload: IContact) {

    try {
        const response = await axios.post(`${process.env.BACKEND_URL}/contacts`, payload);

        const { data } = response;

        return data;
    } catch (error) {
        throw new Error("Error sending message!");
    }
}

"use server"

import axios from "axios";
import { IContact } from "../types";

export async function sendMessageToAdmin(payload: IContact) {

    try {
        const response = await axios.post(`${process.env.BACKEND_URL}/contacts`, payload);

        const { data } = response;
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error fetching projects data:", error);

        return [];
        // throw new Error("Something went wrong fetching skills data!");
    }
}

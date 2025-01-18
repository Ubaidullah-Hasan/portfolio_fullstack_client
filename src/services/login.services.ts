"use server"

import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

import axiosInstance from "../lib/axiosInstance"

export async function loginUser(userData: FieldValues) {
    try {
        const { data } = await axiosInstance.post("auth/login", userData);

        if (data.success) {
            cookies().set("accessToken", data?.data?.accessToken);
            cookies().set("refreshToken", data?.data?.refreshToken);
        }

        return data;
    } catch (error: any) {
        console.log(error.response.data);
        throw new Error(error.response.data)
    }
}

export const logout = () => {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
};

export const getCurrentUser = async () => {
    const accessToken = cookies().get("accessToken")?.value;

    let decodedToken = null;

    if (accessToken) {
        decodedToken = await jwtDecode(accessToken);

        return {
            _id: decodedToken._id,
            // name: decodedToken.name, => todo update in server, add name
            email: decodedToken.email,
            // profilePhoto: decodedToken.profilePhoto, => todo: update in server, add profilePhoto
        };
    }

    return decodedToken;
};

export const getNewAccessToken = async () => {
    try {
        const refreshToken = cookies().get("refreshToken")?.value;

        const res = await axiosInstance({
            url: "/auth/refresh-token", // todo: write function for /auth/refresh-token route in auth modules
            method: "POST",
            withCredentials: true,
            headers: {
                cookie: `refreshToken=${refreshToken}`,
            },
        });

        return res.data;
    } catch (error) {
        throw new Error("Failed to get new access token");
    }
};

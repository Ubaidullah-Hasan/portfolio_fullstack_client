"use server"
import axios from "axios";

export async function getEducationData() {
    try {
        const response = await axios.get(`${process.env.CLIENT_URL}/education.json`);
        const data = response.data.education;

        return data;
    } catch (error) {
        console.log("Error fetching education data:", error);
    }
}

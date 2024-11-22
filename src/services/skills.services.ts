"use server"
import axios from "axios";

export async function getSkillsData() {
    try {
        const response = await axios.get(`${process.env.BACKEND_URL}/skills`);
        const {data} = response.data;

        return data;
    } catch (error) {
        console.log("Error fetching education data:", error);
    }
}

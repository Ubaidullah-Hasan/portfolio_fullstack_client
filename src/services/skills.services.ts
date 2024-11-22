"use server"

export async function getSkillsData() {
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/skills`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching skills data:", error);
        return [];
    }
}

"use server"

export async function getProjectsData() {
    
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/projects`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const {data} = await response.json();

        return data;
    } catch (error) {
        console.log("Error fetching projects data:", error);

        return [];
        // throw new Error("Something went wrong fetching skills data!");
    }
}

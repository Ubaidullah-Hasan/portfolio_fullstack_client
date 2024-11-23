"use server"

export async function getBlogData() {
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/blogs`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const { data } = await response.json();

        return data;
    } catch (error) {
        console.log("Error fetching blog data:", error);

        return [];
    }
}

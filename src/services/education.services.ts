"use server"


export async function getEducationData() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/education.json`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return data.education;
    } catch (error) {
        console.log("Error fetching education data:", error);
        // return [];
        throw new Error("Something went wrong!");
    }
}

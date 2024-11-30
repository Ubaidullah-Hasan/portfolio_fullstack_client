"use server"

export const getAllExperience = async () => {
    const response = await fetch(`${process.env.BACKEND_URL}/experiences`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const { data } = await response.json(); 

    return data;
}
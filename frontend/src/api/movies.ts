import axios from "axios";

export interface MovieDTO {
    id: string;
    title: string;
    genre: string;
}

export async function getMovies(): Promise<MovieDTO[]> {
    const response = await axios.get("/api/movies");
    return response.data;
}

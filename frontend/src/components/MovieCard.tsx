interface MovieCardProps {
    title: string;
    genre: string;
    poster?: string;
}

export default function MovieCard({ title, genre, poster }: MovieCardProps) {
    return (
        <div className="movie-card">
            {poster ? (
                <img src={poster} alt={title} className="movie-poster" />
            ) : (
                <div className="movie-poster placeholder">
                    No Image
                </div>
            )}
            <div className="movie-info">
                <h2>{title}</h2>
                <p>{genre}</p>
            </div>
        </div>
    );
}

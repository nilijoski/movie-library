
import {type UserProps} from "../../type/user.ts";

export default function HomePage({user}: Readonly<UserProps>) {
    return (
        <main className="flex-grow container mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-4">Dear User {user?? ""} Welcome!</h2>
                <p className="text-gray-700">

                {user ? <span>You are logged in and have access to movies and add new movie features.</span>
                    : <span className="bg-yellow-200">You should login first to access all features!</span>}
                </p>
        </main>
    );
}

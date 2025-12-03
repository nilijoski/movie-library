import {useState} from "react";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin=()=> {
        const isLocal = globalThis.location.host === 'localhost:5173';

        // Backend URL
        const backend = isLocal
            ? 'http://localhost:8080'
            : globalThis.location.origin;
        globalThis.location.href = backend + "/oauth2/authorization/github";
    }

    return (
        <main className="flex-grow container mx-auto px-auto py-10">

                <div className="w-full max-w-md bg-white m-auto rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
                    <p className="text-center text-sm text-gray-500 mt-5">
                        You can also login with your {" "}
                        <button  className="text-blue-600 hover:underline cursor-pointer" onClick={handleLogin}>
                            Github
                        </button>
                        {" "} account!
                    </p>
                    <form className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Email <input
                                type="email"
                                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                            />
                            </label>
                        </div>

                        {/* Password */}
                        <div>

                            <div className="relative">
                                <label className="block text-sm font-medium mb-1">Password <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="••••••••"
                                />
                                </label>
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                </button>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
                        >
                            Login
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-sm text-gray-500 mt-5">
                        Don't have an account?{" "}
                        <button className="text-blue-600 hover:underline">
                            Sign up
                        </button>
                    </p>
                </div>
        </main>
    );
}

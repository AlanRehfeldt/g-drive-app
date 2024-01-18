import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api'
import Cookies from 'js-cookie';

export interface userProps {
        id: string
        name: string 
        email: string
        password: string
        is_admin: boolean
        created_at: string
        updated_at: string
}

interface AuthContextProps {
    SignIn: (credentials: { email: string; password: string }) => Promise<void>;
    SignOut: () => void;
    user: userProps | null; 
  }

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)
function useAuth() {
    const context = useContext(AuthContext)
    return context
}

// eslint-disable-next-line @typescript-eslint/ban-types
function AuthProvider({ children }: React.PropsWithChildren<{}>) {
    const [data, setData] = useState<{ user: userProps; token: string } | null>(null);

    async function SignIn({ email, password }: { email: string; password: string }) {
        try {
            const response = await api.post("/session", { email, password })
            const { user, token } = response.data

            Cookies.set("@gdrive:user", JSON.stringify(user), {path: '/'})
            Cookies.set("@gdrive:token", token, {path: '/'})

            setData({ user, token })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch(e: any) {
            if(e.response) {
                alert(e.response.data.message)
            } else {
                alert("Não foi possível entrar")
            }
        }
    }

    function SignOut() {
        Cookies.remove("@gdrive:user", {path: '/'})
        Cookies.remove("@gdrive:token", {path: '/'})
        setData(null)
    }

    api.interceptors.request.use((config) => {
        const token = Cookies.get("@gdrive:token");
        if (token) {
        config.headers['Authorization'] = `token=${token}`;
        }
        return config;
      });

    useEffect(() => {
        const user  = Cookies.get("@gdrive:user");
        const token = Cookies.get("@gdrive:token");

        if (user && token) {
            setData({ token, user: JSON.parse(user) })
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            SignIn,
            SignOut,
            user: data?.user ?? null
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export {
    // eslint-disable-next-line react-refresh/only-export-components
    useAuth,
    AuthProvider
}
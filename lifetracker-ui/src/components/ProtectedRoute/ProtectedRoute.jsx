import { useAuthContext } from "components/contexts/auth";
import LoginPage from "components/LoginPage/LoginPage";

export default function ProtectedRoute({element}) {
    const { initialized, user } = useAuthContext()
    if(!initialized) {
        return null
    }

    if (initialized && !user?.email) {
        return <LoginPage message="Log in to view that page" />
    }

    return <>{element}</>
}
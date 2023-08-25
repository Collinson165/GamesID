// import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import { useAuth } from "./useAuth";



export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>){
    const ComponentWithAuth = (props: P) => {
        const router = useRouter();
        const { user, loading } = useAuth();

        if(loading){
            return(
                <div>
                    Loading...
                </div>
            )
        }

        if(!user){
            router.push('/login');
        }

        // useEffect(() => {
        //     const authenticated = checkAuthentication();
        //     if(!authenticated){
        //         router.push('/login');
        //     }
        // }, [router]);

        return <WrappedComponent {...props} />;
    };

    ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return ComponentWithAuth;
}

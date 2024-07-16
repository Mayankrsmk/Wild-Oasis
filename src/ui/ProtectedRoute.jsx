import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({children}){
    const navigate = useNavigate();
    
    // Loading authenticated user
    const {isLoading,isAuthenticated} = useUser();

    // If no auth user, redirect to login
    useEffect(function(){
        if(!isAuthenticated && !isLoading){
            navigate("/login");
        }
    },[isLoading, isAuthenticated,navigate]);
    // Show spinner

    if(isLoading){
        return (
            <FullPage>
                <Spinner/>
            </FullPage>
        )
    }

    // If user render the app
  if(isAuthenticated) return children;
}

export default ProtectedRoute;
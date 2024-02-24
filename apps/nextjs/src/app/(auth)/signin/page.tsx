"use client"
import EmailSignIn from "./email-signin";
import { OAuthSignIn } from "./oauth-signin";

export default function AuthenticationPage() {
    return (
        <div className="relative flex flex-1 flex-col items-center justify-center">
            <div className="max-w-sm sm:max-w-md w-full text-center">
                <div className="flex justify-center">
                    
                </div>
                <h1 className="text-2xl font-bold opacity-80 mb-5">Entrar com</h1>
                <OAuthSignIn />
                <div className="flex mb-5 items-center">
                    <div className="py-px w-full bg-gray-200"></div>
                    <span className="text-xs mx-5 text-coolGray-600 uppercase" data-config-id="auto-txt-4-2">Ou</span>
                    <div className="py-px w-full bg-gray-200"></div>
                </div>
                <EmailSignIn />
            </div>
        </div>
    );
}


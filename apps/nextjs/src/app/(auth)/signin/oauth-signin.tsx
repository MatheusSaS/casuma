"use client";

import * as React from "react";
import * as Icons from "@acme/ui/icons";
import { useSignIn } from "@clerk/nextjs";
import type { OAuthStrategy } from "@clerk/types";

import { Button } from "@casuma/ui/button";
import { useToast } from "@casuma/ui/use-toast";

export function OAuthSignIn() {
  const [isLoading, setIsLoading] = React.useState<OAuthStrategy | null>(null);
  const { signIn, isLoaded: signInLoaded } = useSignIn();
  const { toast } = useToast();

  const oauthSignIn = async (provider: OAuthStrategy) => {
    if (!signInLoaded) return null;
    try {
      setIsLoading(provider);
      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard",
      });
    } catch (cause) {
      console.error(cause);
      setIsLoading(null);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong, please try again.",
      });
    }
  };
  return (
    <>
      <Button
        variant="outlineSecondary"
        className="mb-3 w-full bg-background"
        onClick={() => oauthSignIn("oauth_google")}
      >
        {isLoading === "oauth_google" ? (
          <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.GitHub className="mr-2 h-4 w-4" />
        )}
        Google
      </Button>
      <Button
        variant="outlineSecondary"
        className="mb-5 w-full bg-background"
        onClick={() => oauthSignIn("oauth_facebook")}
      >
        {isLoading === "oauth_facebook" ? (
          <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.GitHub className="mr-2 h-4 w-4" />
        )}
        Facebook
      </Button>
    </>
  );
}

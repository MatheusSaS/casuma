"use client";

import * as React from "react";
import { Button } from "@casuma/ui/button";
import { Input } from "@casuma/ui/input";

export default function EmailSignIn() {
  return (
    <form >
      <Input
        name="email"
        placeholder="nome@linx.com.br"
        type="email"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect="off"
        className="bg-background"
      />
      <Button
        variant="destructive"
        className="bg-black hover:bg-black/80 w-full mt-5"
      >
        Entrar com o Email
      </Button>
    </form>
  )
}
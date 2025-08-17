
"use client";

import * as React from "react";
import { Sun, Palette } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Svetlá
        </DropdownMenuItem>
         <DropdownMenuItem onClick={() => setTheme("seo4web")}>
          <Palette className="mr-2 h-4 w-4" />
          seo4web
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

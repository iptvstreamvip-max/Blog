"use client";
import { IconArrowLeft } from "@tabler/icons-react";
import { Button } from "./ui/button";

export default function BackButton() {
  return (
    <div className="flex justify-between items-center px-2 pb-2">
      <Button
        variant={"ghost"}
        onClick={() => {
          window.history.back();
        }}
        className="flex space-x-2 items-center group"
      >
        <IconArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
        <span className="text-sm text-muted-foreground group-hover:text-primary">
          Back
        </span>
      </Button>
    </div>
  );
}

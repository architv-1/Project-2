"use client";

import { Badge, SparklesIcon } from "lucide-react";
import React from "react";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Paperclip, Plus, Send } from "lucide-react";

import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import AiInput from "../ui/ai-input";

interface UseAutoResizeTextareaProps {
  minHeight: number;
  maxHeight?: number;
}

function useAutoResizeTextarea({
  minHeight,
  maxHeight,
}: UseAutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }

      textarea.style.height = `${minHeight}px`;
      const newHeight = Math.max(
        minHeight,
        Math.min(textarea.scrollHeight, maxHeight ?? Number.POSITIVE_INFINITY)
      );

      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight]
  );

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `${minHeight}px`;
    }
  }, [minHeight]);

  useEffect(() => {
    const handleResize = () => adjustHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [adjustHeight]);

  return { textareaRef, adjustHeight };
}

const MIN_HEIGHT = 48;
const MAX_HEIGHT = 164;

const AnimatedPlaceholder = ({ showSearch }: { showSearch: boolean }) => (
  <AnimatePresence mode="wait">
    <motion.p
      key={showSearch ? "search" : "ask"}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.1 }}
      className="pointer-events-none w-[150px] text-sm absolute text-black/70 dark:text-white/70"
    >
      {showSearch ? "Search the web..." : "Ask Skiper Ai..."}
    </motion.p>
  </AnimatePresence>
);

const AiCard = () => {
  const [value, setValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: MIN_HEIGHT,
    maxHeight: MAX_HEIGHT,
  });
  const [showSearch, setShowSearch] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClose = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input
    }
    setImagePreview(null); // Use null instead of empty string
  };

  const handleChange = (e: any) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    setValue("");
    adjustHeight(true);
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);
  return (
    <div>
      <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px] dark:border-white/10 dark:bg-neutral-900">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2 dark:border-white/10 dark:bg-neutral-800">
          <Badge
            variant="outline"
            className="absolute left-4 top-6 rounded-[14px] border border-black/10 text-base md:left-6 dark:border-white/10 dark:bg-neutral-900"
          >
            <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800 dark:text-neutral-200" />{" "}
          </Badge>
          <span className="text-neutral-800 ml-12 mt-4 dark:text-neutral-200">
            Latest Component
          </span>
          <h1 className="text-4xl font-bold ml-5 text-black dark:text-white">
            AI Input
          </h1>
          <p className="-mt-7 ml-5 text-black dark:text-gray-300">
            Seamless AI Chat Input box
          </p>
          <AiInput />
        </div>
      </div>
    </div>
  );
};

export default AiCard;
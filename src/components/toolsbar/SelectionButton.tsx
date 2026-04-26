"use client";

import { useRef, useState } from "react";
import { CanvasMode } from "~/types";
import IconButton from "./IconButton";
import { BiPointer } from "react-icons/bi";
import { RiHand } from "react-icons/ri";

export default function SelectionButton({
  isActive,
  canvasMode,
  onClick,
}: {
  isActive: boolean;
  canvasMode: CanvasMode;
  onClick: (canvasMode: CanvasMode.None) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex" ref={menuRef}>
      <IconButton isActive={isActive} onClick={() => onClick(CanvasMode.None)}>
        {canvasMode !== CanvasMode.None &&
          canvasMode !== CanvasMode.Dragging && (
            <BiPointer className="h-5 w-5" />
          )}
        {canvasMode === CanvasMode.None && <BiPointer className="h-5 w-5" />}
        {canvasMode === CanvasMode.Dragging && <RiHand className="h-5 w-5" />}
      </IconButton>
      <button onClick={() => setIsOpen(!isOpen)} className="ml-1">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path
            d="M3.646 6.354l-3-3 .708-.708L4 5.293l2.646-2.647.708.708-3 3L4 6.707l-.354-.353z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}

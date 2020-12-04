import * as React from "react";

// core APIs
export function useFRTAction(act: (() => void)): void;
// export function useFRTAssert(act: (() => bool)): void;
export const SkipFRT: React.FC<{children: React.ReactNode}>;

// exploration utils
export function pick_random<T>(opts: T[]): T;

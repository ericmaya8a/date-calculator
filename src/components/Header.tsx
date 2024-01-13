import { PropsWithChildren } from "react";

export function Header({ children }: PropsWithChildren) {
  return (
    <h2 className="mb-4 border-b border-gray-900 text-2xl font-bold">
      {children}
    </h2>
  );
}

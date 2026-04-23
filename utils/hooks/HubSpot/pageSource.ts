import { useRouter } from "next/router";

export function getCurrentPath(): string {
  const router = useRouter();
  const currentPath = router.pathname;
  return currentPath;
}

export function getPageSourceFormatted(path: string): string {
  const formattedPath =
    path === "/" ? "Home Page" :
    path.replace(/-/g, " ").split("/").pop() as string;

  return formattedPath.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
}
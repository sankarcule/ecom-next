import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware ({
    publicRoutes: ['/', '/cart']
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
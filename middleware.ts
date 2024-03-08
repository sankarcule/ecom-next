import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware ({
    publicRoutes: ['/', '/cart', '/products', '/products(.*)']
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
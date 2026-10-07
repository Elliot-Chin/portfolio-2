import { NextResponse } from "next/server"

// Decoys for common secret-file and unused administration probes.
// These paths never map to real files or credentials.
const probePaths = new Set([
    "/.git.credentials", "/.git-credentials", "/.npmrc", "/.pypirc",
    "/.dockerenv", "/.ds_store", "/.htpasswd",
    "/wp-login.php", "/xmlrpc.php", "/phpinfo.php", "/info.php",
    "/config.php", "/config.php.bak", "/web.config",
    "/backup.zip", "/backup.tar.gz", "/backup.sql", "/database.sql", "/dump.sql",
    "/server-status", "/server-info", "/debug/vars", "/actuator/env", "/actuator/heapdump",
])
const probeDirectories = ["/.git", "/.svn", "/.hg", "/.aws", "/.ssh", "/wp-admin", "/phpmyadmin", "/adminer"]

export function middleware(request) {
    // Keep the old mixed-case URL without a conflicting Next.js page route.
    if (request.nextUrl.pathname === "/projects/AI4Security") {
        const destination = request.nextUrl.clone()
        destination.pathname = "/projects/ai4security"
        return NextResponse.redirect(destination, 308)
    }
    const path = request.nextUrl.pathname.toLowerCase().replace(/\/+$/, "")
    const isProbe = /^\/\.env(?:\.[a-z0-9._-]+)?$/.test(path)
        || probePaths.has(path)
        || probeDirectories.some(prefix => path === prefix || path.startsWith(`${prefix}/`))
    if (!isProbe) return NextResponse.next()
    const destination = request.nextUrl.clone()
    destination.pathname = "/nice-try"
    destination.search = ""
    const response = NextResponse.rewrite(destination)
    response.headers.set("X-Robots-Tag", "noindex, nofollow")
    response.headers.set("Cache-Control", "no-store")
    return response
}
export const config = { matcher: ["/((?!_next/static|_next/image).*)"] }

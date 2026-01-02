import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/dashboard')) {
        const session = request.cookies.get('zh_session');

        if (!session) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        const role = request.cookies.get('zh_role')?.value;

        // Restricted Routes
        if (pathname.startsWith('/dashboard/admin') && role !== 'BUREAU') {
            return NextResponse.redirect(new URL('/dashboard/unauthorized', request.url));
        }
        if (pathname.startsWith('/dashboard/team') && role !== 'TEAM_LEAD' && role !== 'BUREAU') {
            // Bureau can also see Team Lead stuff if needed, but per request, it's specific.
            // Let's stick to strict per-role for now.
            if (role !== 'TEAM_LEAD') {
                return NextResponse.redirect(new URL('/dashboard/unauthorized', request.url));
            }
        }

        // Everyone (BUREAU, TEAM_LEAD, VOLUNTEER) can access these:
        // /dashboard/overview, /dashboard/academy, /dashboard/events, /dashboard/notifications
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'],
};

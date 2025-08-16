import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
    // const cookieStore = await cookies();
    // const token = cookieStore.get('token');
    const token = request.cookies.get('token');
    

    if (!token) {
        return NextResponse.json({ message: 'No token provided' }, { status: 401 });
    }

    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            return NextResponse.json({ message: 'JWT secret not configured' }, { status: 500 });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const payload: any = jwt.verify(token.value, secret);
        
        const user = await prisma.user.findUnique({
            where: { email: payload.email },
            select: { id: true, name: true, email: true },
        });

        if (!user) {
          return NextResponse.json({ message: 'User not found' }, { status: 404 });
        } 

        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }
}
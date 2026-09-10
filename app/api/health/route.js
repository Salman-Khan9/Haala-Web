import { NextResponse } from 'next/server';

// GET request handler
export async function GET() {
  try {
    // You can add any checks here (DB, external services, etc.)
    const healthStatus = {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(healthStatus, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: error.message },
      { status: 500 }
    );
  }
}

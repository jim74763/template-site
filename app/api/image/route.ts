import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';

export async function GET() {
  try {
    const imageBuffer = await readFile('public/images/metadataimage.png');
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch (error) {
    console.error('Error loading image:', error);
    return new NextResponse('Image not found', { status: 404 });
  }
}
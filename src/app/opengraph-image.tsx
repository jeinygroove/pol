import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';
export const alt = 'Polerinna – Pole Dance Studios München';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoData = await readFile(path.join(process.cwd(), 'public/images/logo-polerinna.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#171717',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          alt="Polerinna"
          style={{ height: 300, filter: 'brightness(0) invert(1)' }}
        />
        <p style={{ color: '#b8920f', fontSize: 20, letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>
          Pole Dance Studios München
        </p>
      </div>
    ),
    { ...size },
  );
}

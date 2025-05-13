import { ImageResponse } from 'next/og';

// OG 이미지 크기 (Facebook, Twitter 권장 사이즈)
export const size = {
  width: 1200,
  height: 630,
};

// 이미지 ContentType
export const contentType = 'image/png';

// 항상 최신 이미지 생성
export const runtime = 'edge';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          backgroundImage: 'linear-gradient(to bottom right, #f3f4f6, #ffffff)',
          padding: '40px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1000px',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            padding: '40px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            backgroundColor: '#ffffff',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                backgroundColor: '#3b82f6',
                borderRadius: '16px',
                marginRight: '16px',
                color: 'white',
                fontSize: '36px',
                fontWeight: 'bold',
              }}
            >
              배
            </div>
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                margin: '0',
                background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)',
                color: '#1d4ed8',
              }}
            >
              배송콕
            </h1>
          </div>
          
          <p
            style={{
              fontSize: '24px',
              textAlign: 'center',
              color: '#4b5563',
              margin: '0 0 32px 0',
              maxWidth: '800px',
            }}
          >
            국내 모든 택배사 실시간 조회가 가능한 택배 추적 서비스
          </p>
          
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            {['CJ대한통운', '우체국택배', '롯데택배', '한진택배', '로젠택배', '쿠팡'].map((carrier, index) => (
              <div
                key={index}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '20px',
                  color: '#4b5563',
                  fontSize: '16px',
                }}
              >
                {carrier}
              </div>
            ))}
          </div>
        </div>
        
        <div
          style={{
            marginTop: '24px',
            fontSize: '18px',
            color: '#4b5563',
          }}
        >
          parcel-service6.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
} 
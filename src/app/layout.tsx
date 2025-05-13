import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

// 실제 배포된 도메인 설정 (Vercel URL)
const SITE_URL = 'https://parcel-service6.vercel.app';

// 페이지 자동 리프레시 설정 - 서버 컴포넌트에서만 사용 가능
export const revalidate = 0;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "배송콕",
  description: "국내 모든 택배사 실시간 조회가 가능한 택배 추적 서비스",
  metadataBase: new URL(SITE_URL),
  // Open Graph 메타데이터 추가
  openGraph: {
    title: "배송콕",
    description: "국내 모든 택배사 실시간 조회가 가능한 택배 추적 서비스",
    url: SITE_URL,
    siteName: "배송콕",
    images: [
      {
        url: `${SITE_URL}/og-image.png`, // 공유용 이미지 (아래에서 새로 만듦)
        width: 1200,
        height: 630,
        alt: "배송콕 - 국내 모든 택배사 실시간 조회가 가능한 택배 추적 서비스",
      }
    ],
    locale: "ko_KR",
    type: "website",
  },
  // 트위터 카드 메타데이터 추가
  twitter: {
    card: "summary_large_image",
    title: "배송콕",
    description: "국내 모든 택배사 실시간 조회가 가능한 택배 추적 서비스",
    images: [`${SITE_URL}/og-image.png`],
    creator: "@배송콕",
  },
  // 아이콘 설정
  icons: {
    icon: [
      { url: "/qnzjn8.png" },
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/qnzjn8.png",
    apple: "/qnzjn8.png",
  },
  // 네이버 검색 엔진 최적화
  verification: {
    other: {
      "naver-site-verification": ["네이버 사이트 인증 코드"]
    }
  },
  alternates: {
    canonical: SITE_URL
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/qnzjn8.png" sizes="512x512" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <Script id="dynamic-favicon" strategy="afterInteractive">
          {`
            // 파비콘을 동적으로 변경
            const link = document.querySelector("link[rel~='icon']");
            if (!link) {
              const newLink = document.createElement('link');
              newLink.rel = 'icon';
              newLink.href = '/qnzjn8.png';
              newLink.sizes = '512x512';
              document.head.appendChild(newLink);
            } else {
              link.href = '/qnzjn8.png';
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

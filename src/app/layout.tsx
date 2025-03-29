import type { Metadata } from 'next'
import {
  Inria_Sans as InriaSans,
  Indie_Flower as IndieFlower,
} from 'next/font/google'
import './globals.css'

const inriaSans = InriaSans({
  variable: '--font-inria-sans',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

const indieFlower = IndieFlower({
  variable: '--font-indie-flower',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Mini projeto - Escolha seu plano',
  description:
    'Este projeto exibe opções de planos de assinatura para usuários, permitindo a alternância entre pagamento mensal e anual. O design é responsivo e utiliza TailwindCSS para estilização.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inriaSans.variable} ${indieFlower.variable} pt-12 pb-20 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

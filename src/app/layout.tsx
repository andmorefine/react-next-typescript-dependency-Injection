'use client'

import './globals.css'
import { DependenciesContext } from '@/dependenciesContext'
import { dependencies } from '@/dependencies'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={'flex flex-col items-center justify-center w-100 h-28'}>
        <DependenciesContext.Provider value={dependencies}>
          {children}
        </DependenciesContext.Provider>
      </body>
    </html>
  )
}

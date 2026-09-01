import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Anteneh Creator AI', description: 'Private browser-first AI video studio' }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }
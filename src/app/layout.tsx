"use client"

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Box, Toolbar } from '@mui/material'
import DrawerAppBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Box sx={{ height: "100vh", display: "flex", flexDirection: 'column' }}>
          <DrawerAppBar />
          <Toolbar />
          <Box sx={{ flexGrow: 1 }}>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  )
}

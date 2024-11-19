'use client'

import { ColorSchemeScript, ThemeProvider as TrioProvider } from "trio-theme"


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TrioProvider
    config={{
      shades: [
        '25',
        '50',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
        '950',
        'dark',
        'light',
      ],
      colorType: 'hex', // Use "rgb" for RGB format
      storage: 'cookie', // Default is "localStorage"
    }}
    >
    {/* <ThemeProvider attribute="data-mode" disableTransitionOnChange> */}
    <ColorSchemeScript 
      storage="cookie" 
      themeModeKey="theme-mode" 
      themeLocalStorageKey="trio-theme" 
      colorType="hex"
      defaultTheme={{"name":"default","mode":"dark","shades":[{"name":"primary","color":"#d08011","shade":{"25":"#FCFBF5","50":"#FCFAF0","100":"#FAF5E3","200":"#F5E6BC","300":"#EDD495","400":"#DEAC50","500":"#d08011","600":"#BD6E0D","700":"#9C5509","800":"#7D3E06","900":"#5E2A04","950":"#3D1801","dark":"#140700","light":"#FCFBF5"}},{"name":"secondary","color":"#c2c2c2","shade":{"25":"#FCFCFC","50":"#FCFCFC","100":"#FAFAFA","200":"#F0F0F0","300":"#E6E6E6","400":"#D4D4D4","500":"#c2c2c2","600":"#AD9C9C","700":"#916D6D","800":"#754646","900":"#572727","950":"#381010","dark":"#140202","light":"#FCFCFC"}}]}}
    />
      {children}
    {/* </ThemeProvider> */}
    </TrioProvider>
  )
}

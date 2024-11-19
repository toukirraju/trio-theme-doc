'use client'

import { Fragment, useEffect, useState } from 'react'
import { Highlight } from 'prism-react-renderer'
import clsx from 'clsx'
import CheckIcon from './icons/CheckIcon'
import CopyIcon from './icons/CopyIcon'

export function Fence({
  children,
  language,
}: {
  children: string
  language: string
}) {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(children)
    setIsCopied(true)
  }

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isCopied])

  return (
    <Highlight
      code={children.trimEnd()}
      language={language}
      theme={{ plain: {}, styles: [] }}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={clsx(className, 'relative')} style={style}>
          <code>
            {tokens.map((line, lineIndex) => (
              <Fragment key={lineIndex}>
                {line
                  .filter((token) => !token.empty)
                  .map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                {'\n'}
              </Fragment>
            ))}
          </code>
          <span className="absolute top-2 right-2 p-1 hover:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-200 cursor-pointer rounded-md" onClick={handleCopy}>
            {
              isCopied ? <CheckIcon /> : <CopyIcon />
            }
          </span>
        </pre>
      )}
    </Highlight>
  )
}


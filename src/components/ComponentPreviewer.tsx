import clsx from 'clsx';
import { Highlight } from 'prism-react-renderer';
import React, { Fragment, useEffect, useState } from 'react'
import CheckIcon from './icons/CheckIcon';
import CopyIcon from './icons/CopyIcon';
import { cn } from 'trio-theme';


const ComponentPreviewer = ({
    tabs,
    code,
    codeLanguage,
    children,
    classess
}:{
    tabs: { name: 'Code'|'Preview' }[];
    code: string;
    codeLanguage: string;
    children?: React.ReactNode;
    classess?:{
      childrenContainer?: string;
    }
}) => {

    const [activeTab, setActiveTab] = useState(tabs[0])

    const handleTabChange = (tab: { name: 'Code'|'Preview'; }) => {
        setActiveTab(tab)
    }


    return(
    <div className="relative rounded-2xl bg-primary-light shadow-md dark:bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur-xl">
        <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
        <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
        <div className="pl-4 pt-4">
          <TrafficLightsIcon className="h-2.5 w-auto stroke-slate-500/30" />
          <div className="mt-4 flex space-x-2 text-xs">
            {tabs.map((tab) => (
              <div
                key={tab.name}
                className={clsx(
                  'flex h-6 rounded-full',
                  activeTab.name === tab.name
                    ? 'bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300'
                    : 'text-slate-500',
                )}
                onClick={() => handleTabChange(tab)}
              >
                <div
                  className={clsx(
                    'flex items-center rounded-full px-2.5',
                    'hover:bg-gradient-to-r hover:from-sky-400/30 hover:via-sky-400 hover:to-sky-400/30  hover:font-medium hover:text-white  hover:cursor-pointer transition-all duration-200',
                    activeTab.name === tab.name && 'dark:bg-slate-800 text-white',
                  )}
                >
                  {tab.name}
                </div>
              </div>
            ))}
          </div>
          <div className={cn(
            "flex items-start px-1 text-sm",
            classess && classess?.childrenContainer
          )}>
            {
                activeTab.name === 'Code' ? <CodeViewer
                code={code}
                codeLanguage={codeLanguage}
                /> : children
            }
          </div>
        </div>
</div>
)
}

const CodeViewer=({
    code,
    codeLanguage
}:{
    code: string;
    codeLanguage: string;
})=>{

    const [isCopied, setIsCopied] = useState(false)
    const handleCopy = () => {
      navigator.clipboard.writeText(code)
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


    return(
        <>
            <span className="absolute top-6 right-2 p-1 hover:bg-slate-800/20 dark:hover:bg-slate-700 transition-all duration-200 cursor-pointer rounded-md" onClick={handleCopy}>
                {
                    isCopied ? <CheckIcon /> : <CopyIcon />
                }
             </span>
            <div
                aria-hidden="true"
                className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600 mt-9 text-sm"
                >
               
              {Array.from({
                length: code.split('\n').length,
              }).map((_, index) => (
                <Fragment key={index}>
                  {(index + 1).toString().padStart(2, '0')}
                  <br />
                </Fragment>
              ))}
            </div>
            <Highlight
              code={code}
              language={codeLanguage}
              theme={{ plain: {
                color: '#999898',
                backgroundColor: '#282A36'
              }, styles: [] }}
            >
              {({
                className,
                style,
                tokens,
                getLineProps,
                getTokenProps,
              }) => (
                <pre
                  className={clsx(
                    className,
                    'flex overflow-x-auto pb-6 hide-scrollbar !bg-transparent !border-none !shadow-none !ring-0 !text-sm',
                  )}
                  style={style}
                >
                  <code className="px-4 ">
                    {tokens.map((line, lineIndex) => (
                      <div key={lineIndex} {...getLineProps({ line })}>
                        {line.map((token, tokenIndex) => (
                          <span
                            key={tokenIndex}
                            {...getTokenProps({ token })}
                          />
                        ))}
                      </div>
                    ))}
                  </code>
                  
                </pre>
              )}
            </Highlight>
        </>
    )
}


function TrafficLightsIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
        <circle cx="5" cy="5" r="4.5" fill='#fa1e1e' />
        <circle cx="21" cy="5" r="4.5" fill='#fab51e' />
        <circle cx="37" cy="5" r="4.5" fill='#6aaf04' />
      </svg>
    )
  }
  

export default ComponentPreviewer

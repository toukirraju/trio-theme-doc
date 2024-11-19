import React from 'react'
import { DocsHeader } from './DocsHeader'
import { Prose } from './Prose'
import { PrevNextLinks } from './PrevNextLinks'
import { TableOfContents } from './TableOfContents'

const PageLayout = ({children, title}:{
    title: string,
    children: React.ReactNode
}) => {
  return (
    <>
    <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
      <article>
        <DocsHeader title={title} />
        <Prose>{children}</Prose>
      </article>
      <PrevNextLinks />
    </div>
    {/* <TableOfContents tableOfContents={[]} /> */}
  </>
  )
}

export default PageLayout

'use client'
import React from 'react'
import PageLayout from '@/components/PageLayout'
import { ThemePreset } from 'trio-theme'
import ComponentPreviewer from '@/components/ComponentPreviewer'


const code = `import { ThemePreset } from 'trio-theme';

function Demo() {
  return <ThemePreset />;
}`



const Preset = () => {
  return (
    <PageLayout title={"Theme Mode"}>
        <ComponentPreviewer
            tabs={[
                { name: 'Preview' },
                { name: 'Code' },
            ]}
            code={code}
            codeLanguage='jsx'
            classess={{
              childrenContainer:"pb-5 mr-4"
            }}
        >
            <ThemePreset />
        </ComponentPreviewer>

        {/* write some content here */}
        <p>
        The <code>ThemePreset</code> component in <code>trio-theme</code> allows users to select pre-defined colors for the primary or secondary theme palettes using a simple dropdown menu. 
        This component is designed for quick and effortless theme customization, enabling users to switch between pre-defined color schemes without needing a color picker.
        </p>
        <h3>
        Key Features
        </h3>
        <ul>
            <li><b>Pre-Defined Color Options:</b> Offers a curated list of pre-defined colors for users to choose from.</li>
            <li><b>Dropdown Selection: </b> Users can easily select the color type (primary or secondary) and apply a color from the available options.</li>
            <li><b>Dynamic Theme Updates:</b> Automatically updates the theme with the selected colors and generates corresponding shades.</li>
        </ul>
    </PageLayout>
  )
}

export default Preset


'use client'
import React from 'react'
import PageLayout from '@/components/PageLayout'
import { ThemePalette} from 'trio-theme'
import ComponentPreviewer from '@/components/ComponentPreviewer'


const code = `import { ThemePalette } from 'trio-theme';

function Demo() {
  return <ThemePalette />;
}`



const Themepalette = () => {
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
            <ThemePalette />
        </ComponentPreviewer>

        {/* write some content here */}
        <p>
        The <code>ThemePalette</code> component in <code>trio-theme</code> allows users to dynamically pick and customize the <code><b>primary</b></code> and <code>s<b>secondary</b></code> colors of the theme using a color picker. 
        This provides a highly interactive theming experience where users can tailor the application’s look and feel to their preferences. 
        Once the colors are selected, they are saved to storage, ensuring the customizations persist across sessions.
        </p>
        <h3>
        Key Features
        </h3>
        <ul>
            <li><b>Primary and Secondary Color Selection:</b> Users can choose distinct colors for the primary and secondary theme palettes.</li>
            <li><b>Dynamic Theme Updates:</b> Instantly generates color shades from the selected colors and applies them across the application.</li>
            <li><b>Persistent Storage:</b> Saves the updated theme to either localStorage or cookies (based on the ThemeProvider configuration), ensuring that custom themes are retained across reloads and sessions.</li>
            <li><b>Interactive and User-Friendly:</b> Includes a color picker and a save button for intuitive customization.</li>
        </ul>
    </PageLayout>
  )
}

export default Themepalette


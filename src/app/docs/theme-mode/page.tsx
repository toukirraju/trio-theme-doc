'use client'
import React from 'react'
import PageLayout from '@/components/PageLayout'
import { ThemeMode } from 'trio-theme'
import ComponentPreviewer from '@/components/ComponentPreviewer'


const code = `import { ThemeMode } from 'trio-theme';

function ThemeToggle() {
  return <ThemeMode />;
}`



const ModeSwitcher = () => {
  return (
    <PageLayout title={"Theme Mode"}>
        <ComponentPreviewer
            tabs={[
                { name: 'Preview' },
                { name: 'Code' },
            ]}
            code={code}
            codeLanguage='jsx'
        >
            <ThemeMode/>
        </ComponentPreviewer>

        {/* write some content here */}
        <p>
        The <code>ThemeMode</code> component in <code>trio-theme</code> enables users to easily switch between light, dark, and system themes. With this component, you can provide your users with control over the theme appearance, making it adaptable to user preferences or system settings.
        </p>
        <h3>
        Key Features
        </h3>
        <ul>
            <li>Light Mode: Applies the light theme colors defined in your theme configuration.</li>
            <li>Dark Mode: Switches to dark theme colors, providing a more comfortable viewing experience in low-light environments.</li>
            <li>System Mode: Automatically matches the user’s system preference, switching between light and dark based on the device's settings.</li>
        </ul>
    </PageLayout>
  )
}

export default ModeSwitcher


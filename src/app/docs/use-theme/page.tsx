'use client'
import React from 'react'
import PageLayout from '@/components/PageLayout'
import ComponentPreviewer from '@/components/ComponentPreviewer'


const code = `import { useTheme } from 'trio-theme';

function Demo() {
 const { config, theme, setTheme, toggleDarkMode } = useTheme();
  return (
    <div>
      // jsx code here..
    </div>
}`



const Preset = () => {
  return (
    <PageLayout title={"useTheme"}>
        <ComponentPreviewer
            tabs={[
                // { name: 'Preview' },
                { name: 'Code' },
            ]}
            code={code}
            codeLanguage='jsx'
            classess={{
              childrenContainer:"pb-5 mr-4"
            }}
        />

        {/* write some content here */}
        <p>
        The <code>useTheme</code> hook is a powerful utility provided by <code>trio-theme</code> for accessing and managing your application's theming system. 
        It provides an easy-to-use interface for working with theme configurations, dynamic theme updates, and toggling between light, dark, and system modes.</p>
        <h3>
            Key Features
        </h3>
        <ul>
            <li><b>Access Theme Configuration:</b> Retrieve the default theme configuration.</li>
            <li><b>Current Theme State: </b>Access the current theme object, including its name, mode, and color shades.</li>
            <li><b>Update Theme:</b>Dynamically set a new theme with the <code>setTheme</code> function.</li>
            <li><b>Toggle Theme Mode:</b>Switch between light, dark, or system modes using <code>toggleDarkMode</code>.</li>
        </ul>
        <hr/>
        <h3>
            Return Values
        </h3>
        <p>The <code>useTheme</code> hook returns an object with the following properties:</p>
        <ol>
            <li>
                <p><b>config:</b></p>
                <b>Type: PaletteConfig</b>
                <p>The default theme configuration passed to the <code>ThemeProvider</code>.</p>
                <b>Example:</b>
                <ComponentPreviewer
                    tabs={[
                        { name: 'Code' },
                    ]}
                    code={
`{
  shades: ["25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
  colorType: "hex", // or "rgb"
  storage: "localStorage" // or "cookie"
}`
                    }
                    codeLanguage='json'
                    classess={{
                      childrenContainer:"pb-5 mr-4"
                    }}
                />
            </li>
            <li>
                <p><b>theme:</b></p>
                <b>Type: ThemeObject</b>
                <p>The current theme object, including the theme name, mode, and shades for all colors.</p>
                <b>Example:</b>
                <ComponentPreviewer
                    tabs={[
                        { name: 'Code' },
                    ]}
                    code={
`{
    name: "default",
    mode: "light", // or "dark", "system"
    shades: [
        {
            name: "primary",
            color: "#0fffff",
            shade: {
                "25": "#F7FFFF",
                "50": "#F2FFFF",
                ...
                "dark": "#01314A"
            }
        },
        {
            name: "secondary",
            color: "#0f6fff",
            shade: {
                "25": "#f7fffe",
                "50": "#f2fffe",
                ...
                "dark": "#010c4a"
            }
        }
    ]
}
`
                    }
                    codeLanguage='json'
                    classess={{
                      childrenContainer:"pb-5 mr-4"
                    }}
                />
            </li>
            <li>
                <p><b>setTheme:</b></p>
                <b>Type: (theme: ThemeObject) ={'>'} void</b>
                <p>A function to set a new theme. The theme object must follow the same structure as the current theme.</p>
                <b>Example:</b>
                <ComponentPreviewer
                    tabs={[
                        { name: 'Code' },
                    ]}
                    code={
`setTheme({
    name: "custom-theme",
    mode: "dark",
    shades: [
        {
            name: "primary",
            color: "#ff5733",
            shade: {
                "25": "#fff5f2",
                "50": "#ffeae6",
                ...
                "dark": "#330f0f"
            }
        }
    ]
});
`
                    }
                    codeLanguage='js'
                    classess={{
                      childrenContainer:"pb-5 mr-4"
                    }}
                />
            </li>
            <li>
                <p><b>toggleDarkMode:</b></p>
                <b>Type: (mode: "dark" | "light" | "system") ={'>'} void</b>
                <p>A function to toggle between light, dark, and system modes.</p>
                <b>Example:</b>
                <ComponentPreviewer
                    tabs={[
                        { name: 'Code' },
                    ]}
                    code={
`toggleDarkMode("dark"); // Switch to dark mode
toggleDarkMode("light"); // Switch to light mode
toggleDarkMode("system"); // Use system preference
`
                    }
                    codeLanguage='js'
                    classess={{
                      childrenContainer:"pb-5 mr-4"
                    }}
                />
            </li>
        </ol>
        <hr/>
        <h3>
            Example Usage
        </h3>
        <ComponentPreviewer
                    tabs={[
                        { name: 'Code' },
                    ]}
                    code={
`import { useTheme } from 'trio-theme';

function ThemeSettings() {
  const { config, theme, setTheme, toggleDarkMode } = useTheme();

  return (
    <div>
      {/* Display Current Theme Name */}
      <h2>Current Theme: {theme.name}</h2>

      {/* Toggle Between Light, Dark, and System Modes */}
      <button onClick={() => toggleDarkMode("light")}>Light Mode</button>
      <button onClick={() => toggleDarkMode("dark")}>Dark Mode</button>
      <button onClick={() => toggleDarkMode("system")}>System Mode</button>

      {/* Set a New Theme */}
      <button
        onClick={() =>
          setTheme({
            name: "new-theme",
            mode: "dark",
            shades: [
                {
                    name: "primary",
                    color: "#0fffff",
                    shade: {
                        "25": "#F7FFFF",
                        "50": "#F2FFFF",
                        "100": "#E8FFFF",
                        "200": "#C4FFFF",
                        "300": "#9EFFFF",
                        "400": "#57FFFF",
                        "500": "#0fffff",
                        "600": "#0BDBE6",
                        "700": "#08A7BF",
                        "800": "#067C99",
                        "900": "#035373",
                        "950": "#01314A",
                        "light": "#F7FFFF",
                        "dark": "#01314A"
                    }
                },
                {
                    name: "secondary",
                    color: "#0f6fff",
                    shade: {
                        "25": "#f7fffe",
                        "50": "#f2fffe",
                        "100": "#e8f7ff",
                        "200": "#c4e4ff",
                        "300": "#9eb5ff",
                        "400": "#578cff",
                        "500": "#0f6fff",
                        "600": "#0b2ce6",
                        "700": "#0839bf",
                        "800": "#063599",
                        "900": "#035373",
                        "950": "#011b4a",
                        "light": "#f7fdff",
                        "dark": "#010c4a"
                    },
                },
            ]
          })
        }
      >
        Set Custom Theme
      </button>
    </div>
  );
}
`
                    }
                    codeLanguage='jsx'
                    classess={{
                      childrenContainer:"pb-5 mr-4"
                    }}
                />

                <hr/>
                <p>The useTheme hook is an essential tool for managing and interacting with your application's theme. Its simple API and flexibility make it ideal for building 
                  highly customizable and user-friendly UI themes. Whether you want to switch modes, define custom palettes, or update themes dynamically, useTheme has you covered!</p>
    </PageLayout>
  )
}

export default Preset


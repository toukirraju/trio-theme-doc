'use client'
import React from 'react'
import PageLayout from '@/components/PageLayout'
import { PaletteGenerator } from 'trio-theme'
import ComponentPreviewer from '@/components/ComponentPreviewer'
import { Callout } from '@/components/Callout'


const code = `import { PaletteGenerator } from 'trio-theme';

function Demo() {
  return(
          <PaletteGenerator 
            color='#360a6b' 
            getPalette={(shade)=>console.log(shade)} 
            config={{
              shades:['50','100','200','300','400','500','600','700','800','900']
            }}  
            shadeName='ShadeName'
          />
  )
}`



const ShadeGenerator = () => {
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
              childrenContainer:"py-5"
            }}
        >
            <PaletteGenerator 
              color='#360a6b' 
              getPalette={(shade)=>console.log(shade)} 
              config={{
                colorType:'hex',
                shades:['50','100','200','300','400','500','600','700','800','900',]
              }}  
              shadeName='ShadeName'
             />
        </ComponentPreviewer>

        {/* write some content here */}
        <p>
        The <code>PaletteGenerator</code> component in <code>trio-theme</code> is designed to dynamically generate a range of color shades based on a provided base color. 
        This component is highly useful for creating custom theme palettes on the fly, allowing developers to define shades programmatically.</p>
        <h3>
        Key Features
        </h3>
        <ul>
            <li><b>Base Color Input:</b> Takes a single color (in HEX or RGB format) as the base and generates multiple shades.</li>
            <li><b>Customizable Shades </b>  Allows configuration of which shades to generate (e.g., 50, 100, 200, etc.).</li>
            <li><b>Callback for Shades:</b>  Provides the generated shades through a callback function for further use.</li>
            <li><b>Dynamic Naming:</b> Allows you to assign a name to the generated palette for easy identification.</li>
        </ul>
        <h3>
        Props
        </h3>
        <ul>
            <li>
                <p><b>shadeName:</b></p>
                <b>Type: string</b>
                <p>A string value to name the generated palette.</p>
                <b>Example</b>
                <p>
                <code>shadeName='CustomShade'</code>
                </p>
            </li>
            <li>
                <p><b>color:</b></p>
                <b>Type: string</b>
                <p>The base color for generating shades. It can be in HEX, RGB format.</p>
                <b>Example</b>
                <p>hex: {` `}
                <code>color='#360a6b'</code>
                </p>
                <p>rgb: {` `}
                <code>color='54, 10, 107'</code>
                </p>
            </li>
            <li>
                <p><b>config:</b></p> 
                <b>Type: object</b>
                <p>Configuration options for the palette generation.</p>
                <ul>
                  <li>
                    <p>colorType: <code>string</code> - Specifies the type of color input (hex or rgb).</p>
                    <p>Example: <code>colorType:'hex'</code></p>
                  </li>
                  <li>
                    <p>shades: <code>Array&lt;string&gt;</code> - Specifies which shade levels to generate.</p>
                    <p>Example: <code>shades:['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']</code></p>
                  </li>
               </ul>
               <Callout type="warning" title="Note">
                <ul>
                  <li><p>Ensure that the <code>shades</code> array contains valid shade levels (25 to 950 and light,dark)  to generate the corresponding shades.</p></li>
                  <li><p>If use <code>hex</code> colorType then <code>color</code> must be hex code like- '#360a6b'</p></li>
                  <li><p>If use <code>rgb</code> colorType then <code>color</code> must be rgb code like- '54, 10, 107'</p></li>
                </ul>
              </Callout>
              </li>
              <li>
                <p><b>getPalette:</b></p>
                <b>Type: (shade: object) ={'>'} void</b>
                <p>A callback function that returns the generated shades as an object.</p>
                <b>Example</b>
               <pre>
{`{
"name": "CustomShade",
"colors": {
  "50": "#F2F5F5",
  "100": "#E8EBEB",
  "200": "#C6CCCC",
  "300": "#A5ADAD",
  "400": "#656E6E",
  "500": "#2b3131",
  "600": "#222B2B",
  "700": "#182422",
  "800": "#0F1C19",
  "900": "#091713"
  }
}`}
               </pre>
              </li>
           
        </ul>

        <hr />
        <p>The PaletteGenerator simplifies the process of creating dynamic color themes, making it an essential tool for applications that prioritize user customization and design flexibility.</p>
        
    </PageLayout>
  )
}

export default ShadeGenerator


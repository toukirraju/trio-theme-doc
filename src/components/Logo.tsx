
import { ReactSVG } from "react-svg";


export function Logomark() {
  return (
    <div>
      <ReactSVG
        src={'/Trio-logo.svg'}
        beforeInjection={(svg) => {
          const bgElement = svg.querySelector('[fill="#fd7018"]');
          if (bgElement) {
            bgElement.setAttribute('fill', 'var(--primary-500)');
          }

          const gElements = svg.querySelectorAll('g[fill="#ffffff"]');
          gElements.forEach((gElement) => {
            gElement.setAttribute('fill', 'var(--secondary-500)');
          });

          svg.setAttribute('style', `width: 38px; height: 38px;`);
        }}
      />
    </div>
  )
}

export function Logo() {
  return (
    <div className="flex items-center gap-2 text-primary-dark dark:text-primary-light ">
      <Logomark />
      <span className="bg-gradient-to-r from-primary-400 via-secondary-200 to-primary-300 bg-clip-text font-display text-md tracking-tight text-transparent uppercase">Trio-theme</span>
   </div>
  )
}





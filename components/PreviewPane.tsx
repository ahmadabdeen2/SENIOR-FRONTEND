/* eslint-disable tailwindcss/classnames-order */
import React, { useEffect, useRef } from 'react';

interface PreviewPaneProps {
  html: string;
  css: string;
  js: string;
}

const PreviewPane: React.FC<PreviewPaneProps> = ({html, css, js}) => {
  const iframe = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const doc = iframe.current?.contentWindow?.document;
    if (!doc) return;
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
          setTimeout(() => {
            ${js}
          }, 0);
          </script>
        </body>
      </html>
    `);
    doc.close();
  }, [html, css, js]);

  return <iframe className="w-full h-[100vh] mt-4 rounded-md border-2" ref={iframe} />;
};

export default PreviewPane;

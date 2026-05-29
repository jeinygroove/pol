'use client';

import { useEffect, useRef } from 'react';

const SCRIPT_SRC = 'https://widget-static.eversports.io/loader.js';

interface Props {
  widgetId: string;
}

export default function EversportsWidget({ widgetId }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.type = 'module';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div ref={containerRef} data-eversports-widget-id={widgetId} />
  );
}

declare module "*.svg" {
  import { ReactComponent as ReactSVG } from 'react';
  const content: ReactSVG;
  export default content;
}
  
declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare module 'react-image-magnify' {
    import { Component } from 'react';
  
    interface ReactImageMagnifyProps {
      smallImage: {
        alt: string;
        isFluidWidth: boolean;
        src: string;
        width?: number;
        height?: number;
        overlay:string
      };
      largeImage: {
        src: string;
        width: number;
        height: number;
        backgroundColor: string;
        overlay:string
      };
      lensStyle?: object;
      enlargedImageContainerDimensions?: {
        width?: string;
        height?: string;
      };
      isHintEnabled?: boolean;
      shouldHideHintAfterFirstActivation?: boolean;
    }
  
    class ReactImageMagnify extends Component<ReactImageMagnifyProps> {}
  
    export default ReactImageMagnify;
  }
  
declare module "react-full-page" {
  type ControlComponentsProps = {
    getCurrentSlideIndex: () => number;
    onNext: () => void;
    onPrev: () => void;
    scrollToSlide: (n: number) => void;
    slidesCount: number;
    children: React.ReactNode;
  };

  type FullPageProps = {
    initialSlide?: number;
    duration?: number;
    controls?: boolean | React.FC<ControlComponentsProps>;
    controlProps?: any;
    beforeChange?: () => void;
    afterChange?: () => void;
    scrollMode?: "full-page" | "normal";
    children: React.ReactNode;
  };

  type SlideProps = {
    children: React.ReactNode;
    className?: string;
    style?: {
      display: string;
      flexDirection: string;
      justifyContent: string;
      maxWidth: string;
      margin: string;
    };
  };

  export const FullPage: React.FC<FullPageProps>;

  export const Slide: React.FC<SlideProps>;
}

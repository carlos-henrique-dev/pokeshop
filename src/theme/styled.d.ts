// import original module declaration
import "styled-components";

// and extend it
declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      main: string;
      secondary: string;
      firstVariant: string;
      secondVariant: string;
      thirdVariant: string;
    };
  }
}

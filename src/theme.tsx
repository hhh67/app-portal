import {
  PaletteColor,
  PaletteColorOptions,
  Theme,
  createTheme,
} from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    qiitaReader: PaletteColor;
    gymlog: PaletteColor;
    moonPfase: PaletteColor;
    picgle: PaletteColor;
  }
  interface PaletteOptions {
    qiitaReader: PaletteColorOptions;
    gymlog: PaletteColorOptions;
    moonPfase: PaletteColorOptions;
    picgle: PaletteColorOptions;
  }

  interface TypeBackground {
    qiitaReader: string;
    gymlog: string;
    moonPfase: string;
    picgle: string;
    instagram: string;
    github: string;
    qiita: string;
    x: string;
    mail: string;
  }
}

const theme: Theme = createTheme({
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontSize: 14,
  },
  components: {
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
        square: true,
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: 'none',
          '&::before': {
            display: 'none',
          },
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          borderRadius: 8,
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: 'none',
          shadow: 'none',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 8,
          ':last-child': {
            paddingBottom: 8,
          },
        },
      },
    },
  },
  palette: {
    mode: 'light',
    qiitaReader: {
      main: '#54C600',
    },
    gymlog: {
      main: '#0F479A',
    },
    moonPfase: {
      main: '#56008B',
    },
    picgle: {
      main: 'linear-gradient(45deg, #A460E8, #DF428D)',
    },
    primary: {
      main: '#3500c7',
      light: '#6a00ff',
    },
    text: {
      primary: '#1F1B29',
    },
    background: {
      default: '#e8f7ff',
      paper: '#fff',
      qiitaReader: '#d9ffd1',
      gymlog: '#c7e1ff',
      moonPfase: '#c7acff',
      picgle: '#fdbcff',
      instagram: 'linear-gradient(to top left, #7200b9, #b7199a, #ffc400)',
      github:
        'linear-gradient(40deg, #e8cece, #e6e4ce, #d0e6e9, #ffffff, #d3d9ea, #cfe6ea, #ddd2f0, #e1cae6, #e9e7d3, #d3e2eb)',
      qiita: 'linear-gradient(to top left, #55c500, #55c500)',
      x: 'black',
      mail: 'linear-gradient(to top, #1100ff, #abf2ff)',
    },
  },
});

export default theme;

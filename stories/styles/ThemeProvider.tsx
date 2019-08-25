// Default theme. A single theme is added and exported as Theme. If in the future the To-do list needs a different design, a new Theme can be added besides defaultTheme.
const defaultTheme = {
  fontFamily: '"Open Sans", Calibri, Helvetica, Tahoma, sans-serif',

  fontSizes: {
    paragraph: '12px'
  },

  identityColors: {
    yellow: 'yellow',
    white: 'white',
    red: 'red',
    border: '#dddddd'
  },

  gutters: {
    tiny: '5px',
    small: '10px',
    medium: '15px',
    large: '20px',
    extraLarge: '30px'
  }
}

export { defaultTheme as theme }

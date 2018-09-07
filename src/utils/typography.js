import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  'h1': {
    fontFamily: Wordpress2016.headerFontFamily.join(', '),
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'ul, ol': {
    marginLeft: '1.75rem',
  },
})

delete Wordpress2016.googleFonts

Wordpress2016.baseFontSize = '18px'
Wordpress2016.bodyWeight = 300
Wordpress2016.baseLineHeight = 2

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography

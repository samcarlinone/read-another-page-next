import React from 'react'
import { createUseStyles } from 'react-jss'
import Link from 'next/link'

const useStyles = createUseStyles(theme => ({
  scrollContainer: {
    width: '100vw',
    overflowX: 'auto',
    boxSizing: 'border-box',
  },
  container: {
    display: 'flex',
    alignItems: 'stretch',
    padding: [0, 12],
    width: 'fit-content',
  },
  tile: {
    cursor: 'pointer',
    boxShadow: theme.shadows[2],
    backgroundColor: 'white',
    border: `1px solid ${theme.colors.accent}`,
    borderRadius: 4,

    margin: 4,
    padding: 8,

    fontFamily: theme.fonts.raleway,
    fontSize: '1.25rem',
    textDecoration: 'none',
    
    display: 'flex',
    alignItems: 'center',
  },
  tileLabel: {
    marginLeft: 8,
    maxWidth: 'min-content',
  },
}))

const ActionTiles = ({children}) => {
  const classes = useStyles()

  const tiles = [
    {icon: '🧭', label: 'Browse Genres', link: '/genres'},
    {icon: '🔍', label: 'Search', link: '/search'},
    {icon: '📣', label: 'Give Feedback', link: 'https://forms.gle/hXPxqNvdv8fUhWAw7'},
    {icon: '📮', label: 'Suggest a Book', link: 'https://forms.gle/MzKaX4SYt5hjBdxL8'},
    {icon: '📖', label: 'About Us', link: '/about'},
  ]

  return (
    <div className={classes.scrollContainer}>
      <div className={classes.container}>
        {tiles.map(tile => (
          <Link href={tile.link}>
            <a
              key={tile.label}
              className={classes.tile}
              tabIndex={0}
              target={tile.link.includes('http') ? '_blank' : ''}
            >
              {tile.icon}
              <div className={classes.tileLabel}>{tile.label}</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ActionTiles

import React from 'react'
import { createUseStyles } from 'react-jss'
import { ComposeWithTheme, AgeRating } from '../components/shared'
import { BookRow, AppBar, ActionTiles } from '../components/home'
import { books, genres, ageRatings, constants } from '../components/data'
import Head from 'next/head'
import Link from 'next/link'
import Crosshair from '../components/icons/Crosshair'
import Plus from '../components/icons/Plus'

const useStyles = createUseStyles((theme) => ({
  card: {
    border: theme.border,
    borderRadius: 4,

    boxShadow: theme.shadows[2],

    backgroundColor: '#FFF',
    padding: 16,
    margin: 8,

    fontFamily: theme.fonts.raleway,

    maxWidth: '40rem',
  },
  title: {
    fontFamily: theme.fonts.patuaOne,
    fontSize: '1.5rem',
  },
  icon: {
    width: '1rem',
    height: '1rem',
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>About | Read Another Page</title>
      </Head>
      <AppBar>
        <Link href="/">Home</Link>
      </AppBar>
      <div className={classes.card}>
        <h1 className={classes.title}>About</h1>
        <p>Hello! Welcome to Read Another Page, the best-of booklist.</p>
        <p>Every book on this site is one that I really enjoyed and would recommend. As time goes on I'll try to get more information in about what made each book good. But for now you'll probably have to reference other sources.</p>
        <p>To help you pick from all the options I've added a few pieces of information that you can read more about below.</p>
      </div>
      <div className={classes.card}>
        <h1 className={classes.title}>Age Rating</h1>
        <p>The age ratings looks like this:</p>
        <p>
          <AgeRating rating={{age: ageRatings.KIDS, aimedAt: true}} />
        </p>
        <p>
          <AgeRating rating={{age: ageRatings.ADULT}} />
        </p>
        <p>
          There are four ages: <b>Early</b>, <b>Kids</b>, <b>Teen</b>, and <b>Adult</b>
        </p>
        <p>Age level is determined by two factors. The levels of questionable content (violence, sexuality, etc.) But also the intended audience of the book. For example, although Brandon Sanderson's fantasy works are generally free of questionable content the average grade schooler would probably not enjoy the significant amounts of character and worldbuilding in those books. Thus they earn a <b>Teen</b> rating.</p>
        <p>
          Note the <Crosshair className={classes.icon} /> and <Plus className={classes.icon} /> icons.
          These represent whether the book is aimed at a specific age or could be appreciated by anyone that age and older.
          A children's book like <i>Magic Treehouse</i> earns a <Crosshair className={classes.icon} /> because it is written specifically for that age range.
          On the other hand, <i>Harry Potter</i> earns a <Plus className={classes.icon} /> because teens and adults can also enjoy those books.
        </p>
        

      </div>
    </>
  )
}

export default ComposeWithTheme(Home)

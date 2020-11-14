import React from 'react'
import { createUseStyles } from 'react-jss'
import { ComposeWithTheme, AgeRating } from '../components/shared'
import { AppBar } from '../components/home'
import { ageRatings } from '../components/data'
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
        <p>Every book on this site is one I've read and recommend.</p>
        <p>In addition to the typical information this site has some custom attributes (detailed below) to help you find what you're looking for.</p>
      </div>
      <div className={classes.card}>
        <h1 className={classes.title}>Age Rating</h1>
        <p>The age ratings looks like this:</p>
        <p>
          <AgeRating rating={{age: ageRatings.KIDS, aimedAt: true}} />
        </p>
        <p>or</p>
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
      <div className={classes.card}>
        <h1 className={classes.title}>Recommendation Level</h1>
        <p>The recommendation level is a score from <b>1</b>-<b>3</b>. This score is a measure of whether it's a book for everyone or just for some readers.</p>
        <p><b>3</b> is a score for books I would recommend to anyone. The simplest score.</p>
        <p><b>2</b> is a score for books that I would generally recommend, but some people might not enjoy. Maybe it's a fantasy story that spends a lot of time describing the world and impatient readers will find it too slow. Maybe it's Science Fiction that spends a lot of time discussing philosophy. You get the idea.</p>
        <p><b>1</b> is a score for books that I recommend only to some readers. Not a bad book, but there will be a decent number of people who might not enjoy it. For example, <i>The Themis Files</i> is a book series written entirely as two person conversations. I loved it, some of my friends couldn't get into it, it gets a 1.</p>
      </div>
    </>
  )
}

export default ComposeWithTheme(Home)

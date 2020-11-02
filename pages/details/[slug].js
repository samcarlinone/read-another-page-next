import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'
import { books } from '../../components/data'
import { BookTitleBlock, AppBar } from '../../components/home'
import { ComposeWithTheme } from '../../components/shared'
import { constants } from '../../components/data'

const useStyles = createUseStyles(theme => ({
  detailsRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',

    minHeight: `calc(100vh - ${theme.appBarHeight}px)`,
  },
  card: {
    border: theme.border,
    borderRadius: 4,

    boxShadow: theme.shadows[2],

    backgroundColor: '#FFF',
    padding: 16,
    margin: 8,

    boxSizing: 'border-box',
    maxWidth: 'calc(100vw - 16px)',
  },
  coverImage: {
    padding: 0,
    '@media (min-width: 800px)': {
      maxWidth: '30vmin',
    },
    '@media (min-width: 1280px)': {
      maxWidth: '40vmin',
    },
    ...theme.imageBackgroundObject,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  description: {
    fontFamily: theme.fonts.raleway,
    fontSize: '1rem',
    maxWidth: '40rem',
    lineHeight: '1.3rem',
  },
  linksTitle: {
    fontFamily: theme.fonts.patuaOne,
    fontSize: '1.5rem',
  },
  link: {
    fontFamily: theme.fonts.raleway,
    fontSize: '1.25rem',

    backgroundColor: theme.colors.accent,
    color: '#FFF !important',

    padding: 8,
    paddingRight: 12,
    height: '1.5rem',
    borderRadius: 'calc(1.5rem + 8px)',

    margin: [8, 0],
    display: 'block',

    boxShadow: theme.shadows[2],
  },
  linkIcon: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: 24,
    height: 24,
    borderRadius: '50%',

    color: 'black',
    backgroundColor: '#FFF',

    marginRight: 8,
  },
  goodreads: {
    position: 'relative',
    top: -3,

    fontFamily: theme.fonts.patuaOne,
    fontSize: 22,
    lineHeight: '22px',
  },
}))

export async function getStaticPaths() {
  return {
    paths: books.map(({slug}) => ({ params: { slug }})),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const book = books.find(b => b.slug === params.slug)

  // Pass post data to the page via props
  return { props: { book } }
}

const DetailView = ({ book }) => {
  const classes = useStyles()

  const { title, slug } = book
  
  // const router = useRouter()
  // const { slug } = router.query

  // const book = books.find(b => b.slug === slug)

  const description = book.description 
    ?? `It looks like this book doesn't have a summary yet.
    But never fear, this book is here for a reason.
    If you still aren't convinced, perhaps the summary over on Goodreads could give you enough info to read with confidence.`

  return (
    <>
      <AppBar>
        <Link href="/">Home</Link>
      </AppBar>
      <div className={classes.detailsRoot}>
        <Image
          width={constants.IMAGE_WIDTH}
          height={constants.IMAGE_HEIGHT}
          src={`/covers/${slug}.jpg`}
          alt={`Cover for ${title}`}
          className={classnames(classes.coverImage, classes.card)}
        />
        <div className={classes.contentContainer}>
          <div className={classes.card}>
            <BookTitleBlock book={book} />
          </div>
          <div className={classes.card}>
            <div className={classes.description}>{description}</div>
          </div>
          <div className={classes.card}>
            <div className={classes.linksTitle}>Links</div>
            <a
              href={`https://www.goodreads.com/search?q=${book.isbn}`}
              className={classes.link}
              target="_blank"
            >
              <div className={classes.linkIcon}>
                <div className={classes.goodreads}>g</div>
              </div>
              Goodreads
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComposeWithTheme(DetailView)
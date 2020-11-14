import React, {useState, useCallback} from 'react'
import { createUseStyles } from 'react-jss'
import Head from 'next/head'
import Link from 'next/link'

import { ComposeWithTheme } from '../components/shared'
import { BookCard, AppBar } from '../components/home'
import { books } from '../components/data'

const useStyles = createUseStyles((theme) => ({
  searchContainer: {
    margin: [8, 16],
    position: 'relative',
  },
  label: {
    display: 'block',
    fontFamily: theme.fonts.patuaOne,
    fontSize: '1.5rem',
    marginBottom: 4,
  },
  input: {
    padding: 4,
    width: '100%',
    maxWidth: '480px',
    border: theme.border,
    borderRadius: 4,
    fontFamily: theme.fonts.raleway,
    fontSize: '1rem',
  },
  searchResults: {
    margin: 16,
    gridGap: 16,
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, ${theme.cardWidth}px)`,
  },
  noResults: {
    fontFamily: theme.fonts.patuaOne,
    fontSize: '2rem',
  },
}))

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const Home = () => {
  const classes = useStyles()

  const [search, setSearch] = useState('')
  const handleSearch = useCallback((e) => setSearch(e.target.value))

  const searchRegexes = search
    .split(' ')
    .filter(s => s.length)
    .map(s => new RegExp(escapeRegExp(s), 'i'))

  const matchingBooks = books.filter((book) => (
    searchRegexes.every((re) => Object
      .values(book)
      .map((val) => val.age ?? val)
      .some((val) => re.test(val))
    ))
  );

  return (
    <>
      <Head>
        <title>Search | Read Another Page</title>
      </Head>
      <AppBar>
        <Link href="/">Home</Link>
      </AppBar>
      <div className={classes.searchContainer}>
        <label className={classes.label} htmlFor="search">Search ({matchingBooks.length} results)</label>
        <input
          id="search"
          className={classes.input}
          type="search"
          autoComplete="off"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className={classes.searchResults}>
        {matchingBooks.length
          ? matchingBooks.map((book) => <BookCard key={book.slug} book={book} />)
          : (
            search.length 
            ? <div className={classes.noResults}>No Matches Found</div>
            : books.map((book) => <BookCard key={book.slug} book={book} />)
          )
        }
      </div>
    </>
  )
}

export default ComposeWithTheme(Home)

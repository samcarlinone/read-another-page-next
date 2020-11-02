import React from 'react'
import { createUseStyles } from 'react-jss'
import { ComposeWithTheme } from '../components/shared'
import { BookRow, AppBar, ActionTiles } from '../components/home'
import { books, genres } from '../components/data'
import Head from 'next/head'

const useStyles = createUseStyles({
})

const Home = () => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Read Another Page</title>
      </Head>
      <AppBar>Read Another Page</AppBar>
      <BookRow books={books} name="Top Recommended" />
      <ActionTiles />
      <BookRow books={books.filter(book => book.genre === genres.SCIFI)} name="Science Fiction" />
    </>
  )
}

export default ComposeWithTheme(Home)

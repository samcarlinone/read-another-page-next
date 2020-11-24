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
      {Object.entries(genres).map(([type, name]) => 
        <BookRow books={books.filter(book => book.genre === name)} name={name} key={type} />
      )}
    </>
  )
}

export default ComposeWithTheme(Home)

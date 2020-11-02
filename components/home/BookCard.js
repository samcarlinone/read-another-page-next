import React from 'react'
import Link from 'next/link'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames/bind'
import Image from 'next/image'
import BookTitleBlock from './BookTitleBlock'
import {constants} from '../data'

const useStyles = createUseStyles(theme => ({
  container: {
    cursor: 'pointer',

    borderRadius: 4,
    border: theme.border,
    backgroundColor: 'white',

    width: constants.IMAGE_WIDTH,

    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',

    boxShadow: theme.shadows[2],
  },
  imageContainer: {
    width: constants.IMAGE_WIDTH,
    height: constants.IMAGE_HEIGHT,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    ...theme.imageBackgroundObject,
  },
  image: {
    width: constants.IMAGE_WIDTH,
    height: constants.IMAGE_HEIGHT,
  },
  content: {
    padding: 8,
    paddingBottom: 0,
  },
  recommendationLevel: {
    height: 6,
    padding: 1,
    width: '60%',
    border: theme.border,
    borderBottomWidth: 2,
    marginBottom: -2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  recommendationBar: {
    flex: '1 1 calc(33% - 1px)',
    backgroundColor: '#eee',
    '&:not(:first-child)': {
      borderLeft: '1px solid white',
    },
  },
  recommendationActive: {
    backgroundColor: theme.colors.accent,
  },
}))

const BookCard = ({book}) => {
  const classes = useStyles()

  const { title, slug, recommendationLevel } = book

  return (
    <Link href={`/details/${slug}`}>
      <div className={classes.container} tabIndex={0}>
        <div className={classes.imageContainer}>
          <Image
            width={constants.IMAGE_WIDTH}
            height={constants.IMAGE_HEIGHT}
            src={`/covers/${slug}.jpg`}
            alt={`Cover for ${title}`}
          />
        </div>
        <div className={classes.content}>
          <BookTitleBlock book={book} />
          <div className={classes.recommendationLevel}>
            <div className={classNames(classes.recommendationBar, { [classes.recommendationActive]: recommendationLevel >= 1 })}></div>
            <div className={classNames(classes.recommendationBar, { [classes.recommendationActive]: recommendationLevel >= 2 })}></div>
            <div className={classNames(classes.recommendationBar, { [classes.recommendationActive]: recommendationLevel >= 3 })}></div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BookCard

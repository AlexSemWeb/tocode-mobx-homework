import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

import './Loader.scss'

const Loader = ({ width, height, className, style, ...attrs }) => {
  // classes
  const classes = classNames('Loader', className)

  // styles
  const nextStyle = {
    width,
    height,
    ...style,
  }

  return <div className={classes} style={nextStyle} {...attrs} />
}

Loader.propTypes = {
  width: propTypes.string,
  height: propTypes.string,
  className: propTypes.string,
  style: propTypes.objectOf(propTypes.string),
}

Loader.defaultProps = {
  width: '6em',
  height: '6em',
  className: '',
  style: {},
}

export default Loader

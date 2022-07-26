import React from 'react'
import propTypes from 'prop-types'

import { ReactComponent as UpIcon } from 'assets/img/chevron-up.svg'
import { ReactComponent as DownIcon } from 'assets/img/chevron-down.svg'

import './Badge.scss'

const Badge = ({ tread, scoreUp, scoreDown }) => {
  return (
    <span className='Badge'>
      <UpIcon className='mr-1' onClick={() => scoreUp(tread.id)} />
      {tread.score}
      <DownIcon className='ml-1' onClick={() => scoreDown(tread.id)} />
    </span>
  )
}

Badge.propTypes = {
  tread: propTypes.object,
  upScore: propTypes.func,
  downScore: propTypes.func,
}

export default Badge

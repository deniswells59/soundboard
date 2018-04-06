import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css';
import './grid.css';

const TemplateWrapper = ({ children }) => (
  <div
    className="container"
  >
    <Helmet
      title="The Pine Box Soundboard"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

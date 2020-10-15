import React from 'react'
import error404 from '../../assets/images/error-404.png'

const PageNotFound = () => {
  return (
      <div className="container-fluid mt-4">
        <div className="container text-center">
          <div className="page-not-found">
            <img src={error404} />
          </div>
        </div>
      </div>
  )
}
export default PageNotFound

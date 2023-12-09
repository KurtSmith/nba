import React from 'react'

const Nav = () => {
  return (
    <nav className="nav nav-pills nav-fill">
    <a className="nav-link active" aria-current="page" href="/">Active</a>
    <a className="nav-link" href="/Player">Much longer nav link</a>
    <a className="nav-link" href="/Teams">Link</a>
    <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
    </nav>
  )
}

export default Nav
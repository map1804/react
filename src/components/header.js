import React, {Component} from 'react';

class Header extends Component {
  render(){
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a href="/some/valid/uri" className="navbar-brand" >State</a>
            {/* <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a href="/some/valid/uri" className="nav-link" >Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="/some/valid/uri" className="nav-link">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="/some/valid/uri" className="nav-link dropdown-toggle"  id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a href="/some/valid/uri" className="dropdown-item" >Action 1</a>
                            <a href="/some/valid/uri" className="dropdown-item" >Action 2</a>
                        </div>
                    </li>
                </ul>
            </div> */}
        </nav>
      
    );
  }
}
export default Header;

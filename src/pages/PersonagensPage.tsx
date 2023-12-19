import foto from '/A.o.jpg';
const PersonagensPage = () => {
    return (
      <>
        <div className="container">

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <nav aria-label="..." >
                <ul id="pagination" className="pagination pagination-md" style={{flexWrap: 'wrap'}}>
                    <li className="page-item"><a className="page-link" href="#A">A</a></li>
                    <li className="page-item"><a className="page-link" href="#B">B</a></li>
                    <li className="page-item"><a className="page-link" href="#C">C</a></li>
                    <li className="page-item"><a className="page-link" href="#D">D</a></li>
                    <li className="page-item"><a className="page-link" href="#E">E</a></li>
                    <li className="page-item"><a className="page-link" href="#F">F</a></li>
                    <li className="page-item"><a className="page-link" href="#G">G</a></li>
                    <li className="page-item"><a className="page-link" href="#H">H</a></li>
                    <li className="page-item"><a className="page-link" href="#I">I</a></li>
                    <li className="page-item"><a className="page-link" href="#J">J</a></li>
                    <li className="page-item"><a className="page-link" href="#K">K</a></li>
                    <li className="page-item"><a className="page-link" href="#L">L</a></li>
                    <li className="page-item"><a className="page-link" href="#M">M</a></li>
                    <li className="page-item"><a className="page-link" href="#N">N</a></li>
                    <li className="page-item"><a className="page-link" href="#O">O</a></li>
                    <li className="page-item"><a className="page-link" href="#P">P</a></li>
                    <li className="page-item"><a className="page-link" href="#Q">Q</a></li>
                    <li className="page-item"><a className="page-link" href="#R">R</a></li>
                    <li className="page-item"><a className="page-link" href="#S">S</a></li>
                    <li className="page-item"><a className="page-link" href="#T">T</a></li>
                    <li className="page-item"><a className="page-link" href="#U">U</a></li>
                    <li className="page-item"><a className="page-link" href="#V">V</a></li>
                    <li className="page-item"><a className="page-link" href="#W">W</a></li>
                    <li className="page-item"><a className="page-link" href="#X">X</a></li>
                    <li className="page-item"><a className="page-link" href="#Y">Y</a></li>
                    <li className="page-item"><a className="page-link" href="#Z">Z</a></li>

                </ul>
            </nav>

            <div id="A" style={{width: '100%', color: 'white', fontFamily: 'Bree Serif', fontSize: '2.2em'}}>
                <h1 style={{width: '100%', backgroundColor: 'rgba(255, 0, 0, 0.979)', padding: '0px 0px 4px 9px'}}>#A</h1>
                <div className="row" style={{marginLeft: '0px', width: '100%'}}>
                    <div className="col-lg-3 col-md-4 col-sm-6  grid text-left" style={{padding: '0px 5px 0px 5px'}}>
                        <div className="row" style={{marginLeft: '-3px', marginBottom: '10px'}}>
                            <img src={foto} alt="A.o" style={{maxWidth: '40px', maxHeight: '40px'}}/>
                            <h1 style={{color: 'black', fontFamily: 'Merriweather', fontSize: '14px', fontWeight: '600', padding: '4px 0px 0px 9px'}}>A.o.<br/>A・O(アーオー)</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div id="B" style={{width: '100%', color: 'white', fontFamily: 'Bree Serif', fontSize: '2.2em'}}>
                <h1 style={{width: '100%', backgroundColor: 'rgba(255, 0, 0, 0.979)', padding: '0px 0px 4px 9px'}}>#B</h1>
                <div className="row" style={{marginLeft: '0px', width: '100%'}}>
                    <div className="col-lg-3 col-md-4 col-sm-6  grid text-left" style={{padding: '0px 5px 0px 5px'}}>
                        <div className="row" style={{marginLeft: '-3px', marginBottom: '10px'}}>
                            <img src={foto} alt="A.o" style={{maxWidth: '40px', maxHeight: '40px'}}/>
                            <h1 style={{color: 'black', fontFamily: 'Merriweather', fontSize: '14px', fontWeight: '600', padding: '4px 0px 0px 9px'}}>A.o.<br/>A・O(アーオー)</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div id="C" style={{width: '100%', color: 'white', fontFamily: 'Bree Serif', fontSize: '2.2em'}}>
                <h1 style={{width: '100%', backgroundColor: 'rgba(255, 0, 0, 0.979)', padding: '0px 0px 4px 9px'}}>#C</h1>
                <div className="row" style={{marginLeft: '0px', width: '100%'}}>
                    <div className="col-lg-3 col-md-4 col-sm-6  grid text-left" style={{padding: '0px 5px 0px 5px'}}>
                        <div className="row" style={{marginLeft: '-3px', marginBottom: '10px'}}>
                            <img src={foto} alt="A.o" style={{maxWidth: '40px', maxHeight: '40px'}}/>
                            <h1 style={{color: 'black', fontFamily: 'Merriweather', fontSize: '14px', fontWeight: '600', padding: '4px 0px 0px 9px'}}>A.o.<br/>A・O(アーオー)</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </div>
      </>
    )
  }
  export default PersonagensPage
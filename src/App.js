import React, {useState, useEffect} from 'react';
import './App.css';

function Box(props) {

  let color = 'black';
  if (props.cur.filter(item => item.col === props.c && item.row === props.r).length !== 0) color = 'current';
  if (props.fill.filter(item => item.col === props.c && item.row === props.r).length !== 0) color = 'filled';
  console.log(color, props.c, props.r);
  return (
    <div className={`box blk-bkg ${color === 'current' ? 'yello-bkg': ''} ${color ==='filled' ? 'wt-bkg': ''}`}></div>
  );
}

function App(props) {
  const [target, setTarget] = useState(0);
  const [status, setStatus] = useState(0);
  const [cur, setCur] = useState(props.allBox[0][0]);
  const [fill, setFill] = useState(props.allBox[1][1]);
  console.log(props.allBox, 'box', cur);

  // useEffect(() => {
  //   window.addEventLister('key')
  // },[]);
  
  useEffect(() => {
    setInterval(() => {
      
    },1000)
  }, [cur])

  return (
    <div className="app">
      <header>
        <div className="score">
          Score: 
          <div>1</div>
        </div>
      </header>
      <div className="grid">
        {new Array(15).fill(1).map((vr, r) => (
          <div className="row" key={'row' + r}>
            {new Array(13).fill(1).map((vc, c) => (
              <Box c={c} r ={r} cur={cur} fill={fill} key={'col' + c + 'row' + r} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


// add next sign 
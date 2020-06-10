import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const allBox =
  [
    [
      [
        {'row':0,'col':1}, {'row':1,'col':0}, {'row':1,'col':1}, {'row':1,'col':2}
      ],
      [
        {'row':0,'col':0}, {'row':1,'col':0}, {'row':1,'col':1}, {'row':2,'col':0}
      ],
      [
        {'row':0,'col':0}, {'row':0,'col':1}, {'row':0,'col':2}, {'row':1,'col':1}
      ],
      [
        {'row':0,'col':1}, {'row':1,'col':0}, {'row':1,'col':1}, {'row':2,'col':1}
      ]
    ],
    [
      [
        {'row':0,'col':0}
      ],
      [
        {'row':0,'col':0}
      ],
      [
        {'row':0,'col':0}
      ],
      [
        {'row':0,'col':0}
      ]
    ]
  ];


ReactDOM.render(
  <React.StrictMode>
    <App allBox={allBox}/>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";
import ToDoListStatefull  from './containers/ToDoListStatefull';
import ToDoListStateless from './containers/ToDoListStateless';
import ToDoListFunctional from './containers/ToDoListFunctional';
import App from './containers/App_6';
import NameForm from './containers/NameForm';
import SorveteForm from './containers/SorveteForm';
import FileInput from './containers/FileInput';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FileInput/>);

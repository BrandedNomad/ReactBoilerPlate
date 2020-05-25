
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {firebase} from './firebase/firebase';
import {login,logout} from './actions/auth'
import LoadingPage from './components/LoadingPage'


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

let hasRendered = false
const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
}


ReactDOM.render(<LoadingPage/>, document.getElementById('root'));


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log('user id', user.uid);
        store.dispatch(login(user.uid))
        renderApp();
        if(history.location.pathname === '/'){
            history.push('/dashboard')
        }
    }else{
        console.log('log out')
        store.dispatch(logout())
        renderApp();
        history.push('/')
    }
})

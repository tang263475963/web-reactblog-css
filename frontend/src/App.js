import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import { Container } from 'reactstrap';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Content from './components/Content';
import Profile from './components/Profile';
import Users from './components/Users';
import Register from './components/Register';
import Login from './components/Login';
import Blog from './components/Blog';
import BlogForm from './components/BlogForm';
import BlogDetail from './components/BlogDetail';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';


function App() {
  return (
    <div>
      <Header />
      <Container fluid={true}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Content" component={Content} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={Users} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/test1" component={Test1} />
        <Route path="/test2" component={Test2} />
        <Route path="/test3" component={Test3} />
        <Route path="/blog" component={Blog} />
        <Route path='/blogform' component={BlogForm} />
        <Route path='/blog/:id' component={BlogDetail} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import CreateBlog from './pages/CreateBlog';
import DetailBlog from './pages/DetailBlog';
import Header from './components/Header';



export default function App() {
  return (
    <>
    <Header/>
    <Routes>
      {/* 
      `Route` permet de définir un chemin et le composant à afficher sur ce dernier
      Dans la version v5 de `react-router-dom` element était nommé `component`
    */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage/>} />
        {/* 
        Les chemin imbriquéespermette d'avoir des chemins qui vont s'imbriquer par rapport à leurs chemins principales
        /blogs => Page avec tous les articles du site
        /blogs/1 accéder a un article à partir du chemin '/blogs'
        /blogs/new =< un formulaire pour crée un blog
        /blog-create
      */}
      <Route path='/blogs'>
        {/* 
          La propriété `index` permet de définir le composant principal
        */}
        <Route index element={<BlogPage/>}/>
        {/* 
          Quand on utilise pour le chemin des liens 'enfant' juste le nom sans '/' devant
        */}
        <Route path='new' element={<CreateBlog/>}/>
        {/* 
          Les chemins dynamique permettent d'accéder à une page de façon automatique
        */}
        <Route path=':id' element={<DetailBlog/>}/>

      </Route>
    </Routes>
  </>
  );
}

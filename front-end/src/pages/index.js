import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import Tracks from './tracks';
import Track from './track';
import Module from './module';
import { Layout } from '../components';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Tracks />} path="/" />
        <Route element={<Track />} path="/track/:trackId" />
        <Route element={<Module />} path="/track/:trackId/module/:moduleId" />
        <Route element={<Layout />} path="/another" />
      </Routes>
    </BrowserRouter>
  );
}

import { App, NotFound } from 'components/layouts';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from 'views';

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<div>contact us</div>} />
        <Route path="how-it-works" element={<div>how it works</div>} />
        <Route path="help" element={<div>HELP</div>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
export default Routing;

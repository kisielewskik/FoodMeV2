import { App, NotFound } from 'components/layouts';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactUs, Help, Home, HowItWorks } from 'views';

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="help" element={<Help />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
export default Routing;

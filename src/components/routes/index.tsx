import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Resume from '../resume'

const routes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/resume" />} />
    <Route path="/resume" element={<Resume />} />
  </Routes>
);

export default routes
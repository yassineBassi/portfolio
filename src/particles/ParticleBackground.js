import React from 'react';
import Particles from 'react-particles-js';
import ParticlesConfig from './Particle-config';

function ParticleBackground() {
  return <Particles params={ParticlesConfig} />;
}

export default ParticleBackground;
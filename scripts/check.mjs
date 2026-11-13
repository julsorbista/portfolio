import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { createElement, Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import { projects } from '../src/data/projects.js';

// Render every section with Vite's real JSX configuration to catch runtime import
// errors that compilation alone misses. This does not replace browser layout QA.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const names = ['Navbar', 'Hero', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact', 'Footer'];
  const components = [];
  for (const name of names) {
    const { default: Component } = await server.ssrLoadModule(`/src/components/${name}.jsx`);
    components.push(createElement(Component, { key: name, onViewCV() {}, onExplore() {} }));
  }
  const html = renderToStaticMarkup(createElement(Fragment, null, components));
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'Duplicate element IDs');
  for (const match of html.matchAll(/href="#([^"]*)"/g)) {
    assert(match[1] && ids.includes(match[1]), `Missing navigation target: ${match[1]}`);
  }
  for (const id of ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact']) {
    assert(ids.includes(id), `Missing section: ${id}`);
  }
  assert.equal((html.match(/<details\b/g) || []).length, 5, 'Expected five accessible project expansions');
  const projectsWithoutImages = projects.filter(project => !project.images?.length && !project.screenshot);
  assert.equal((html.match(/Preview coming soon/g) || []).length, projectsWithoutImages.length, 'Incorrect screenshot placeholders');
  for (const project of projects) {
    for (const image of project.images || []) {
      assert(existsSync(`public${image.src}`), `Missing gallery image: ${image.src}`);
      assert(image.alt && image.caption && image.width > 0 && image.height > 0, `Incomplete image metadata: ${image.src}`);
    }
  }
  assert(!/href="(?:null|undefined|#)"/.test(html), 'Nonfunctional placeholder link');
  for (const match of html.matchAll(/(?:src|href)="(\/[^"#]*)"/g)) {
    assert(existsSync(`public${match[1].split('#')[0]}`), `Missing local asset: ${match[1]}`);
  }
  console.log('PASS: all components render; section anchors, unique IDs, project expansions, placeholders, and local assets checked.');
} finally {
  await server.close();
}

/**
 * Core Application Logic, Theme Management, and LocalStorage State Helpers
 */

import { DEFAULT_PROFILE } from '../data/logicData.js';

// Init theme on load
export function initTheme() {
  const savedTheme = localStorage.getItem('ielts_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.textContent = savedTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('ielts_theme', next);
      toggleBtn.textContent = next === 'dark' ? '☀️ Light' : '🌙 Dark';
    });
  }
}

// User profile target bands helper
export function getProfile() {
  const saved = localStorage.getItem('ielts_profile');
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  return DEFAULT_PROFILE;
}

export function saveProfile(profile) {
  localStorage.setItem('ielts_profile', JSON.stringify(profile));
}

// Active link highlighter
export function highlightNav() {
  const pathname = window.location.pathname;
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (pathname.endsWith(href) || (href !== 'index.html' && pathname.includes(href.replace('.html', '')))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  highlightNav();
});

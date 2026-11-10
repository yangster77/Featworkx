{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
document.addEventListener("DOMContentLoaded", () => \{\
  const menuButton = document.querySelector(".menu-toggle");\
  const navLinks = document.querySelector(".nav-links");\
  const year = document.querySelector("#current-year");\
\
  // Update copyright year\
  if (year) \{\
    year.textContent = new Date().getFullYear();\
  \}\
\
  // Mobile menu\
  if (menuButton && navLinks) \{\
    menuButton.addEventListener("click", () => \{\
      const isOpen = navLinks.classList.toggle("is-open");\
\
      menuButton.setAttribute("aria-expanded", String(isOpen));\
\
      const label = menuButton.querySelector(".menu-label");\
      if (label) \{\
        label.textContent = isOpen ? "Close" : "Menu";\
      \}\
    \});\
\
    // Close menu when navigation link is selected\
    navLinks.querySelectorAll("a").forEach(link => \{\
      link.addEventListener("click", () => \{\
        navLinks.classList.remove("is-open");\
        menuButton.setAttribute("aria-expanded", "false");\
      \});\
    \});\
\
    // Close menu using Escape key\
    document.addEventListener("keydown", event => \{\
      if (event.key === "Escape") \{\
        navLinks.classList.remove("is-open");\
        menuButton.setAttribute("aria-expanded", "false");\
      \}\
    \});\
  \}\
\
  // Temporary contact message\
  const contactButton = document.querySelector(".contact-button");\
\
  if (contactButton) \{\
    contactButton.addEventListener("click", event => \{\
      if (contactButton.href.includes("YOUR_EMAIL")) \{\
        event.preventDefault();\
        alert("FEATWORKX contact information is coming soon.");\
      \}\
    \});\
  \}\
\});\
}
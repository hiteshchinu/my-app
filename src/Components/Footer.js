import React from 'react';

export default function Footer(props) {
  return (
    <footer className={`bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'} py-3 text-center`}>
      <div className="container">
        <p className="mb-0">
        Copyright &copy; 2024 | Designed By <a href="https://github.com/hiteshchinu" target="_blank" rel="noopener noreferrer">Hitesh</a>.
        </p>
      </div>
    </footer>
  );
}
